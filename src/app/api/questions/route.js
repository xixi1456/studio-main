import { NextResponse } from "next/server";
import { getSupabaseAdmin, isSupabaseConfigured } from "@/lib/questions/supabase-admin";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: "问题墙尚未配置" }, { status: 503 });
  }

  const { data, error } = await getSupabaseAdmin()
    .from("questions")
    .select("id, text, created_at")
    .order("created_at", { ascending: false })
    .limit(19);

  if (error) {
    return NextResponse.json({ error: "暂时无法读取问题" }, { status: 500 });
  }

  return NextResponse.json({ questions: data });
}

export async function POST(request) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: "问题墙尚未配置" }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "请求格式无效" }, { status: 400 });
  }

  const text = typeof body?.text === "string" ? body.text.trim() : "";
  const length = [...text].length;
  if (!length || length > 100) {
    return NextResponse.json(
      { error: "问题需为 1 到 100 个字" },
      { status: 400 }
    );
  }

  const { data, error } = await getSupabaseAdmin()
    .from("questions")
    .insert({ text })
    .select("id, text, created_at")
    .single();

  if (error) {
    return NextResponse.json({ error: "问题提交失败，请稍后重试" }, { status: 500 });
  }

  return NextResponse.json({ question: data }, { status: 201 });
}
