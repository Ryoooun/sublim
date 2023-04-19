/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Flex,
  Text,
  Button,
  Input,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  useToast,
} from "@/app/common/chakraui/ChakraUI";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useBookmarkDB from "@/app/hooks/useBookmarkDB";

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
  // maxWidth: "90%",
  padding: "0.125rem 0.5rem",
  borderRadius: "0.5rem",
  color: "#fff",
  fontWeight: "normal",
  textAlign: "center",
  fontSize: "1rem",
});

const popoverStyle = {
  on: {
    position: "fixed",
    zIndex: "30",
    top: "40vh",
    left: "10vw",
    width: "80vw",
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

export default function WordBookmarkPopOver({ text }) {
  const value = text.slice();
  const [word, setWord] = useState(value);
  const [toggle, setToggle] = useState(false);
  const [registered, setRegistered] = useState([]);
  const { getBookmark, setBookmark, checkIsRegistered } = useBookmarkDB();
  const toast = useToast();
  const handleInputChange = (e) => {
    setWord(e.target.value);
    const result = checkIsRegistered(e.target.value);
    if (result.length > 0) {
      setRegistered(result);
    } else {
      setRegistered([]);
    }
  };

  useEffect(() => {
    const result = checkIsRegistered(value);
    if (result.length > 0) {
      setRegistered(result);
    } else {
      setRegistered([]);
    }
  }, [value]);

  const isError =
    word.length == 0
      ? { result: true, message: "単語を入力してください。" }
      : RegExp("[!-/:-@[-`{-~｟-､ ]+", "g").test(word)
      ? {
          result: true,
          message: "半角記号および空白文字は含むことができません。",
        }
      : { result: false, message: "ok" };

  const handleSave = async () => {
    if (!isError?.result) {
      const res = await setBookmark(word);

      if (res.code === 1) {
        console.log("finish:", res.message);
        getBookmark();
        toast({
          title: `${value}を登録`,
          status: "success",
          isClosable: true,
        });
      } else if (res.code === -1) {
        console.log("error", "=>", res.message);
        toast({
          title: `${value}登録エラー`,
          status: "error",
          isClosable: false,
        });
      } else if (res.code === 0) {
        toast({
          title: `${value}は既に登録されています。`,
          status: "info",
          isClosable: true,
        });
      }

      setWord("");
      setToggle(false);
    }
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    setRegistered([]);
    setToggle(false);
  };

  return (
    <>
      <Button
        css={tagStyle}
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
            onClick={(e) => handleCancel(e)}
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
                onClick={(e) => handleCancel(e)}
              />
              <Text
                fontSize="md"
                fontWeight="bold"
                textAlign="center"
                mt="2"
                color="blackAlpha.700">
                学習予定に追加
              </Text>
              {/* <Input
                value={word}
                onChange={(e) => setWord(e.target.value)}
                mt="1rem"
              /> */}
              <FormControl isInvalid={isError.result}>
                <Input
                  placeholder="単語"
                  value={word}
                  onChange={handleInputChange}
                />
                {!isError?.result ? (
                  <FormHelperText>
                    単語をブックマークに追加し、後から学習することができます。
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>{isError.message}</FormErrorMessage>
                )}
              </FormControl>
              {registered.length > 0
                ? registered.map((r) => {
                    return (
                      <Text as="p" fontSize="xs">
                        <Text as="span" color="blue.400" fontSize="lg" mr="2">
                          {r}
                        </Text>
                        が既に登録されています。
                      </Text>
                    );
                  })
                : null}
              <Flex direction="row" justifyContent="center" gap="2" mt="0.5rem">
                <Button
                  colorScheme="whatsapp"
                  isLoading={isError?.result}
                  loadingText="Checking"
                  isDisabled={isError?.result || registered.length > 0}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSave();
                  }}>
                  追加
                </Button>
                <Button colorScheme="gray" onClick={(e) => handleCancel(e)}>
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
