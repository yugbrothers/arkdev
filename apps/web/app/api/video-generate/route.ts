import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {

  const body = await req.json();

  const asset = {
    id: crypto.randomUUID(),
    prompt: body.prompt || "",
    musicId: body.musicId || "",
    video:
      "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    createdAt:
      new Date().toISOString()
  };

  const filePath = path.join(
    process.cwd(),
    "../../storage/video/generated.json"
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
    success:true,
    ...asset
  });
}
