import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "question_admin_session";
const SESSION_AGE_SECONDS = 60 * 60 * 24 * 7;

function sign(value) {
  return createHmac("sha256", process.env.QUESTION_SESSION_SECRET)
    .update(value)
    .digest("hex");
}

export function isAdminConfigured() {
  return Boolean(
    process.env.QUESTION_ADMIN_PASSWORD && process.env.QUESTION_SESSION_SECRET
  );
}

export function passwordMatches(candidate) {
  const expected = process.env.QUESTION_ADMIN_PASSWORD;
  if (!expected || typeof candidate !== "string") return false;

  const candidateBuffer = Buffer.from(candidate);
  const expectedBuffer = Buffer.from(expected);
  return (
    candidateBuffer.length === expectedBuffer.length &&
    timingSafeEqual(candidateBuffer, expectedBuffer)
  );
}

export function setAdminSession() {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_AGE_SECONDS;
  const payload = String(expiresAt);
  cookies().set(COOKIE_NAME, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_AGE_SECONDS,
  });
}

export function clearAdminSession() {
  cookies().set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
}

export function hasAdminSession() {
  if (!isAdminConfigured()) return false;

  const token = cookies().get(COOKIE_NAME)?.value;
  if (!token) return false;

  const [payload, suppliedSignature, extra] = token.split(".");
  if (!payload || !suppliedSignature || extra) return false;

  const expectedSignature = sign(payload);
  const suppliedBuffer = Buffer.from(suppliedSignature);
  const expectedBuffer = Buffer.from(expectedSignature);
  if (
    suppliedBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(suppliedBuffer, expectedBuffer)
  ) {
    return false;
  }

  return Number(payload) > Math.floor(Date.now() / 1000);
}
