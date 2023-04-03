"use client";

import React from "react";

import {
  Icon,
  Image,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Divider,
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Avatar,
  Text,
  VStack,
  useMediaQuery,
} from "@/app/common/chakraui/ChakraUI";
import QiitaPostList from "../organisms/QiitaPostList";

export default React.memo(function PageContentWrapper({ qiitaItems }) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");
  return (
    <Box
      overflow="hidden"
      w={isLargerThen50em ? "93vw" : "100vw"}
      bg="white"
      px={isLargerThen50em ? "4rem" : "5"}
      py={isLargerThen50em ? "0" : "10"}
      pb="0">
      <VStack gap="4">
        <Heading>Qiita Recent Trend</Heading>
        <QiitaPostList qiitaItems={qiitaItems} />
      </VStack>
    </Box>
  );
});
