/**@jsxImportSource @emotion/react */
import {
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  useDisclosure,
} from "@/app/common/chakraui/ChakraUI";
import useWordsDB from "@/app/hooks/useWordsDB";
import { css } from "@emotion/react";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import BookmarkAlert from "../atoms/BookmarkAlert";

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
  backgroundColor: "transparent",
  fontSize: "0.8rem",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.5rem",
  color: "#3fcb72",
  textAlign: "center",
});

const popoverStyle = {
  on: {
    position: "fixed",
    zIndex: "30",
    top: "5rem",
    height: "80vh",
    width: "82vw",
    whiteSpace: "normal",
    // height: "20vhs",
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

export default function BookmarkModal({ text, setSelectId }) {
  const value = text.slice();
  const [word, setWord] = useState(value);
  const [toggle, setToggle] = useState(false);

  const { words, updateWord } = useWordsDB();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");

  const isError =
    word.length == 0
      ? { result: true, message: "単語を入力してください。" }
      : RegExp("[!-/:-@[-`{-~｟-､ ]+", "g").test(word)
      ? {
          result: true,
          message: "半角記号および空白文字は含むことができません。",
        }
      : { result: false, message: "ok" };

  const handleCancel = (e) => {
    e.stopPropagation();
    setToggle(false);
  };

  const handleClickTitle = (e) => {
    setTitle(e.target.innerText);
    onOpen();
  };

  return (
    <>
      <Button
        css={tagStyle}
        variant="unstyled"
        onClick={(e) => {
          e.stopPropagation();
          setToggle(!toggle);
          setWord(text);
        }}>
        {text}
      </Button>
      <AnimatePresence mode="popLayout">
        {toggle ? (
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
              onClick={(e) => handleCancel(e)}
            />
            <Text
              fontSize="md"
              fontWeight="bold"
              textAlign="center"
              mt="2"
              color="blackAlpha.700">
              学習予定の単語
              <Text
                fontSize="sm"
                fontWeight="thin"
                textAlign="right"
                color={Object.keys(words).length > 9 && "red.400"}>
                {words.filter((w) => w.isBookmark === true).length}words
              </Text>
            </Text>
            <Flex direction="row" justifyContent="flex-end">
              <Text color="blue.400" textAlign="right">
                Edit
              </Text>
            </Flex>
            <Flex direction="row" justifyContent="space-around">
              <Text>TITLE</Text>
              <Text>DATE</Text>
            </Flex>
            <TableContainer overflowY="scroll" height="50vh">
              <Table variant="simple">
                <Tbody>
                  {words
                    .filter((w) => w.isBookmark)
                    .map((obj) => {
                      return (
                        <Tr key={obj.title}>
                          <Td
                            onClick={(e) => {
                              handleClickTitle(e);
                            }}>
                            {obj.title}
                          </Td>
                          <Td isNumeric>
                            <Text
                              as="time"
                              fontSize="xs"
                              color="gray.500"
                              dateTime={dayjs(obj.timestamp.toDate()).format(
                                "YYYY-MM-DDTHH:mm"
                              )}>
                              {dayjs(obj.timestamp.toDate()).format(
                                "YYYY-MM-DD"
                              )}
                            </Text>
                            <BookmarkAlert
                              updateWord={updateWord}
                              setSelectId={setSelectId}
                              text={title}
                              isOpen={isOpen}
                              onClose={onClose}
                              handleCancel={handleCancel}
                            />
                          </Td>
                        </Tr>
                      );
                    })}
                </Tbody>
              </Table>
            </TableContainer>
            <Flex direction="row" justifyContent="center" gap="2" mt="0.5rem">
              <Button colorScheme="gray" onClick={(e) => handleCancel(e)}>
                キャンセル
              </Button>
            </Flex>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
