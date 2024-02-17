"use client";

import Image from "next/image";
import Link from "next/link";
import AlarmClock from "../../_components/alarm";
import { useState } from "react";

export default function RecordPage() {
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHours(e.target.value);
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col gap-4 self-start text-3xl font-bold w-full whitespace-nowrap mt-32">
        <h1>
          알람 시간을
          <br />
          수정해 주세요.
        </h1>
        {/* <AlarmClock /> */}
        {/* <div className="flex gap-5">
          <input type="number" value={hours} onChange={handleHoursChange} className="w-12 text-red-600" />
          <input type="number" value={minutes} onChange={handleMinutesChange} className="w-12 text-red-600" />
        </div> */}
      </div>
    </>
  );
}
