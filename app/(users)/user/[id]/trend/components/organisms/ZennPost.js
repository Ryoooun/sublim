import { load } from "cheerio";
import { NextResponse } from "next/server";
import path from "path";

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

  const fetchRawData = JSON.parse(raw).props.pageProps.dailyTechArticles;
  // const getRawData = async (fetchRawData) => {
  //   const body = await fetcher(`https://zenn.dev${fetchRawData.path}`);
  //   return {
  //     id: fetchRawData.id,
  //     title: fetchRawData.title,
  //     path: `https://zenn.dev${fetchRawData.path}`,
  //     user: {
  //       username: fetchRawData.user.username,
  //       avatarSmallUrl: fetchRawData.user.avatarSmallUrl,
  //     },
  //     parseBody: body,
  //   };
  // };
  const rawJson = await Promise.all(
    fetchRawData.map(async (obj) => {
      const parse = await fetch(
        path.join(
          process.cwd(),
          `app/api/parse?url=https://zenn.dev${obj.path}`
        )
      ).then((res) => res.json());
      return {
        id: obj.id,
        title: obj.title,
        path: `https://zenn.dev${obj.path}`,
        user: {
          username: obj.user.username,
          avatarSmallUrl: obj.user.avatarSmallUrl,
        },
        parse: parse.json,
      };
    })
  );
  return NextResponse.json(rawJson);
}
