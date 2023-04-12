"use client";
/** @jsxImportSource @emotion/react */
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Container,
  Tag,
  Flex,
  Card,
  CardBody,
  Stack,
  Text,
  Divider,
  CardFooter,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  IconButton,
  useMediaQuery,
} from "@/app/common/chakraui/ChakraUI";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import CloudWrapper from "../../../map/components/organisms/CloudWrapper";
import { useMemo } from "react";
import WordStack from "../organisms/WordStack";
import WordStackHeader from "../organisms/WordStackHeader";

import useWordsDB from "@/app/hooks/useWordsDB";

const scroll = css`
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function WordPageContent({ children }) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");

  const { getWords, words } = useWordsDB();
  const handleClick = async () => {
    await getWords();
  };

  return (
    <Container maxW="100vw" maxH="90vh" overflow="hidden">
      <WordStackHeader isLargerThen50em={isLargerThen50em} />
      <SimpleGrid
        // minChildWidth={isLargerThen50em ? "30%" : "100%"}
        columns={isLargerThen50em ? 3 : 1}
        spacingX="2"
        spacingY="4"
        overflow="scroll"
        // pb="30vh"
        // h="100vh"
        sx={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        css={scroll}>
        <WordStack words={words} getWords={getWords} />
      </SimpleGrid>
    </Container>
  );
}
