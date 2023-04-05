"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Button, Box, Center } from "@/app/common/chakraui/ChakraUI";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { useState } from "react";

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
