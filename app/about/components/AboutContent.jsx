"use client";
import SideMenu from "./SideMenu";
import {
  Heading,
  VStack,
  Box,
  Link,
  Button,
  Flex,
  Text,
} from "../../common/chakraui/ChakraUI";
import { useRef } from "react";

export default function AboutContent(props, ref) {
  const top = useRef(null);
  const h2 = useRef(null);
  const h3 = useRef(null);

  return (
    <Flex mt="5vh" gap="3">
      <SideMenu refs={{ top, h2, h3 }} />
      <Box w="75vw">
        <Box
          mb="10"
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
            <Heading>SUBLIMについて</Heading>
          </Box>
          <Box
            ref={h2}
            h="95vh"
            w="full"
            scrollSnapAlign="center"
            scrollSnapStop="always">
            <Heading>学習を学習する</Heading>
          </Box>
          <Box
            ref={h3}
            h="95vh"
            w="full"
            scrollSnapAlign="center"
            scrollSnapStop="always">
            <Heading>SUBLIMの卒業</Heading>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
