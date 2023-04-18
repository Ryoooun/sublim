"use client";

import React from "react";

import { Box, useMediaQuery } from "@/app/common/chakraui/ChakraUI";

export default React.memo(function PageWrapper({ children }) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");
  return (
    <Box
      overflow="hidden"
      w={isLargerThen50em ? "100vw" : "100vw"}
      h="full"
      bg="white"
      px={isLargerThen50em ? "4rem" : "5"}
      pt={isLargerThen50em ? "0" : "0"}>
      {children}
    </Box>
  );
});
