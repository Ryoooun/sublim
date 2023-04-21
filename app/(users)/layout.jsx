"use client";
import { css, Global } from "@emotion/react";
import React, { useEffect } from "react";
import useWordsDB from "../hooks/useWordsDB";
import Menu from "./user/components/template/Menu";

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

  useEffect(() => {
    if (Object.keys(words).length === 0) {
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
