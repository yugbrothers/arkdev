import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {

  const filePath = path.join(
    process.cwd(),
    "../../storage/video/generated.json"
  );

  const raw = fs.readFileSync(
    filePath,
    "utf8"
  );

  return NextResponse.json(
    JSON.parse(raw)
  );
}
