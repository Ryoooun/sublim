/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Divider,
  Text,
  Button,
  Box,
} from "@/app/common/chakraui/ChakraUI";
import { memo, useEffect } from "react";
import { LayoutGroup, motion } from "framer-motion";

import dayjs from "dayjs";
import useToggle from "@/app/hooks/useToggle";

const cardStyle = css({
  backgroundImage:
    "linear-gradient(140deg, rgb(35, 81, 94), rgb(190, 131, 139) 100%)",
  borderRadius: "1rem",
  display: "grid",
  placeContent: "center",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "white",
});

const cardVariants = {
  on: {
    height: "20rem",
  },
  off: {
    height: "10rem",
  },
};

export default memo(function WordStack({ words, getWords }) {
  const [toggle, flag] = useToggle(false);

  return (
    <LayoutGroup>
      {words.length > 0 ? (
        words.map((word, i) => {
          return (
            <motion.div
              css={cardStyle}
              key={word.id}
              variants={cardVariants}
              animate={flag ? "on" : "off"}
              onClick={toggle}>
              <motion.div>
                <motion.h3
                  style={{
                    fontSize: `${word.title.length < 7 ? "3" : "2"}rem`,
                  }}
                  onClick={() => console.log(`${String(word.title.length)}px`)}>
                  {word.title.length > 10
                    ? `${word.title.slice(0, 10)}...`
                    : word.title}
                </motion.h3>
              </motion.div>
            </motion.div>
            // <Card css={cardStyle} key={word.id} onClick={toggle} layout>
            //   <CardBody
            //     as={motion.div}
            //     // borderRadius="xl"
            //     bgImage="linear-gradient(140deg, rgb(35, 81, 94), rgb(190, 131, 139) 100%)">
            //     <Stack as={motion.div} layout>
            //       <Heading
            //         as={motion.h3}
            //         size="md"
            //         color="white"
            //         textOverflow="ellipsis"
            //         whiteSpace="nowrap"
            //         overflow="hidden">
            //         {word.title}
            //       </Heading>
            //     </Stack>
            //   </CardBody>
            // </Card>
          );
        })
      ) : (
        <>
          <Heading>No collections.</Heading>
          <Button onClick={getWords}>Reload</Button>
        </>
      )}
    </LayoutGroup>
  );
});
