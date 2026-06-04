import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {

  const { prompt } = await req.json();

  const asset = {
    id: crypto.randomUUID(),
    prompt,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1024",
    createdAt:
      new Date().toISOString()
  };

  const filePath = path.join(
    process.cwd(),
    "../../storage/assets/generated.json"
  );

  const existing = JSON.parse(
    fs.readFileSync(
      filePath,
      "utf8"
    )
  );

  existing.unshift(asset);

  fs.writeFileSync(
    filePath,
    JSON.stringify(
      existing,
      null,
      2
    )
  );

  return NextResponse.json({
    success: true,
    ...asset
  });
}
