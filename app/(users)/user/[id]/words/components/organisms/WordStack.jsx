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
import { memo, useEffect, useState, useCallback } from "react";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";

import dayjs from "dayjs";
import useToggle from "@/app/hooks/useToggle";

const cardStyle = css({
  fontWeight: "bold",
  color: "white",
  display: "grid",
  placeContent: "center",
  height: "10rem",
});

const cardVariants = {
  on: {
    height: "95vh",
    position: "fixed",
    width: "full",
    top: "2.5vh",
    zIndex: "20",
    backgroundImage: "none",
    backgroundColor: "#ffffff0f",
    backdropFilter: "blur(15px)",
  },
  off: {
    backgroundImage:
      "linear-gradient(140deg, rgb(35, 81, 94), rgb(190, 131, 139) 100%)",
  },
};

export default memo(function WordStack({ words, getWords }) {
  const [toggle, flag] = useToggle(false);
  const [selectId, setSelectId] = useState(null);

  const handleSelectCard = (id) => {
    if (id == selectId) {
      setSelectId(null);
    } else {
      setSelectId(id);
    }
  };

  return (
    <LayoutGroup>
      <AnimatePresence>
        {words.length > 0 ? (
          words.map((word, i) => {
            return (
              <motion.div
                layout="size"
                layoutScroll
                style={{ borderRadius: "1rem" }}
                css={cardStyle}
                key={word.id}
                variants={cardVariants}
                animate={selectId == word.id ? "on" : "off"}
                onClick={() => handleSelectCard(word.id)}>
                <motion.div>
                  <motion.h3
                    layout
                    style={{
                      fontSize: `${word.title.length < 7 ? "3" : "2"}rem`,
                    }}>
                    {word.title.length > 10
                      ? `${word.title.slice(0, 10)}...`
                      : word.title}
                  </motion.h3>
                </motion.div>
              </motion.div>
            );
          })
        ) : (
          <>
            <Heading>No collections.</Heading>
            <Button onClick={getWords}>Reload</Button>
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
});
