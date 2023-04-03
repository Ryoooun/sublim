import { load } from "cheerio";
import axios from "axios";

async function getData() {
  const url = "https://blog.kapiecii.com/posts/";
  console.time("c");
  const res = await fetch(url).catch((err) => console.error(err));
  const html = await res.text();
  const $ = await load(html);
  const data = [];
  $(".post-item", html).each((item, element) => {
    const title = $(element)
      .find("a")
      .text()
      .replace(/(\r\n|\n|\r|)/gm, "")
      .trim();
    data.push(title);
  });
  console.timeEnd("c");
  return data;

  // const data = await axios.get(url).then((res) => res.data);
  // const $ = await load(data);
  // const result = [];
  // $(".post-item", data).each((item, element) => {
  //   const title = $(element)
  //     .find("a")
  //     .text()
  //     .replace(/(\r\n|\n|\r|)/gm, "")
  //     .trim();
  //   result.push(title);
  // });

  // console.timeEnd("c");
  // return result;
}

export default async function page() {
  const data = await getData();
  return (
    <ul>
      {data.map((d, i) => (
        <li key={i}>{d}</li>
      ))}
    </ul>
  );
}
