"use client";

import CProvider from "../common/cache/CProvider";
import Provider from "../common/chakraui/Provider";
import Menu from "./user/components/template/Menu";
import { useEffect } from "react";
import { useURLStore } from "../store/urlOrigin";
import { useUserAgentStore } from "../store/userAgent";

export default function UserLayout({ children }) {
  const setOriginUrl = useURLStore((state) => state.setOriginUrl);
  useEffect(() => {
    setOriginUrl(window.location.origin);
  }, []);

  return (
    <>
      <Menu />
      {children}
    </>
  );
}
