/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Flex,
  Text,
  Button,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@/app/common/chakraui/ChakraUI";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const closeButtonStyle = css({
  display: "block",
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
  width: "1rem ",
  height: "1rem",
  border: "2px solid #333d",
  borderRadius: "50%",
  transition: "all 1s",
  "&::before,&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "0.8rem",
    height: "2px",
    backgroundColor: "#333d",
  },
  "::before": {
    transform: "translate(-50%, -50%) rotate(45deg)",
  },
  "::after": {
    transform: "translate(-50%, -50%) rotate(-45deg)",
  },
  ":hover": {
    transform: "rotate(360deg)",
  },
});

const tagStyle = css({
  backgroundColor: "#3fcb72",
  maxWidth: "90%",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.5rem",
  color: "#fff",
  textAlign: "center",
});

const popoverStyle = {
  on: {
    position: "fixed",
    zIndex: "30",
    top: "40vh",
    left: "10vw",
    width: "80vw",
    height: "20vh",
    padding: "1rem",
    backgroundColor: "#ffffffff",
    WebkitBackdropFilter: "blur(10px)",
    backdropFilter: "blur(10px)",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
  off: {
    width: "1vw",
    height: "1rem",
  },
};

const overlay = {
  on: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    zIndex: "10",
    backgroundColor: "#8888889f",
    WebkitBackdropFilter: "blur(10px)",
    backdropFilter: "blur(10px)",
  },
};

export default function WordBookmarkPopOver({ text }) {
  const [word, setWord] = useState(text);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Button
        css={tagStyle}
        onClick={(e) => {
          e.stopPropagation();
          setToggle(!toggle);
        }}>
        {word}
      </Button>
      <AnimatePresence mode="popLayout">
        {toggle ? (
          <motion.div
            layout="size"
            onClick={(e) => {
              e.stopPropagation();
              setToggle(false);
            }}
            style={{ width: "100vw", height: "100vh" }}
            variants={overlay}
            animate={toggle && "on"}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}>
            <motion.div
              layout="size"
              layoutScroll
              onClick={(e) => e.stopPropagation()}
              css={popoverStyle}
              style={{ borderRadius: "1rem" }}
              variants={popoverStyle}
              initial={false}
              animate={toggle && "on"}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}>
              <motion.button
                css={closeButtonStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  setToggle(false);
                }}
              />
              <Text
                fontSize="md"
                fontWeight="bold"
                textAlign="center"
                mt="2"
                color="blackAlpha.700">
                学習予定に追加
              </Text>
              <Input
                value={word}
                onChange={(e) => setWord(e.target.value)}
                mt="1rem"
              />
              <Flex direction="row" justifyContent="center" gap="2" mt="0.5rem">
                <Button
                  colorScheme="whatsapp"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(word);
                    setToggle(false);
                  }}>
                  追加
                </Button>
                <Button
                  colorScheme="gray"
                  onClick={(e) => {
                    e.stopPropagation();
                    setToggle(false);
                  }}>
                  キャンセル
                </Button>
              </Flex>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
