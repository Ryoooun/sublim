"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Box, Button, Center, Input } from "@/app/common/chakraui/ChakraUI";
import { useState } from "react";

import FetchAndRender from "./components/FetchAndRender";

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
  const [fetch, setFetch] = useState(false);
  const [postUrl, setPostUrl] = useState("");
  const [value, setValue] = useState("");

  const handleURL = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setPostUrl(value);
    setValue("");
    setFetch(true);
  };

  return (
    <Center>
      <Box w="90vw" h="90vh" mt="10">
        <Button onClick={handleClick} disabled={fetch}>
          Fetch
        </Button>
        <Input
          value={value}
          onChange={handleURL}
          placeholder="URL"
          size="lg"
          border="1px black solid"
        />
        {fetch && <FetchAndRender postUrl={postUrl} setPostUrl={setPostUrl} />}
        {/* <div
          css={switch_}
          data-ison={toggle}
          onClick={() => setToggle((prev) => !prev)}>
          <motion.div css={handle} layout transition={spring} />
        </div> */}
      </Box>
    </Center>
  );
}
