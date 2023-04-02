import { NextResponse } from "next/server";
import { generateAnswer } from "@/utils/queryApi";
import { createServerClient } from "@/utils/supabase-server";
export async function POST(request) {
  const { query } = await request.json();
  const supabase = createServerClient();
  const response = await generateAnswer(query);

  const message = {
    content: response || "poli couldn't find the answer",
    speaker: "poli",
  };
  await supabase.from("messages").insert(message);
  return NextResponse.json({ data: message });
}
