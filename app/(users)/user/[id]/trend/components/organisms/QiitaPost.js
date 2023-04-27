import dayjs from "dayjs";
import { URL } from "url";

export default async function getData() {
  console.time("Qiita");
  const apiUrl = process.env.NEXT_PUBLIC_QIITA_API_URL;

  const limitDate = JSON.stringify(dayjs().subtract(10, "days")["$d"])
    .split("T")[0]
    .replace('"', "");
  const stocks = "20";
  const par_page = "20";
  const res = await fetch(
    `${apiUrl}?page=1&per_page=${par_page}&query=created%3A%3E${limitDate}+stocks%3A%3E${stocks}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_QIITA_API_TOKEN}`,
      },
      next: {
        revalidate: 86400,
      },
    }
  ).catch((err) => console.error(err));
  const postsArray = await res.json();

  const IS_SERVER = typeof window === "undefined";
  // async function getURL(path) {
  //   const baseURL = IS_SERVER
  //     ? "https://sublim-git-firebasetorestapi-ryoooun.vercel.app/api/parse?url="
  //     : window.location.origin;
  //   return new URL(path, baseURL).toString();
  // }

  const postsDetailArray = await Promise.all(
    postsArray.map(async (post) => {
      const tags = post.tags.map((tag) => tag?.name);
      // const url = await getURL(post.url);
      const url = `https://sublim-ryoooun.vercel.app/api/parse?url=${post.url}`;

      const parse = await fetch(url).then((res) => res.json());

      // "https://sublim-git-firebasetorestapi-ryoooun.vercel.app"
      // const url = post.url;
      // const res = await fetch(url).catch((err) => console.log(err));
      // const text = await res.text();
      // const $ = await load(text);
      // const ogImageUrl = $("meta[property=og:image]").attr().content;
      // const ogSiteName = $("meta[property=og:site_name]").attr().content;
      // const ogDescription = $("meta[property=og:description]").attr().content;

      // const siteFavicon = $("link[type=image/x-icon]").attr().href;
      return {
        id: post.id,
        title: post.title,
        url: post.url,
        created_at: post[`created_at`],
        user: {
          id: post.user.id,
          profile_image_url: post.user.profile_image_url,
        },
        tags: tags,
        count: {
          page_views_count: post.page_views_count,
          reactions_count: post.reactions_count,
          comments: post.comments_count,
          likes: post.likes_count,
          stocks: post.stocks_count,
        },
        parse: parse.json,
        // ogData: {
        //   ogImageUrl,
        //   ogDescription,
        //   ogSiteName,
        // },
        // siteFavicon,
      };
    })
  );
  console.timeEnd("Qiita");
  return postsDetailArray;
}
