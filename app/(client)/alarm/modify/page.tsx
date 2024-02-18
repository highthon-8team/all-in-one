"use client";

import Image from "next/image";
import Link from "next/link";
import AlarmClock from "../../_components/alarm";
import { useEffect, useRef, useState } from "react";

export default function RecordPage() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const hoursRef = useRef<HTMLDivElement>(null);
  const minutesRef = useRef<HTMLDivElement>(null);

  function onHoursScroll() {
    if (hoursRef.current) setHours(Math.round(hoursRef.current.scrollTop / 30));
  }

  function onMinutesScroll() {
    if (minutesRef.current)
      setMinutes(Math.round(minutesRef.current.scrollTop / 30));
  }

  useEffect(() => {
    hoursRef.current?.addEventListener("scroll", hoursScroll);
    return () => {
      hoursRef.current?.removeEventListener("scroll", hoursScroll);
    };
  }, []);

  function range(start: number, end: number) {
    let array = [];
    for (let i = start; i < end; ++i) {
      array.push(i);
    }
    return array;
  }

  const hoursScroll = () => {
    return range(0, 24).map((idx) => (
      <span className={"text-center h-[30px] px-2 pb-[10px] " + (hours === idx ? "text-3xl text-white px-0" : "")}>
        {idx.toString().length === 1 ? "0" + idx : idx}
      </span>
    ));
  };

  const minutesScroll = () => {
    return range(0, 60).map((idx) => (
      <span className={"text-center h-[30px] px-2 pb-[10px] " + (minutes === idx ? "text-3xl text-white px-0" : "")}>
        {idx.toString().length === 1 ? "0" + idx : idx}
      </span>
    ));
  };

  useEffect(() => {
    console.log(hours, minutes);
    
  }, [hours, minutes])

  return (
    <>
      <div className="flex flex-col gap-4 self-start text-3xl font-bold w-full whitespace-nowrap mt-32">
        <h1>
          알람 시간을
          <br />
          수정해 주세요.
        </h1>
        <div className="flex justify-center self-center gap-10 mt-12 text-2xl text-gray-600 w-full">
          <div
            ref={hoursRef}
            className="flex flex-col h-[90px] overflow-y-scroll"
            onScroll={onHoursScroll}
          >
            <span className="h-[30px] opacity-0 px-2 pb-[10px]">00</span>
            {hoursScroll()}
            <span className="h-[30px] opacity-0 px-2 pb-[10px]">00</span>
          </div>
          <span className="self-center">:</span>
          <div
            ref={minutesRef}
            className="flex flex-col h-[90px] overflow-y-scroll"
            onScroll={onMinutesScroll}
          >
            <span className="h-[30px] opacity-0 px-2 pb-[10px]">00</span>
            {minutesScroll()}
            <span className="h-[30px] opacity-0 px-2 pb-[10px]">00</span>
          </div>
        </div>
        {/* <AlarmClock /> */}
        {/* <div className="flex gap-5">
          <input type="number" value={hours} onChange={handleHoursChange} className="w-12 text-red-600" />
          <input type="number" value={minutes} onChange={handleMinutesChange} className="w-12 text-red-600" />
        </div> */}
      </div>
    </>
  );
}
