import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {

  const body = await req.json();

  const asset = {
    id: crypto.randomUUID(),
    prompt: body.prompt || "",
    genre: body.genre || "Electronic",
    mood: body.mood || "Happy",
    audio:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    createdAt:
      new Date().toISOString()
  };

  const filePath = path.join(
    process.cwd(),
    "../../storage/music/generated.json"
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
