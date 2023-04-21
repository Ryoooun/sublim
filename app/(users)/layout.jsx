"use client";
import { css, Global } from "@emotion/react";
import React from "react";
import useWordsDB from "../hooks/useWordsDB";
import Menu from "./user/components/template/Menu";

import useIndexedDB from "../hooks/useIndexedDB";

const global = css`
  html {
    margin: 0;
    padding: 0;
    background-color: #f5f6f6;
    box-sizing: border-box;
  }
`;

function UserLayout({ children }) {
  const { getWords, words } = useWordsDB();
  const { checkIndexedDB, testIndexedDB } = useIndexedDB();
  // useEffect(() => {
  //   // checkIndexedDB();
  //   // testIndexedDB();
  //   // console.log("hello");
  //   // if (bookmarks.length === 0) {

  //   // }
  //   // if (words.length === 0) {
  //   //   getWords();
  //   // }
  // }, []);

  return (
    <>
      <Global styles={global} />
      <Menu>{children}</Menu>
    </>
  );
}

export default React.memo(UserLayout);
