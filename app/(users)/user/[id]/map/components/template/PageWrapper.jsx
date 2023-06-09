"use client";

import { memo } from "react";

import { Box, useMediaQuery } from "@/app/common/chakraui/ChakraUI";
export default memo(function PageWrapper({ children }) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");
  return (
    <Box
      overflow="hidden"
      w={isLargerThen50em ? "93vw" : "100vw"}
      bg="white"
      // px={isLargerThen50em ? "4rem" : "5"}
      py={isLargerThen50em ? "0" : "10"}
      pb="0">
      {children}
    </Box>
  );
});
