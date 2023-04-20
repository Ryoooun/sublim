import { load } from "cheerio";
import fs from "fs";
const url = "https://qiita.com/naruto/items/fdb61bc743395f8d8faf";

const getData = async () => {
  const res = await fetch(url);
  const html = await res.text();
  const $ = await load(html);
  const result = await $("p").text();
  fs.writeFileSync("./input.txt", result, "utf-8", (err) => {
    if (err) {
      console.error(err);
    }
  });
  // console.log($("section").text());
};

getData();
