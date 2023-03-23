"use client";

import CProvider from "../common/cache/CProvider";
import Provider from "../common/chakraui/Provider";
import HomeMenu from "./template/HomeMenu";
import { useEffect, useState } from "react";
import { useURLStore } from "../store/urlOrigin";

export default function RootLayout({ children }) {
  const setOriginUrl = useURLStore((state) => state.setOriginUrl);
  const originUrl = useURLStore((state) => state.originUrl);
  const [currentPage, setCurrentPage] = useState();
  useEffect(() => {
    setOriginUrl(window.location.origin);
    setCurrentPage(originUrl);
  }, []);

  const handleLinkClick = (path) => {
    setCurrentPage(path);
  };

  const isAuth = false; // auth で物理的にページを切り替える。
  return (
    <html lang="ja">
      <head />
      <body>
        <CProvider>
          <Provider>
            {isAuth ? (
              <h2>ユーザーダッシュボードページにリダイレクトする</h2>
            ) : (
              <HomeMenu
                currentPage={currentPage}
                handleLinkClick={handleLinkClick}
              />
            )}
            {children}
          </Provider>
        </CProvider>
      </body>
    </html>
  );
}
