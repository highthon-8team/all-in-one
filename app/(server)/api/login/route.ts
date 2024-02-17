import { NextResponse } from "next/server";
import { findUserByUserId } from "../../_repository/user";

export async function POST(req: Request) {
  const { userId, password } = await req.json();

  const user = await findUserByUserId(userId);

  if (user?.password === password)
    return NextResponse.json({ message: "로그인 성공", userId: user?.id });
  else return NextResponse.json({ message: "로그인 실패" });
}
