"use client";

import {
  Box,
  Heading,
  useMediaQuery,
  VStack,
} from "@/app/common/chakraui/ChakraUI";
import React, { lazy, Suspense } from "react";
// import QiitaPostList from "../organisms/QiitaPostList";
// import ZennPostList from "../organisms/ZennPostList";
// import DevPostList from "../organisms/DevPostList";
import PostSkelton from "../molecules/PostSkelton";

export default React.memo(function PageContentWrapper({
  qiitaItems,
  zennItems,
  // devToItems,
}) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50rem)");
  const QiitaPostList = lazy(() => import("../organisms/QiitaPostList"));
  const ZennPostList = lazy(() => import("../organisms/ZennPostList"));
  return (
    <>
      <Box
        overflow="hidden"
        w={isLargerThen50em ? "93vw" : "100vw"}
        bg="white"
        pt="8"
        // px={isLargerThen50em ? "4rem" : "5"}
      >
        <VStack pb="3rem">
          <Heading fontSize="3xl" mt="2">
            Trend
          </Heading>
          <Suspense fallback={<PostSkelton />}>
            <QiitaPostList
              qiitaItems={qiitaItems}
              isLargerThen50em={isLargerThen50em}
            />
          </Suspense>
          {/* <Heading fontSize="3xl">Zenn</Heading> */}
          <Suspense fallback={<PostSkelton />}>
            <ZennPostList
              zennItems={zennItems}
              isLargerThen50em={isLargerThen50em}
            />
          </Suspense>

          {/* <Heading fontSize="3xl">DEV Community</Heading>
          <DevPostList
            devToItems={devToItems}
            isLargerThen50em={isLargerThen50em}
          /> */}
        </VStack>
      </Box>
    </>
  );
});
