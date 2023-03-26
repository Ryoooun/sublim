"use client";
import HomeMenu from "./template/HomeMenu";
import { useEffect, useState } from "react";
import { useURLStore } from "../store/urlOrigin";

export default function HomeLayout({ children }) {
  const setOriginUrl = useURLStore((state) => state.setOriginUrl);
  const originUrl = useURLStore((state) => state.originUrl);
  const [currentPage, setCurrentPage] = useState("/");
  useEffect(() => {
    setOriginUrl(window.location.origin);
    setCurrentPage(originUrl);
  }, []);

  const handleLinkClick = (path) => {
    setCurrentPage(path);
  };

  const isAuth = false; // auth で物理的にページを切り替える。
  return (
    <>
      {isAuth ? (
        <h2>ユーザーダッシュボードページにリダイレクトする</h2>
      ) : (
        <HomeMenu currentPage={currentPage} handleLinkClick={handleLinkClick} />
      )}
      {children}
    </>
  );
}
