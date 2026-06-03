import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    provider: "placeholder",
    message: "Music generation endpoint ready"
  });
}
