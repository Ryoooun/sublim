"use client";
import Menu from "./user/components/template/Menu";
import "./userStyle.css";

export default function UserLayout({ children }) {
  return (
    <>
      <Menu>{children}</Menu>
    </>
  );
}
