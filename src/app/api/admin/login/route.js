import { NextResponse } from "next/server";
import {
  isAdminConfigured,
  passwordMatches,
  setAdminSession,
} from "@/lib/questions/auth";

export async function POST(request) {
  if (!isAdminConfigured()) {
    return NextResponse.json({ error: "管理员登录尚未配置" }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "请求格式无效" }, { status: 400 });
  }

  if (!passwordMatches(body?.password)) {
    return NextResponse.json({ error: "密码不正确" }, { status: 401 });
  }

  setAdminSession();
  return NextResponse.json({ ok: true });
}
