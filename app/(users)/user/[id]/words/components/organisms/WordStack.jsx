/** @jsxImportSource @emotion/react */
import {
  Button,
  IconButton,
  Flex,
  Text,
  useMediaQuery,
} from "@/app/common/chakraui/ChakraUI";
import { DeleteIcon } from "@chakra-ui/icons";
import { css } from "@emotion/react";

import EditableText from "./EditableText";

import useWordsDB from "@/app/hooks/useWordsDB";
import dayjs from "dayjs";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { memo, useCallback, useState } from "react";
import MarkdownForm from "./MarkdownForm";

const test = `#### 斜体

 *強調* もしくは _強調_

 #### 太字

 **強い強調** もしくは __強い強調__

 #### コード

 インラインコードは「\`some code\`」のようにバッククオート（U+0060）で囲む

     1行目
     2行目
     3行目

 #### リスト

 * 順序無しリストのアイテム
    * サブアイテムは4つのスペースでインデントする
 * 順序無しリストの別のアイテム

 1. 順序付きリストのアイテム
 2. 順序付きリストの別のアイテム

 #### 見出し

 # レベル1の見出し

 ## レベル2の見出し

 ### レベル3の見出し

 #### レベル4の見出し

 レベル1の見出し
 ===============

 レベル2の見出し
 ---------------

 #### 引用

 > "このテキストは、HTMLのblockquote要素に囲まれます。
 blockquote要素はreflowableです。テキストを好きなように
 改行することができます。改行したとしても、変換後はひとつの
 blockquote要素として扱われます。"

 #### リンク

 [Opentone](http://www.opentone.co.jp/ "Opentone")

 #### 水平線

 ---

|a|b|c|d|
|-|-|-|-|
|content A| content B|content C|content D|
|content A| content B|content C|content D|
|content A| content B|content C|content D|

`;

const closeButtonStyle = css({
  display: "block",
  position: "relative",
  top: "-4rem",
  right: "-80vw",
  width: "1.5rem ",
  height: "1.5rem",
  border: "2px solid #333d",
  borderRadius: "50%",
  transition: "all 1s",
  "&::before,&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "1rem",
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

const closeButtonStylePC = css({
  display: "block",
  position: "absolute",
  top: "3vh",
  right: "4vw",
  width: "1.5rem ",
  height: "1.5rem",
  border: "2px solid #333d",
  borderRadius: "50%",
  transition: "all 1s",
  "&::before,&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "1rem",
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

const cardStyle = css({
  fontWeight: "bold",
  color: "black",
  height: "4rem",
  boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.06) inset",
  display: "grid",
  // overflow: "clip",
  whiteSpace: "normal",
});

const markDownStyle = css({
  // whiteSpace: "break-spaces",
  width: "max(75vw, 300px)",
  height: "60vh",
  overflowY: "scroll",
  // paddingRight: "2rem",
});

const cardVariants = {
  on: {
    display: "block",
    height: "100vh",
    position: "fixed",
    // width: "100vw",
    borderRadius: "0",
    left: "0",
    top: "0",
    zIndex: "20",
    whiteSpace: "wrap",
    backgroundImage: "none",
    backgroundColor: "#ffffff",
    // backgroundColor: "#f00",
    WebkitBackdropFilter: "blur(10px)",
    backdropFilter: "blur(10px)",
    padding: "1.5rem",
    lineHeight: "inherit",
    textAlign: "left",
  },
  onPc: {
    display: "block",
    width: "95vw",
    height: "100vh",
    position: "fixed",
    top: "0rem",
    left: "5rem",
    zIndex: "20",
    backgroundImage: "none",
    backgroundColor: "#ffffffea",
    WebkitBackdropFilter: "blur(20px)",
    backdropFilter: "blur(20px)",
    padding: "2rem",
    lineHeight: "inherit",
    textAlign: "left",
  },
  off: {
    placeContent: "center",
    fontWeight: "bold",
    color: "black",
    height: "8vh",
    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.06) inset",
    display: "block",
    textAlign: "center",
    lineHeight: "8vh",
    // overflow: "clip",
    whiteSpace: "normal",
    //   backgroundImage:
    //     "linear-gradient(140deg, rgb(35, 81, 94), rgb(190, 131, 139) 100%)",
    // },
  },
};

const cardTransition = { duration: 0.2, type: "spring", mass: 0.6 };

const titleVariants = {
  on: {
    fontSize: "2rem",
  },
  onPC: { fontSize: "2rem" },
  off: { fontSize: "2rem" },
};

export default memo(function WordStack({
  words,
  getWords,
  search,
  selectId,
  setSelectId,
}) {
  // const [toggle, flag] = useToggle(false);
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");
  const [contents, setContents] = useState("");
  const { updateWord, getContents, deleteWordDoc } = useWordsDB();

  const handleSelectCard = (word) => {
    if (word.title !== selectId) {
      setSelectId(word.title);
      // setContents(word.contents);
    }
  };

  const handleStopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <LayoutGroup>
      <AnimatePresence mode="popLayout">
        {words.filter((w) => w.isBookmark === false).length > 0 ? (
          words
            .filter((word) => {
              if (
                new RegExp(search, "gi").test(word.title) &&
                word.isBookmark === false
              ) {
                return word;
              }
            })
            .map((word, i) => {
              return (
                <motion.div
                  layout={true} //sizeが良いかも
                  layoutRoot
                  // drag="x"
                  // onDrag={(event, info) =>
                  //   info.offset.x < -100 && setSelectId(null)
                  // }
                  // dragSnapToOrigin={true}
                  // dragConstraints={{
                  //   top: 0,
                  //   left: 0,
                  //   right: 0,
                  //   bottom: 0,
                  // }}
                  layoutScroll={true}
                  style={{
                    borderRadius: "1rem",
                  }}
                  // css={cardStyle}
                  key={word.title}
                  variants={cardVariants}
                  initial={false}
                  exit={{ opacity: 0 }}
                  animate={
                    selectId == word.title
                      ? isLargerThen50em
                        ? "onPc"
                        : "on"
                      : "off"
                  }
                  transition={cardTransition}
                  onClick={() => handleSelectCard(word)}>
                  <motion.div layout="position">
                    {selectId !== word.title ? (
                      <motion.h3
                        layout={true}
                        layoutScroll={true}
                        initial={{ fontSize: "2rem" }}
                        variants={titleVariants}
                        transition={cardTransition}
                        animate={
                          selectId == word.title
                            ? isLargerThen50em
                              ? "onPc"
                              : "on"
                            : "off"
                        }
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        // style={{
                        //   fontSize: `${word.title.length < 7 ? "3" : "2"}rem`,
                        // }}
                      >
                        {word.title.length > 10
                          ? `${word.title.slice(0, 10)}...`
                          : word.title}
                      </motion.h3>
                    ) : null}
                    <AnimatePresence>
                      {selectId == word.title ? (
                        <motion.div
                          layoutScroll={true}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          // transition={cardTransition}
                          exit={{ opacity: 0, transition: { duration: 0.2 } }}>
                          <EditableText title={word.title} words={words} />

                          <IconButton
                            pos="absolute"
                            right="30"
                            colorScheme="red"
                            aria-label="Delete Word"
                            icon={<DeleteIcon />}
                            onClick={() => {
                              deleteWordDoc(word.title);
                              setSelectId(null);
                            }}
                          />

                          <motion.button
                            css={
                              isLargerThen50em
                                ? closeButtonStylePC
                                : closeButtonStyle
                            }
                            onClick={() => {
                              setSelectId(null);
                              setContents("");
                            }}
                          />
                          <motion.time
                            dateTime={dayjs(word.timestamp.toDate()).format(
                              "YYYY-MM-DDTHH:mm"
                            )}>
                            {dayjs(word.timestamp.toDate()).format(
                              "YYYY-MM-DD"
                            )}
                          </motion.time>

                          <MarkdownForm
                            word={word}
                            handleStopPropagation={handleStopPropagation}
                            isLargerThen50em={isLargerThen50em}
                            selectId={selectId}
                            contents={contents}
                            setContents={setContents}
                            getContents={getContents}
                            updateWord={updateWord}
                          />
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })
        ) : Object.keys(words).length > 0 ? (
          <Flex
            justifyContent="center"
            flexDirection="column"
            fontWeight="bold"
            whiteSpace="normal">
            <Text>新規単語を追加して学習を始めましょう!</Text>
            <Text>
              ブックマークしている単語から学習を始めることもできます。
            </Text>
          </Flex>
        ) : (
          <Flex
            justifyContent="center"
            textAlign="center"
            flexDirection="column"
            fontWeight="bold"
            whiteSpace="normal">
            <Text>新規単語を追加して学習を始めましょう!</Text>
            <Text>
              Trendのページで単語をブックマークして 学習を始めることもできます。
            </Text>
            <motion.div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Button w="10rem" onClick={getWords}>
                Reload
              </Button>
            </motion.div>
          </Flex>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
});
