"use client";

import React, { Suspense, useCallback, useMemo } from "react";

import {
  Heading,
  Box,
  VStack,
  useMediaQuery,
} from "@/app/common/chakraui/ChakraUI";
import QiitaPostList from "../organisms/QiitaPostList";
import ZennPostList from "../organisms/ZennPostList";
import DevPostList from "../organisms/DevPostList";

export default React.memo(function PageContentWrapper({
  qiitaItems,
  zennItems,
  devToItems,
}) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50rem)");
  return (
    <Box
      overflow="hidden"
      w={isLargerThen50em ? "93vw" : "100vw"}
      bg="white"
      // px={isLargerThen50em ? "4rem" : "5"}
      py={isLargerThen50em ? "0" : "10"}
      pb="0">
      <VStack gap="4">
        <Heading>Qiita Recent Trend</Heading>
        <QiitaPostList
          qiitaItems={qiitaItems}
          isLargerThen50em={isLargerThen50em}
        />
        <Heading>Zenn Recent Trend</Heading>
        <ZennPostList
          zennItems={zennItems}
          isLargerThen50em={isLargerThen50em}
        />
        <Heading>Dev Recent Trend</Heading>
        <DevPostList
          devToItems={devToItems}
          isLargerThen50em={isLargerThen50em}
        />
      </VStack>
    </Box>
  );
});
