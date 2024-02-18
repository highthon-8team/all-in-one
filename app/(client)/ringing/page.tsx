"use client";
import Image from "next/image";
import memo from "../_image/memo.svg";
import alarmOff from "../_image/alarm_off.svg";
import { addDays, format } from "date-fns";
import Link from "next/link";
import { useEffect } from "react";
import { instance } from "../_utils/instance";
import { userIdCookie } from "../_utils/userId";
import { useFetch } from "../_hooks/useFetch";

export default function RingingPage() {
  const now = new Date();
  const userId = userIdCookie.get();
  const { data } = useFetch(`/api/alarm?userId=${userId}`, {
    method: "get",
  });

  useEffect(() => {
    if (!data) return;
    instance.patch(`/alarm?alarmId=${data.data.id}`, {
      startedAt: addDays(data.data.started_at, 1),
    });
    return;
  }, [data]);
  return (
    <>
      <div className="text-lg text-[#B4B4B4] mt-24">알람 제목</div>
      <div className="flex mt-2 gap-2">
        <span className="text-7xl font-medium">{format(now, "hh:mm")}</span>
        <span className="text-xl self-end">{format(now, "aa")}</span>
      </div>
      <div className="w-full"></div>
      <div className="fixed bottom-20 w-full flex justify-between px-14">
        <Link href={"/recordspeaking"}>
          <div className="flex flex-col self-start items-center gap-4">
            <div className="flex items-center justify-center rounded-full w-20 h-20 bg-[#7F30FF] self-start shadow-circle">
              <Image src={memo} alt="" />
            </div>

            <span className="text-sm">꿈 기록</span>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex flex-col self-end items-center gap-4">
            <div className="flex items-center justify-center rounded-full w-20 h-20 bg-[#F75353] self-end shadow-circle">
              <Image src={alarmOff} alt="" />
            </div>
            <span className="text-sm">알람 중단</span>
          </div>
        </Link>
      </div>
    </>
  );
}
