import { NextResponse } from "next/server";
import { hasAdminSession } from "@/lib/questions/auth";
import { getSupabaseAdmin } from "@/lib/questions/supabase-admin";

export async function POST() {
  if (!hasAdminSession()) {
    return NextResponse.json({ error: "请先登录" }, { status: 401 });
  }

  const { data, error } = await getSupabaseAdmin().rpc("draw_and_delete_question");
  if (error) {
    return NextResponse.json({ error: "抽取失败，请稍后重试" }, { status: 500 });
  }

  const question = Array.isArray(data) ? data[0] || null : data;
  return NextResponse.json({ question });
}
