// app/api/form/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  console.log("模拟数据库写入操作（实际上没写入）：", data);

  return NextResponse.json({
    message: "数据已成功写入数据库",
    received: data,
    timestamp: new Date().toISOString(),
  });
}
