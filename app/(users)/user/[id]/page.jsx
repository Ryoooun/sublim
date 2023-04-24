"use client";

import { Box, Heading, useMediaQuery } from "../../../common/chakraui/ChakraUI";
import DashboardDammy from "../components/molecules/DashboardDammy";
import CountWordBox from "../components/molecules/CountWordBox";
import CountWordChartBox from "../components/molecules/CountWordChartBox";
import { useUserHook } from "@/app/hooks/useUser";
import { useCallback, useEffect } from "react";
import useWordsDB from "@/app/hooks/useWordsDB";

export default function page(params) {
  const user = useUserHook();
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");
  const { words, getWords } = useWordsDB();

  useEffect(() => {
    if (Object.keys(words).length === 0) {
      getWords();
    }
  }, []);

  // getWords();
  const LoginUser = useCallback(() => {
    if (user) {
      return (
        <>
          <Heading>Dashboard</Heading>
        </>
      );
    } else {
      return <p>こんにちは!ゲストさん</p>;
    }
  }, []);

  return (
    <Box
      w={isLargerThen50em ? "93vw" : "100vw"}
      bg="white"
      px={isLargerThen50em ? "4rem" : "5"}
      py={isLargerThen50em ? "0" : "10"}>
      <LoginUser />
      <CountWordBox words={words} />
      <CountWordChartBox />
    </Box>
  );
}
