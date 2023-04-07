"use client";

import { Noto_Sans_JP } from "next/font/google";

import HomeMenu from "./template/HomeMenu";
import { useEffect, useState } from "react";
import { useURLStore } from "../store/urlOrigin";
import { Fragment } from "react";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

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
    <Fragment className={noto.className}>
      <HomeMenu currentPage={currentPage} handleLinkClick={handleLinkClick} />
      {children}
    </Fragment>
  );
}
