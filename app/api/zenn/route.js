import { NextResponse } from "next/server";
import axios from "axios";
import { load } from "cheerio";

const fetchTrend = async (html) => {
  const $ = load(html);
  const raw = $("script[id=__NEXT_DATA__]").html() ?? "";
  if (raw === undefined) {
    return {};
  }
  const rawData = JSON.parse(raw).props.pageProps.dailyTechArticles;

  return rawData;
};

export async function GET(request, response) {
  console.time("zenn");
  const url = "https://zenn.dev/";
  const res = await axios.get(url);
  const result = await fetchTrend(res.data);
  console.timeEnd("zenn");
  return NextResponse.json(result);
}
