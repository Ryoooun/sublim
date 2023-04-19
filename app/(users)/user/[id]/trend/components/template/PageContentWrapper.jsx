"use client";

import React, { Suspense, useCallback, useMemo } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
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
  // devToItems,
}) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50rem)");
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
          <LayoutGroup id="card">
            <Heading fontSize="3xl" mt="2">
              Qiita
            </Heading>
            <QiitaPostList
              qiitaItems={qiitaItems}
              isLargerThen50em={isLargerThen50em}
            />
            <Heading fontSize="3xl">Zenn</Heading>
            <ZennPostList
              zennItems={zennItems}
              isLargerThen50em={isLargerThen50em}
            />
          </LayoutGroup>
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
