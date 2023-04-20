import NextLink from "next/link";
import React from "react";
import { Box, Button, Heading } from "../../common/chakraui/ChakraUI";

export default React.memo(function AboutLink(params) {
  return (
    <Box textAlign="center">
      <Heading>「学ぶこと」を学ぶ。</Heading>
      <Heading>「知ること」を知る。</Heading>
      <Button
        as={NextLink}
        href="/about"
        bg="gray.300"
        color="gray.700"
        my="10"
        px="12"
        py="6">
        SUBLIMについて
      </Button>
    </Box>
  );
});
