import { useSearchParams } from "next/navigation";
import { findDreamByUserId } from "../_repository/dream";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const userId = searchParams.get("userId");
  console.log(userId);

  return NextResponse.json({ data: await findDreamByUserId(Number(userId)) });
}
