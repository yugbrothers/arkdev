import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  return NextResponse.json({
    success: true,
    prompt,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1024"
  });
}
