"use client";

import Image from "next/image";
import mic from "../_image/mic.png";
import keyboard from "../_image/keyboard.png";
import Link from "next/link";

export default function RingingPage() {
  return (
    <>
      <div className="flex flex-col gap-4 self-start text-3xl font-bold w-full whitespace-nowrap mt-32">
        <h1>
          꿈을 어떻게
          <br />
          기록하실 건가요?
        </h1>
        <div className="p-5 flex justify-between items-center w-full h-32 bg-[#7F30FF33] border border-[#7F30FF] rounded-xl">
          <div className="flex flex-col">
            <span className="text-lg">음성 기록</span>
            <span className="text-xs">
              목소리로 오늘의 꿈 내용을 쉽게 기록하세요.
            </span>
          </div>
          <Image src={mic} alt="mic" className="h-[50px]" />
        </div>
        <div className="p-5 flex justify-between items-center w-full h-32 bg-transparent border border-[#7F30FF] rounded-xl">
          <div className="flex flex-col">
            <span className="text-lg">텍스트 기록</span>
            <span className="text-xs">
              목소리로 오늘의 꿈 내용을 쉽게 기록하세요.
            </span>
          </div>
          <Image src={keyboard} alt="keyboard" className="h-[50px]" />
        </div>
      </div>
    </>
  );
}
