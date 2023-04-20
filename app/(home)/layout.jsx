"use client";

import { useEffect, useState } from "react";
import { useURLStore } from "../store/urlOrigin";
import HomeMenu from "./template/HomeMenu";

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
