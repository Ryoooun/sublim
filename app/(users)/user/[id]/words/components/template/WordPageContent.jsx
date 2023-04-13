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
import { motion, AnimatePresence } from "framer-motion";
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
    <Container maxW="100vw" maxH="100vh" overflow="hidden" whiteSpace="nowrap">
      <WordStackHeader isLargerThen50em={isLargerThen50em} />
      <SimpleGrid
        // minChildWidth={isLargerThen50em ? "30%" : "100%"}
        position="relative"
        top="-48"
        minChildWidth="15rem"
        spacingX="2"
        spacingY="4"
        overflow="scroll"
        whiteSpace="nowrap"
        w="100%"
        pt="22vh"
        pb="20vh"
        h="100vh"
        sx={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        css={scroll}>
        <AnimatePresence initial={false}>
          <WordStack words={words} getWords={getWords} />
        </AnimatePresence>
      </SimpleGrid>
    </Container>
  );
}
