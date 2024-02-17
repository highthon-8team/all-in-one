"use client";

import Image from "next/image";
import recordVoice from "../_image/recordVoice.svg";

export default function RecordSpeakingPage() {
  return (
    <div className="flex flex-col gap-4 self-start text-3xl font-bold w-full whitespace-nowrap mt-32">
      <h1>
        오늘 꾼 꿈의 내용을
        <br />
        말해보세요.
      </h1>

      <div className="mx-auto w-[230px] h-[230px] rounded-full bg-[#7F30FF]">
        <div className="mx-auto my-[18px] pt-[16px] w-[190px] h-[190px] rounded-full bg-[#1E1E1E]">
          <div className="mx-auto pt-[36px] w-[160px] h-[160px] rounded-full bg-[#47355D]">
            <Image
              className="mx-auto"
              src={recordVoice}
              alt="recordVoice.png"
              width={70}
              height={70}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
