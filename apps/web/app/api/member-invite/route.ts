import {
  NextRequest,
  NextResponse
} from "next/server";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5050";

export async function POST(
  request: NextRequest
) {

  try {

    const body =
      await request.json();

    const {
      workspaceId,
      email
    } = body;

    const authorization =
      request.headers.get(
        "authorization"
      ) || "";

    const response =
      await fetch(
        `${API_URL}/workspaces/${workspaceId}/members`,
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            Authorization:authorization
          },
          body:JSON.stringify({
            email
          })
        }
      );

    const data =
      await response.json();

    return NextResponse.json(
      data,
      {
        status:response.status
      }
    );

  } catch {

    return NextResponse.json(
      {
        error:
          "Failed to invite member"
      },
      {
        status:500
      }
    );

  }

}
