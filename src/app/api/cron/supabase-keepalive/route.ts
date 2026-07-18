import type { NextRequest } from "next/server";
import supabase from "@/lib/supabase-client";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { count, error } = await supabase
    .from("todos")
    .select("id", { count: "exact", head: true });

  if (error) {
    return Response.json(
      {
        ok: false,
        error: error.message,
        checkedAt: new Date().toISOString(),
      },
      { status: 502 }
    );
  }

  return Response.json({
    ok: true,
    count,
    checkedAt: new Date().toISOString(),
  });
}
