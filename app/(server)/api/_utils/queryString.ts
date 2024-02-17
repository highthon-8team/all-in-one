import { NextResponse } from "next/server";
import qs from "qs";

export function parseQueryString(reqUrl: string) {
  const parseString = reqUrl.split("?").at(1);
  if (parseString === undefined) {
    return NextResponse.json({ message: "응 언디파인드" });
  }
  return qs.parse(parseString);
}
