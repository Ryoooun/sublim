"use client";
import Menu from "./user/components/template/Menu";
// import "./userStyle.css";
import { Global, css } from "@emotion/react";
import { LayoutGroup } from "framer-motion";
import React from "react";
const global = css`
  html {
    margin: 0;
    padding: 0;
    background-color: #f5f6f6;
    box-sizing: border-box;
  }
`;

function UserLayout({ children }) {
  return (
    <>
      <Global styles={global} />
      <Menu>
        <LayoutGroup>{children}</LayoutGroup>
      </Menu>
    </>
  );
}

export default React.memo(UserLayout);
