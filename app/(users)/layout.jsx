"use client";
import Menu from "./user/components/template/Menu";
import { useIsAuth } from "../store/auth";
import { notFound } from "next/navigation";

export default function UserLayout({ children }) {
  const isAuth = useIsAuth((state) => state.isAuth);
  if (isAuth) {
    return (
      <>
        <Menu />
        {children}
      </>
    );
  } else {
    notFound();
  }
}
