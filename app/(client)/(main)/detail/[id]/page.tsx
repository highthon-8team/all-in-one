"use client";

import { useFetch } from "@/app/(client)/_hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import bracket from "../../../_image/bracket.svg";
import { format } from "date-fns/format";
import { userIdCookie } from "@/app/(client)/_utils/userId";

export const Page = ({ params }: { params: { id: string } }) => {
  const userId = userIdCookie.get();
  const { data } = useFetch<{
    data: {
      id: number;
      created_at: Date;
      dream_text: string;
      userId: number;
    }[];
  }>(`/api/dream?userId=${userId}`, {
    method: "get",
  });

  const dreamDetail = data?.data.find(({ id }) => id === +params.id);

  if (!dreamDetail) return;

  return (
    <>
      <div className="flex justify-between w-full">
        <Link href="/">
          <Image src={bracket} alt="" />
        </Link>
        <span className="font-semibold text-lg">꿈 기록</span>
        <div></div>
      </div>

      <div className="py-[15px] font-bold text-[24px]">
        {format(dreamDetail.created_at, "yyyy.MM.dd")}
      </div>
      <div className="rounded-xl border w-full border-white p-4 text-gray-400">
        {dreamDetail.dream_text}
      </div>
    </>
  );
};

export default Page;
