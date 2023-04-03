import dayjs from "dayjs";
import { load } from "cheerio";

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
  }).catch((err) => console.error(err));
  const postsArray = await res.json();
  const postsDetailArray = await Promise.all(
    postsArray.map(async (post) => {
      const tags = post.tags.map((tag) => tag?.name);
      const url = post.url;
      const res = await fetch(url).catch((err) => console.log(err));
      const text = await res.text();
      const $ = await load(text);
      const ogImageUrl = $("meta[property=og:image]").attr().content;
      const ogSiteName = $("meta[property=og:site_name]").attr().content;

      return {
        id: post.id,
        title: post.title,
        url: post.url,
        created_at: post[`created_at`],
        tags: tags,
        count: {
          page_views_count: post.page_views_count,
          reactions_count: post.reactions_count,
          comments: post.comments_count,
          likes: post.likes_count,
          stocks: post.stocks_count,
        },
        ogData: {
          ogImageUrl,
          ogSiteName,
        },
      };
    })
  );
  return postsDetailArray;
  // for (let i = 0; i < postsDetailArray.length; i++) {
  //   const { url } = postsDetailArray[i];
  //   const res = await fetch(url).catch((err) => console.log(err));
  //   const text = await res.text();
  //   const $ = await load(text);
  //   const ogImageUrl = $("meta[property=og:image]").attr().content;
  //   const ogSiteName = $("meta[property=og:site_name]").attr().content;
  //   postsDetailArray.ogData = { ogImageUrl, ogSiteName };
  // }
}
