"use client";
import { useCalendar } from "@h6s/calendar";
import { format, getDate } from "date-fns";
import { ko } from "date-fns/locale";
import { clsx } from "clsx";
import dream from "../../_assets/dream.png";
import left from "../../_image/left_arrow.svg";
import right from "../../_image/right_arrow.svg";
import Image from "next/image";
const Calender = () => {
  const { headers, body, navigation, year, month } = useCalendar();

  return (
    <table className="w-full flex flex-col gap-5">
      <thead className="w-full">
        <tr className="w-full flex justify-center items-center gap-[10px] pb-5">
          <td onClick={navigation.toPrev}>
            <Image src={left} alt="" />
          </td>
          <td className="text-lg font-medium">
            {year}년 {month + 1}월
          </td>
          <td onClick={navigation.toNext}>
            <Image src={right} alt="" />
          </td>
        </tr>
        <tr className="w-full max-w-full grid grid-cols-7">
          {headers.weekDays.map(({ key, value }) => (
            <td
              className="flex justify-center items-center font-medium text-xs"
              key={key}
            >
              {format(value, "E", { locale: ko })}
            </td>
          ))}
        </tr>
      </thead>
      <tbody className="w-full">
        {body.value.map(({ key, value: days }) => (
          <tr key={key} className="w-full grid grid-cols-7">
            {days.map(({ key, value, isCurrentMonth, isCurrentDate }) => (
              <td
                key={key}
                className={clsx(
                  "flex justify-center items-center flex-col text-xs font-medium gap-[6px] mb-3"
                )}
              >
                {isCurrentMonth ? (
                  <>
                    <Image
                      src={dream}
                      width={30}
                      alt="꾼 꿈"
                      className={clsx("w-8 h-8")}
                    />
                    <p
                      className={clsx(
                        "w-5 h-5 rounded-full text-white flex justify-center items-center",
                        {
                          "bg-purple-500": isCurrentDate,
                        }
                      )}
                    >
                      {getDate(value)}
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calender;
