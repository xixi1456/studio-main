import { NextResponse } from "next/server";
import { hasAdminSession } from "@/lib/questions/auth";
import { getSupabaseAdmin } from "@/lib/questions/supabase-admin";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!hasAdminSession()) {
    return NextResponse.json({ error: "请先登录" }, { status: 401 });
  }

  const { data, error } = await getSupabaseAdmin()
    .from("questions")
    .select("id, text, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "暂时无法读取问题" }, { status: 500 });
  }

  return NextResponse.json({ questions: data });
}
