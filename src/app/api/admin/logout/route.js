import { NextResponse } from "next/server";
import { clearAdminSession } from "@/lib/questions/auth";

export async function POST() {
  clearAdminSession();
  return NextResponse.json({ ok: true });
}
