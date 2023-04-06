import { NextResponse } from "next/server";
import { load } from "cheerio";
import kuromoji from "kuromoji";
import termextract from "@/app/lib/js/termextract-kuromojijs";
import { cwd, env } from "node:process";
import module from "node:module";
import path from "node:path";
import * as fs from "fs";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  const getData = async (url) => {
    const res = await fetch(url);
    const html = await res.text();
    const $ = await load(html);
    return await $("p").text();
  };

  const strings = await getData(url);
  const kuro = () => {
    return new Promise((resolve, reject) => {
      kuromoji
        .builder({
          dicPath: path.join(process.cwd(), "/app/lib/dict"),
        })
        .build((err, tokenizer) => {
          if (err) {
            reject(err);
          }
          resolve(tokenizer);
        });
    });
  };

  const json = await kuro().then((tokenizer) => {
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
    const array = [];
    for (const data of score_lt_list) {
      const word = termextract.modify_agglutinative_lang(data.cmp_noun);
      array.push({ [word]: data.importance });
    }
    return array;
  });

  const require = module.createRequire(import.meta.url);
  // const e = path.resolve(require.resolve("kuromoji"), "../../dict");
  const d = __dirname;
  const f = __filename;
  const a = process.env.PWD;
  const cwd = process.cwd();
  // const eFiles = fs.readdirSync(e);

  const Cwdfiles = fs.readdirSync(cwd);
  const joinPath = path.join(process.cwd(), "/app/lib/dict");
  const joinPathFiles = fs.readdirSync(joinPath);
  return NextResponse.json({
    dirName: d,
    fileName: f,
    envPath: a,
    cwd,
    // e,
    // eFiles,
    Cwdfiles,
    joinPath,
    joinPathFiles,
    json,
  });
  // const path = process.cwd();
  // return NextResponse.json({ data: path });
}
