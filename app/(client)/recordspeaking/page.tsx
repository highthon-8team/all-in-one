"use client";

import { useState } from "react";
import Image from "next/image";
import recordVoice from "../_image/recordVoice.svg";
import { useSpeechRecognition } from "react-speech-kit";
import { instance } from "../_utils/instance";
import { userIdCookie } from "../_utils/userId";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

export default function RecordSpeakingPage() {
  const [voice, setVoice] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const router = useRouter();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: string) => {
      // 음성인식 결과가 value 상태값으로 할당됩니다.
      setVoice(result);
      setIsSaved(true);
    },
  });

  const onSubmit = async () => {
    const userId = userIdCookie.get();
    try {
      await instance.post("/dream", {
        userId: userId,
        dreamText: voice,
      });
      alert("저장에 성공하였습니다!");
      router.push("/");
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.status === 500)
          return alert("꿈 저장은 하루에 한번만 가능합니다.");

        alert("저장에 실패하였습니다.");
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 self-start text-3xl font-bold w-full whitespace-nowrap mt-32">
      <h1>
        오늘 꾼 꿈의 내용을
        <br />
        말해보세요.
      </h1>

      {isSaved ? (
        <div className="flex flex-col">
          <textarea
            className="w-[100%] h-[300px] bg-transparent color-[#000] p-5 text-sm border-solid border-2 border-[#FFF]-400 rounded-md"
            onMouseUp={stop}
            defaultValue={voice}
            onChange={(e) => setVoice(e.target.value)}
          />
          <button
            onClick={onSubmit}
            className="w-[100%] h-[60px] bg-[#7F30FF] mt-8 font-light text-[1.4rem] rounded-md"
          >
            저장하기
          </button>
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
            {/* {listening && <span>음성인식 활성화 중 ...</span>} */}
          </div>
        </div>
      )}
    </div>
  );
}
