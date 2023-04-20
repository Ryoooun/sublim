"use client";
import { CircularProgress } from "@/app/common/chakraui/ChakraUI";

import useWord from "@/app/hooks/useWord";
import { memo } from "react";
import Cloud from "../atoms/Cloud";

export default memo(function CloudWrapper({ url }) {
  const { post } = useWord({ url });
  if (!post) {
    return <CircularProgress size="200px" color="brand.300" isIndeterminate />;
  }

  // if (isError) {
  //   console.log(isError);
  //   return <h1>Errorが発生しました。</h1>;
  // }

  return <Cloud post={post.json} />;
});
