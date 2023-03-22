"use client";

import CProvider from "./common/cache/CProvider";
import Provider from "./common/chakraui/Provider";
import Menu from "./components/Menu";
import HomeMenu from "./components/HomeMenu";
import { useURLStore } from "./store/urlOrigin";

import { useEffect } from "react";
import { useUserAgentStore } from "./store/userAgent";

export default function RootLayout({ children }) {
  const setOriginUrl = useURLStore((state) => state.setOriginUrl);
  const checkIsPcType = useUserAgentStore((state) => state.checkIsPcType);
  useEffect(() => {
    const mobileTypeList = ["iPhone", "iPod", "iPad", "Android"];
    const machineType = navigator.userAgent;
    const mobileTypeCheck = mobileTypeList.filter((item) => {
      return machineType.search(item) != -1;
    });

    if (mobileTypeCheck.length > 0) {
      checkIsPcType(false);
    } else {
      checkIsPcType(true);
    }
  }, []);

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
