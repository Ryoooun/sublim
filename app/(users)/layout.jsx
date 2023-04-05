"use client";
import Menu from "./user/components/template/Menu";
// import "./userStyle.css";
import { Global, css } from "@emotion/react";

const global = css`
  html {
    margin: 0;
    padding: 0;
    background-color: #f5f6f6;
    box-sizing: border-box;
  }
`;

export default function UserLayout({ children }) {
  return (
    <>
      <Global styles={global} />
      <Menu>{children}</Menu>
    </>
  );
}
