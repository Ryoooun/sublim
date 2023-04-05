"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Button, Box, Center } from "@/app/common/chakraui/ChakraUI";
import { motion, AnimatePresence, useAnimate, delay } from "framer-motion";
import { useState } from "react";
import useSWR from "swr";

const spring = {
  type: "spring",
  stiffness: "800",
  damping: 30,
};

const handle = css`
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 40px;
`;

const switch_ = css`
  width: 160px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
  &[data-ison="true"] {
    justify-content: flex-end;
  }
`;

export default function page(params) {
  const [toggle, setToggle] = useState(false);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const Result = () => {
    const { data, error, isLoading } = useSWR(
      `/api/parse?url=https://qiita.com/nohanaga/items/430b59209b02c298ef2a`,
      fetcher
    );

    if (error)
      return (
        <div>
          <h1>failed to load</h1>
        </div>
      );
    if (isLoading)
      return (
        <div>
          <h1>loading...</h1>
        </div>
      );

    return (
      <div>
        <h1>hello{data.path}</h1>
      </div>
    );
  };

  return (
    <Center>
      <Box
        w="90vw"
        h="90vh"
        bg="green.100"
        mt="10"
        display="grid"
        placeItems="center">
        <Button
          onClick={() => setToggle((prev) => !prev)}
          pos="absolute"
          top="20">
          Toggle
        </Button>
        <Result />
        <div
          css={switch_}
          data-ison={toggle}
          onClick={() => setToggle((prev) => !prev)}>
          <motion.div css={handle} layout transition={spring} />
        </div>
      </Box>
    </Center>
  );
}
