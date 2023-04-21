"use client";

import { memo } from "react";

import { Box, useMediaQuery } from "@/app/common/chakraui/ChakraUI";

export default memo(function PageWrapper({ children }) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");
  return (
    <Box
      overflow="hidden"
      w={isLargerThen50em ? "90vw" : "100vw"}
      h="full"
      bg="white"
      px={isLargerThen50em ? "4rem" : "5"}
      pt={isLargerThen50em ? "0" : "0"}>
      {children}
    </Box>
  );
});
