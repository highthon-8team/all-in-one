import { NextResponse } from "next/server";
import { createUser } from "../_repository/user";

export async function POST(req: Request) {
  try {
    const { userId, password } = await req.json();

    await createUser(userId, password);
    return NextResponse.json({ message: "성공" });
  } catch (error) {
    return NextResponse.json({ message: "실패" });
  }
}
