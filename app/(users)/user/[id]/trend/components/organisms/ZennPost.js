import { load } from "cheerio";
import { NextResponse } from "next/server";

export async function ZennPost(params) {
  console.time("zenn");
  const url = "https://zenn.dev";
  const res = await fetch(url, {
    next: {
      revalidate: 86400,
    },
  }).catch((err) => console.error(err));
  const data = await res.text();
  const $ = load(data);
  const raw = $("script[id=__NEXT_DATA__]").html() ?? "";
  if (raw === undefined) {
    return {};
  }

  const rawData = JSON.parse(raw).props.pageProps.dailyTechArticles;
  console.timeEnd("zenn");
  return NextResponse.json(rawData);
}
