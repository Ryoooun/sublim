"use client";

import { useMemo } from "react";
import CloudWrapper from "./components/organisms/CloudWrapper";
import PageWrapper from "./components/template/PageWrapper";
export default function page(params) {
  const postURL = useMemo(() => {
    return "https://qiita.com/jnchito/items/459d58ba652bf4763820";
  }, []);
  return (
    <PageWrapper>
      <CloudWrapper url={postURL} />
    </PageWrapper>
  );
}
