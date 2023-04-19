"use client";
import Menu from "./user/components/template/Menu";
import { Global, css } from "@emotion/react";
import React, { useEffect } from "react";
import useWordsDB from "../hooks/useWordsDB";
import useBookmarkDB from "../hooks/useBookmarkDB";

const global = css`
  html {
    margin: 0;
    padding: 0;
    background-color: #f5f6f6;
    box-sizing: border-box;
  }
`;

function UserLayout({ children }) {
  const { getBookmark, bookmarks } = useBookmarkDB();
  const { getWords, words } = useWordsDB();

  useEffect(() => {
    if (bookmarks.length === 0) {
      getBookmark();
    }
    if (words.length === 0) {
      getWords();
    }
  }, []);

  return (
    <>
      <Global styles={global} />
      <Menu>{children}</Menu>
    </>
  );
}

export default React.memo(UserLayout);
