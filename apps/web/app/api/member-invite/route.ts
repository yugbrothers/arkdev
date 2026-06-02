import { NextResponse } from "next/server";

export async function POST() {

  return NextResponse.json({
    success:true,
    message:"Member invite endpoint placeholder"
  });

}
