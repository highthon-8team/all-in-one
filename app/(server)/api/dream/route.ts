import { createDream, findDreamByUserId } from "../../_repository/dream";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const userId = searchParams.get("userId");

  return NextResponse.json({ data: await findDreamByUserId(Number(userId)) });
}

export async function POST(req: NextRequest) {
  const { userId, dreamText } = await req.json();

  const dream = await createDream(dreamText, userId);

  return NextResponse.json({ data: dream });
}
