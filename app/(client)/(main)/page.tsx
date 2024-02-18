"use client";
import Image from "next/image";
import plusBold from "../_image/plus_bold.svg";
import snoozWhite from "../_image/snooz_white.svg";
import profile from "../_image/profile.svg";
import Link from "next/link";
import Calendar from "../_components/calendar/Calendar";
import { useEffect } from "react";
import { useFetch } from "../_hooks/useFetch";
import { userIdCookie } from "../_utils/userId";
import { useRouter } from "next/navigation";
import { differenceInMilliseconds } from "date-fns";

export default function MainPage() {
  const userId = userIdCookie.get();
  const { data } = useFetch(`/api/alarm?userId=${userId}`, {
    method: "get",
  });

  const router = useRouter();

  useEffect(() => {
    if (!data) return;

    const a = differenceInMilliseconds(data.data.started_at, new Date());

    const b = setTimeout(() => {
      router.push("/ringing");
    }, a);
    return () => clearTimeout(b);
  }, [data]);
  return (
    <>
      <div className="flex w-full justify-between">
        <Image src={snoozWhite} alt="Snooz" />
        <div className="cursor-pointer">
          <Image src={profile} alt="Profile picture" />
        </div>
      </div>
      <div className="w-full mt-2">
        <Calendar />
      </div>
      <Link
        href="/alarm"
        className="fixed flex justify-end items-center self-end bottom-10"
      >
        <button className="flex gap-1 justify-center items-center rounded-3xl w-24 h-12 bg-[#7F30FF]">
          <Image src={plusBold} alt="" />
          <span className="font-bold">Alarm</span>
        </button>
      </Link>
    </>
  );
}
