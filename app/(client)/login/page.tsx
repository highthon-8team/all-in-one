"use client";
import Image from "next/image";
import snooz from "../_image/snooz_logo.svg";
import { ChangeEvent, useState } from "react";
import { instance } from "../_utils/instance";
import { useRouter } from "next/navigation";
import { userIdCookie } from "../_utils/userId";

export default function LoginPage() {
  const [state, setState] = useState({
    userId: "",
    password: "",
  });

  const router = useRouter();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setState((state) => ({ ...state, [name]: value }));
  };

  const onSubmit = async () => {
    try {
      const data = await instance.post("/login", state);

      userIdCookie.set(data.data.userId);
      router.push("/");
    } catch (e) {
      alert("로그인에 실패하셨습니다.");
    }
  };

  return (
    <>
      <div className="flex flex-col w-full h-screen justify-center items-center gap-4">
        <div className="relative bottom-20 h-0">
          <Image src={snooz} alt="Snooz Logo" />
        </div>
        <input
          className="px-4 mt-8 outline-none border border-white rounded-xl w-full h-12 bg-transparent"
          placeholder="아이디"
          name="userId"
          onChange={onChange}
        />
        <input
          className="px-4 mb-2 outline-none border border-white rounded-xl w-full h-12 bg-transparent"
          placeholder="비밀번호"
          name="password"
          onChange={onChange}
        />
        <button
          className="rounded-xl bg-[#7F30FF] w-full h-14"
          onClick={onSubmit}
        >
          로그인 하기
        </button>
      </div>
    </>
  );
}
