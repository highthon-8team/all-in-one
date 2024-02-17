"use client";

import { useState } from "react";
import Image from "next/image";
import recordVoice from "../_image/recordVoice.svg";
import { useSpeechRecognition } from "react-speech-kit";

export default function RecordSpeakingPage() {
  const [voice, setVoice] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: string) => {
      // 음성인식 결과가 value 상태값으로 할당됩니다.
      setVoice(result);
      setIsSaved(true);
    },
  });

  return (
    <div className="flex flex-col gap-4 self-start text-3xl font-bold w-full whitespace-nowrap mt-32">
      <h1>
        오늘 꾼 꿈의 내용을
        <br />
        말해보세요.
      </h1>

      {isSaved ? (
        <div className="w-[100%]" onMouseUp={stop}>
          {voice}
        </div>
      ) : (
        <div className="mx-auto w-[230px] h-[230px] rounded-full bg-[#7F30FF]">
          <div className="mx-auto my-[10px] pt-[16px] w-[210px] h-[210px] rounded-full bg-[#1E1E1E]">
            <div
              className="mx-auto pt-[46px] w-[180px] h-[180px] rounded-full bg-[#47355D]"
              onMouseDown={() => {
                listen({ interimResults: false });
              }}
            >
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
      )}
      {listening && <span>음성인식 활성화 중 ...</span>}
    </div>
  );
}
