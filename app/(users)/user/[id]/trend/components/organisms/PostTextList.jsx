"use client";
import useWord from "@/app/hooks/useWord";
/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import WordBookmarkPopOver from "../molecules/WordBookmarkPopOver";
import { Box, Flex, CircularProgress } from "@/app/common/chakraui/ChakraUI";

const scroll = css({
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export default function PostTextList({ url, isLargerThen50em, pId, sId }) {
  const { data, isLoading } = useWord(url);
  if (isLoading) {
    return (
      <Box display="grid" placeContent="center" w="100%" pb="5rem">
        <CircularProgress isIndeterminate color="brand.300" />
      </Box>
    );
  }
  return (
    <Flex
      css={scroll}
      flexWrap="wrap"
      justifyItems="center"
      mt="2"
      gap="2"
      height={pId === sId && isLargerThen50em ? "24vh" : "9rem"}
      overflow="scroll">
      {data.json.map((obj, i) => {
        return <WordBookmarkPopOver text={obj.text} key={i} />;
      })}
    </Flex>
  );
}
