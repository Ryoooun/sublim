"use client";
import HomeMenu from "./template/HomeMenu";
import { useEffect, useState } from "react";
import { useURLStore } from "../store/urlOrigin";

export default function HomeLayout({ children }) {
  const setOriginUrl = useURLStore((state) => state.setOriginUrl);
  const originUrl = useURLStore((state) => state.originUrl);
  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {
    useURLStore.setState({ originUrl: window.location.origin }, true);
    setCurrentPage(originUrl);
  }, []);

  const handleLinkClick = (path) => {
    setCurrentPage(path);
  };

  return (
    <>
      <HomeMenu currentPage={currentPage} handleLinkClick={handleLinkClick} />
      {children}
    </>
  );
}
