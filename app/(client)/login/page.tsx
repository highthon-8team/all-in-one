import Image from "next/image";
import snooz from "../_image/snooz_logo.svg";

export default function RingingPage() {
  return (
    <>
      <div className="flex flex-col w-full h-screen justify-center items-center gap-4">
        <div className="relative bottom-20 h-0"><Image src={snooz} alt="Snooz Logo" /></div>
        <input className="mt-8 outline-none border border-white rounded-xl w-full h-12 bg-transparent placeholder-custom" placeholder="아이디" />
        <input className="mb-2 outline-none border border-white rounded-xl w-full h-12 bg-transparent placeholder-custom" placeholder="비밀번호" />
        <button className="rounded-xl bg-[#7F30FF] w-full h-14">로그인 하기</button>
      </div>
    </>
  );
}
