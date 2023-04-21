"use client";
/** @jsxImportSource @emotion/react */
import {
  Container,
  SimpleGrid,
  useMediaQuery,
} from "@/app/common/chakraui/ChakraUI";
import { css } from "@emotion/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
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
  const [search, setSearch] = useState("");
  const [selectId, setSelectId] = useState(null);

  const { getWords, words } = useWordsDB();

  const handleClick = async () => {
    await getWords();
  };

  return (
    <Container
      maxW={isLargerThen50em ? "80vw" : "100vw"}
      maxH="100vh"
      overflow="hidden"
      whiteSpace="nowrap">
      <WordStackHeader
        isLargerThen50em={isLargerThen50em}
        search={search}
        setSearch={setSearch}
        setSelectId={setSelectId}
      />
      <SimpleGrid
        minChildWidth={isLargerThen50em ? "30%" : "100%"}
        position="relative"
        top="-48"
        gap="2"
        overflow="scroll"
        whiteSpace={isLargerThen50em ? "normal" : "nowrap"}
        w="100%"
        pt="25vh"
        pb="25vh"
        h="100vh"
        sx={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        css={scroll}>
        <AnimatePresence initial={false}>
          <WordStack
            words={words}
            getWords={getWords}
            search={search}
            selectId={selectId}
            setSelectId={setSelectId}
          />
        </AnimatePresence>
      </SimpleGrid>
    </Container>
  );
}
