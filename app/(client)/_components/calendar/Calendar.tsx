"use client";
import { useCalendar } from "@h6s/calendar";
import { format, getDate, isSameDay } from "date-fns";
import { ko } from "date-fns/locale";
import { clsx } from "clsx";
import dream from "../../_assets/dream.png";
import none from "../../_assets/none.png";
import left from "../../_image/left_arrow.svg";
import right from "../../_image/right_arrow.svg";
import Image from "next/image";
import { useFetch } from "../../_hooks/useFetch";
import { useRouter } from "next/navigation";
import { userIdCookie } from "../../_utils/userId";

const Calender = () => {
  const { headers, body, navigation, year, month } = useCalendar();
  const router = useRouter();
  const userId = userIdCookie.get();
  const { data, error } = useFetch<{
    data: {
      id: number;
      created_at: Date;
      dream_text: string;
      userId: number;
    }[];
  }>(`/api/dream?userId=${userId}`, {
    method: "get",
  });

  const findWriteDream = (currentDate: Date) =>
    data?.data.find(({ created_at }) => isSameDay(created_at, currentDate));

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
            {days.map(({ key, value, isCurrentMonth, isCurrentDate }) => {
              const writeDream = findWriteDream(value);
              return (
                <td
                  key={key}
                  className={clsx(
                    "flex justify-center items-center flex-col text-xs font-medium gap-[6px] mb-3 cursor-pointer"
                  )}
                  onClick={() =>
                    writeDream?.id && router.push(`/detail/${writeDream.id}`)
                  }
                >
                  {isCurrentMonth ? (
                    <>
                      <Image
                        src={writeDream ? dream : none}
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
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calender;
