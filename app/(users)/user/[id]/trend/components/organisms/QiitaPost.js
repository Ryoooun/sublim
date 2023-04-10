import dayjs from "dayjs";
import { load } from "cheerio";

export default async function getData() {
  console.time("Qiita");
  const apiUrl = process.env.NEXT_PUBLIC_QIITA_API_URL;

  const limitDate = JSON.stringify(dayjs().subtract(1, "week")["$d"])
    .split("T")[0]
    .replace('"', "");
  const stocks = "30";
  const par_page = "30";
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
  const postsDetailArray = await Promise.all(
    postsArray.map(async (post) => {
      const tags = post.tags.map((tag) => tag?.name);
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
