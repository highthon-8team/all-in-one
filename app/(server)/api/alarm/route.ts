import { NextRequest, NextResponse } from "next/server";
import {
  createAlarm,
  findAlarmById,
  updateAlarm,
} from "../../_repository/alarm";
import { parseQueryString } from "../_utils/queryString";

export async function PATCH(req: NextRequest) {
  try {
    const { startedAt } = await req.json();
    console.log(startedAt);
    const querystringObj = parseQueryString(req.url);
    console.log(querystringObj);
    const alarm = await updateAlarm(startedAt, Number(querystringObj.alarmId));

    return NextResponse.json({ message: "알람 설정 성공", data: alarm });
  } catch (error) {
    return NextResponse.json({ message: "설정 실패" }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId, startedAt } = await req.json();
    const alarm = await createAlarm(Number(userId), startedAt);

    return NextResponse.json({ message: "알람 생성 성공", data: alarm });
  } catch (error) {
    return NextResponse.json({ message: "알람 생성 실패" }, { status: 400 });
  }
}

export async function GET(req: NextRequest) {
  const querystringObj = parseQueryString(req.url);
  const alarm = await findAlarmById(Number(querystringObj.userId));

  return NextResponse.json({ message: "알람 정보", data: alarm });
}
