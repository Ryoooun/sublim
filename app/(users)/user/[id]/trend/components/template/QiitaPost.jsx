import dayjs from "dayjs";
// import { JSDOM } from "jsdom";
import Image from "next/image";

export default async function getData() {
  // const jsdom = new JSDOM();
  // const apiUrl = `${process.env.NEXT_PUBLIC_QIITA_API_URL}?per_page=4`;
  const apiUrl = `https://qiita.com/api/v2/items`;
  const res = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer 66f204291337e7fb68d83fcf89b220e99621b67d`,
    },
    next: {
      revalidate: 60 * 60 * 3,
    },
  });
  return res.json();
  // const ogpUrls = [];
  // for (let i = 0; i < qiitaItems.length; i++) {
  //   const { url } = qiitaItems[i];
  //   const res = await fetch(url);
  //   const text = await res.json();
  //   const el = new DOMParser().parseFromString(text, "text/html");
  //   const headEls = el.head.children;
  //   Array.from(headEls).map((v) => {
  //     const prop = v.getAttribute("property");
  //     if (!prop) return;
  //     if (prop === "og.image") {
  //       ogpUrls.push(v.getAttribute("content") ?? "");
  //     }
  //   });
  // }

  // const parsedQiitaItems = qiitaItems.map(
  //   (
  //     {
  //       coediting,
  //       comments_count,
  //       created_at,
  //       id,
  //       likes_count,
  //       page_views_count,
  //       tags,
  //       title,
  //       updated_at,
  //       url,
  //       reactions_count,
  //       private: _private,
  //     },
  //     i
  //   ) => {
  //     const parsedItem = {
  //       coediting,
  //       comments_count,
  //       created_at,
  //       id,
  //       likes_count,
  //       ogpImageUrl: ogpUrls[i],
  //       page_views_count,
  //       private: _private,
  //       reactions_count,
  //       tags,
  //       title,
  //       updated_at,
  //       url,
  //     };
  //     return parsedItem;
  //   }
  // );
  // const generatedAt = dayjs().format("YYYY-MM-DD HH:mm:ss");

  // return {
  //   props: { generatedAt, qiitaItems },
  // };
}
