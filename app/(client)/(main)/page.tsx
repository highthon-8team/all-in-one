import Image from "next/image";
import plusBold from "../_image/plus_bold.svg";
import snoozWhite from "../_image/snooz_white.svg";
import profile from "../_image/profile.svg";
import Link from "next/link";

export default function HistoryPage() {
  return (
    <>
      <div className="flex w-full justify-between">
        <Image src={snoozWhite} alt="Snooz" />
        <div className="cursor-pointer">
          <Image src={profile} alt="Profile picture" />{" "}
        </div>
      </div>
      <div className="w-full"></div>
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
