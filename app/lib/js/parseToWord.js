/*
termex.js
  - termextract-kuromojijs sample script
*/
import termextract from "./termextract-kuromojijs";
// const termextract = require("../../lib/js/termextract-kuromojijs.js");
// const kuromoji = require("kuromoji");
import kuromoji from "kuromoji";
// const fs = require("fs");
// import fs from "fs";

// const { exit } = require("process");

//  const { load } = require("cheerio");
import { load } from "cheerio";

// if (process.argv[2] == undefined) {
//   console.log(
//     `Not enough command line arguments!
//   Usage:
//    node teremex.js URL`
//   );
//   process.exit();
// }
// const inputfile = __dirname + "/input.txt";
// let strings = fs.readFileSync(inputfile, "utf8");

// const outputfile = process.argv[3] || "./outputfile.txt";
// const url = process.argv[2];

const getData = async (url) => {
  const res = await fetch(url);
  const html = await res.text();
  const $ = await load(html);
  return await $("p").text();
};

export const parseWord = async (url) => {
  const strings = await getData(url);
  const result = kuromoji
    .builder({ dicPath: "/node_modules/kuromoji/dict" })
    .build((err, tokenizer) => {
      let tokenized_word = tokenizer.tokenize(strings);
      let cmp_noun_list = termextract.cmp_noun_list(tokenized_word);
      let frequency = termextract.list2key_value(cmp_noun_list);
      let score_lr = termextract.score_lr(
        frequency,
        termextract.IGNORE_WORDS,
        1,
        1
      );
      let term_importance = termextract.term_importance(frequency, score_lr);
      let score_lt_list = termextract.sort_by_importance(term_importance);
      const result = [];
      for (const data of score_lt_list) {
        word = termextract.modify_agglutinative_lang(data.cmp_noun);

        result.push({ word: data.importance });
        // fs.writeFileSync(fd, `${word}\t${data.importance}\n`);
      }
      return result;
    });
  return result;
};
