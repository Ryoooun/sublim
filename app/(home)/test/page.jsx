import { load } from "cheerio";
import axios from "axios";
import { parse } from "node-html-parser";

async function getData() {
  console.time("pase");
  const url = "https://blog.kapiecii.com/posts/";
  const res1 = await axios.get(url);
  const data1 = await res1.data;
  const result = await parse(data1);
  console.timeEnd("pase");

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
}

export default async function page() {
  const data = await getData();
  // console.log(data);
  return (
    <div>
      hello
      {/* {data.map((d, i) => (
        <li key={i}>{d}</li>
      ))} */}
    </div>
  );
}
