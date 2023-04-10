import { CircularProgress } from "@/app/common/chakraui/ChakraUI";

import Cloud from "../atoms/Cloud";
import { memo } from "react";
import useWord from "@/app/hooks/useWord";

export default memo(function CloudWrapper({ url }) {
  const { post, isError, isLoading } = useWord(url);

  if (isLoading) {
    return <CircularProgress size="200px" color="brand.300" isIndeterminate />;
  }

  if (isError) {
    console.log(isError);
    return <h1>Errorが発生しました。</h1>;
  }
  return <Cloud post={post.json} />;
});
