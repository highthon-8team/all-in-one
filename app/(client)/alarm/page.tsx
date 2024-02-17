"use client";

import Image from "next/image";
import bracket from "../_image/bracket.svg";
import plus from "../_image/plus.svg";
import illustrate from "../_image/illustrate.svg";
import Link from "next/link";

export default function AlarmPage() {
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
        <span className="text-5xl font-medium">9:30</span>
        <span className="text-base self-end">PM</span>
      </div>
      <div className="text-lg text-[#B4B4B4] my-4">알람 제목</div>

      <div className="w-full mt-20 flex items-center justify-center">
        <Image src={illustrate} alt="" />
      </div>

      <div className="flex items-center justify-center border border-white fixed rounded-full w-32 h-10 bg-transparent bottom-32">
        알람 수정
      </div>
    </>
  );
}
