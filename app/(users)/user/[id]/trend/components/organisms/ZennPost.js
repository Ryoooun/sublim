import { load } from "cheerio";
import { NextResponse } from "next/server";
import path from "path";
import { URL } from "url";

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
  const IS_SERVER = typeof window === "undefined";
  const rawJson = await Promise.all(
    fetchRawData.map(async (obj) => {
      const url = IS_SERVER
        ? `https://sublim-git-firebasetorestapi-ryoooun.vercel.app/api/parse?url=https://zenn.dev${obj.path}`
        : `http://localhost:3000/api/parse?url=https://zenn.dev${obj.paht}`;
      const parse = await fetch(url).then((res) => res.json());
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
