"use client";

import { Box, useMediaQuery } from "../../../common/chakraui/ChakraUI";
import DashboardDammy from "../components/molecules/DashboardDammy";

import { useUserHook } from "@/app/hooks/useUser";
import { useCallback } from "react";

export default function page(params) {
  const user = useUserHook();
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");
  // const { getWords } = useWordsDB();
  // const { getBookmark } = useBookmarkDB();
  // getBookmark();
  // getWords();
  const LoginUser = useCallback(() => {
    if (user) {
      return (
        <>
          <p>{`${user.userName}`}'s Dashboard</p>
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
      <DashboardDammy />
    </Box>
  );
}
