"use client";
import React, { useRef } from "react";
import { Box, Flex, Heading } from "../../../common/chakraui/ChakraUI";
import SideMenu from "./SideMenu";

export default React.memo(function AboutContent(props, ref) {
  const top = useRef(null);
  const h2 = useRef(null);
  const h3 = useRef(null);

  return (
    <Flex mt="12" gap="3">
      <SideMenu refs={{ top, h2, h3 }} />
      <Box w="75vw">
        <Box
          mb="12"
          w="75vw"
          h="95vh"
          overflowY="scroll"
          sx={{ scrollSnapType: "y mandatory" }}>
          <Box
            ref={top}
            h="95vh"
            w="full"
            scrollSnapAlign="center"
            scrollSnapStop="always">
            <Heading p="2">SUBLIMについて</Heading>
          </Box>
          <Box
            ref={h2}
            h="95vh"
            w="full"
            scrollSnapAlign="center"
            scrollSnapStop="always">
            <Heading p="2">学習を学習する</Heading>
          </Box>
          <Box
            ref={h3}
            h="95vh"
            w="full"
            scrollSnapAlign="center"
            scrollSnapStop="always">
            <Heading p="2">SUBLIMの卒業</Heading>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
});
