"use client";

import Image from "next/image";
import bracket from "../_image/bracket.svg";
import plus from "../_image/plus.svg";
import illustrate from "../_image/illustrate.svg";
import Link from "next/link";
import { useFetch } from "../_hooks/useFetch";
import { userIdCookie } from "../_utils/userId";
import { format } from "date-fns";

export default function AlarmPage() {
  const userId = userIdCookie.get();
  const { data } = useFetch(`/api/alarm?userId=${userId}`, {
    method: "get",
  });
  if (!data) return;

  return (
    <>
      <div className="flex justify-between w-full">
        <Link href="/">
          <Image src={bracket} alt="" />
        </Link>
        <span className="font-semibold text-lg">알람</span>
        <Image src={plus} alt="" className="opacity-0" />
      </div>
      <div className="flex mt-20 gap-2">
        <span className="text-5xl font-medium">
          {format(data?.data.started_at, "hh:mm")}
        </span>
        <span className="text-base self-end">
          {format(data?.data.started_at, "aa")}
        </span>
      </div>

      <div className="w-full mt-20 flex items-center justify-center">
        <Image src={illustrate} alt="" />
      </div>

      <Link href="/alarm/modify" className="fixed bottom-32">
        <div className="flex items-center justify-center border border-white rounded-full w-32 h-10 bg-transparent">
          알람 수정
        </div>
      </Link>
    </>
  );
}
