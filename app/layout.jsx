"use client";

import CProvider from "./common/cache/CProvider";
import Provider from "./common/chakraui/Provider";
import Menu from "./components/Menu";
import HomeMenu from "./components/HomeMenu";
import { useURLStore } from "./store/urlOrigin";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const originUrl = useURLStore((state) => state.originUrl);
  const setOriginUrl = useURLStore((state) => state.setOriginUrl);

  useEffect(() => {
    setOriginUrl(window.location.origin);
  }, []);

  const isAuth = false; // auth で物理的にページを切り替える。
  return (
    <html lang="ja">
      <head />
      <body>
        <CProvider>
          <Provider>
            {isAuth ? <Menu /> : <HomeMenu />}
            {children}
          </Provider>
        </CProvider>
      </body>
    </html>
  );
}
