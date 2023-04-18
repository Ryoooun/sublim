/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { MdEdit } from "@react-icons/all-files/md/MdEdit";
import {
  Textarea,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
  Image,
  Text,
  Divider,
  Code,
  ListItem,
  OrderedList,
  UnorderedList,
  Button,
  useMediaQuery,
} from "@/app/common/chakraui/ChakraUI";
import { TextArea } from "@chakra-ui/react";
import EditableText from "./EditableText";

import { memo, useState, useCallback } from "react";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";
import useWordsDB from "@/app/hooks/useWordsDB";

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
    width: "100vw",
    left: "0",
    top: "0",
    zIndex: "20",
    whiteSpace: "wrap",
    backgroundImage: "none",
    backgroundColor: "#ffffffea",
    WebkitBackdropFilter: "blur(10px)",
    backdropFilter: "blur(10px)",
    padding: "2rem",
  },
  onPc: {
    display: "block",
    width: "85vw",
    height: "95vh",
    position: "fixed",
    top: "2rem",
    left: "10rem",
    zIndex: "20",
    backgroundImage: "none",
    backgroundColor: "#ffffffea",
    WebkitBackdropFilter: "blur(20px)",
    backdropFilter: "blur(20px)",
    padding: "2rem",
  },
  off: {
    placeContent: "center",
    fontWeight: "bold",
    color: "black",
    height: "8vh",
    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.06) inset",
    display: "grid",
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
  const { checkIsRegistered } = useWordsDB();
  const { updateWord } = useWordsDB();

  const handleSelectCard = (word) => {
    if (word.id !== selectId) {
      setSelectId(word.id);
      setContents(word.contents);
    }
  };

  const handleStopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const handleEditMarkDown = (e) => {
    setContents(e.target.value);
  };

  const handleBlurEditor = async (word) => {
    // console.log(word.contents, "=>", contents);
    try {
      if (word.contents !== contents) {
        // console.log("changed content");
        await updateWord(word.title, { field: "contents", content: contents });
        setSelectId(word.id);
      } else console.log("not change");
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <LayoutGroup>
      <AnimatePresence mode="popLayout">
        {words.length > 0 ? (
          words
            .filter((word) => new RegExp(search, "gi").test(word.title))
            .map((word, i) => {
              return (
                <motion.div
                  layout="position" //sizeが良いかも
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
                  key={word.id}
                  variants={cardVariants}
                  initial={false}
                  exit={{ opacity: 0 }}
                  animate={
                    selectId == word.id
                      ? isLargerThen50em
                        ? "onPc"
                        : "on"
                      : "off"
                  }
                  transition={cardTransition}
                  onClick={() => handleSelectCard(word)}>
                  <motion.div layout="position">
                    {selectId !== word.id ? (
                      <motion.h3
                        layout="position"
                        layoutScroll={true}
                        initial={{ fontSize: "2rem" }}
                        variants={titleVariants}
                        transition={cardTransition}
                        animate={
                          selectId == word.id
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
                      {selectId == word.id ? (
                        <motion.div
                          layoutScroll={true}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          // transition={cardTransition}
                          exit={{ opacity: 0, transition: { duration: 0.2 } }}>
                          <EditableText title={word.title} words={words} />
                          <motion.button
                            css={closeButtonStyle}
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
                          {/* <motion.p>{word.contents}</motion.p> */}
                          <motion.div
                            layout="size"
                            layoutScroll={true}
                            style={{
                              width: "90vw",
                              height: "80vh",
                              overflow: "scroll",
                            }}>
                            <Tabs
                              variant="enclosed"
                              as="motion.div"
                              layout
                              layoutScroll
                              w={isLargerThen50em ? "70vw" : "80vw"}>
                              <TabList onClick={handleStopPropagation}>
                                <Tab>
                                  <AiFillEye />
                                </Tab>
                                <Tab>
                                  <MdEdit />
                                </Tab>
                              </TabList>
                              <TabPanels>
                                <TabPanel>
                                  <ReactMarkdown
                                    as={TextArea}
                                    css={markDownStyle}
                                    children={word.contents
                                      .replace(/  /g, "\n")
                                      .replace(/\| \|/g, "|\n")}
                                    remarkPlugins={[remarkGfm]}
                                    linkTarget={"_blank"}
                                    components={{
                                      h1: ({ node, ...props }) => (
                                        <Heading
                                          fontSize="3xl"
                                          borderBottom="1px solid #ccc"
                                          pb="0.5rem"
                                          mb="1rem"
                                          {...props}
                                        />
                                      ),
                                      h2: ({ node, ...props }) => (
                                        <Heading
                                          fontSize="2xl"
                                          my="1rem"
                                          {...props}
                                        />
                                      ),
                                      h3: ({ node, ...props }) => (
                                        <Heading
                                          fontSize="xl"
                                          my="1rem"
                                          {...props}
                                        />
                                      ),
                                      h4: ({ node, ...props }) => (
                                        <Heading
                                          fontSize="lg"
                                          my="1rem"
                                          {...props}
                                        />
                                      ),
                                      h5: ({ node, ...props }) => (
                                        <Heading
                                          fontSize="md"
                                          my="1rem"
                                          {...props}
                                        />
                                      ),
                                      h6: ({ node, ...props }) => (
                                        <Heading
                                          fontSize="sm"
                                          color="gray.400"
                                          my="1rem"
                                          {...props}
                                        />
                                      ),
                                      table: ({ node, ...props }) => (
                                        <TableContainer maxW="100%">
                                          <Table {...props} />
                                        </TableContainer>
                                      ),
                                      thead: ({ node, ...props }) => (
                                        <Thead {...props} />
                                      ),
                                      tr: ({ node, ...props }) => (
                                        <Tr {...props} />
                                      ),
                                      th: ({ node, ...props }) => (
                                        <Th {...props} />
                                      ),
                                      tbody: ({ node, ...props }) => (
                                        <Tbody {...props} />
                                      ),
                                      td: ({ node, ...props }) => (
                                        <Td fontSize="sm" {...props} />
                                      ),
                                      a: ({ node, ...props }) => (
                                        <Link
                                          isExternal
                                          color="brand.500"
                                          {...props}
                                        />
                                      ),
                                      img: ({ node, ...props }) => (
                                        <Image
                                          boxSizing="border-box"
                                          border="3px solid #fff"
                                          maxW="50vw"
                                          m="2rem auto"
                                          fit="cover"
                                          {...props}
                                        />
                                      ),
                                      blockquote: ({ node, ...props }) => (
                                        <Text
                                          {...props}
                                          borderLeft="5px solid #ccc"
                                          mb="1rem"
                                          ml="1rem"
                                          mt="1rem"
                                          pl="1rem"
                                        />
                                      ),
                                      hr: ({ node, ...props }) => (
                                        <Divider {...props} my="1rem" />
                                      ),
                                      code: ({ node, ...props }) => (
                                        <Code variant="subtle" {...props} />
                                      ),
                                      ol: ({ node, ...props }) => (
                                        <OrderedList {...props} />
                                      ),
                                      ul: ({ node, ...props }) => (
                                        <UnorderedList {...props} />
                                      ),
                                      li: ({ node, ...props }) => (
                                        <ListItem
                                          listStylePosition="inside"
                                          {...props}
                                        />
                                      ),
                                    }}
                                  />
                                </TabPanel>
                                <TabPanel>
                                  <Textarea
                                    variant="outline"
                                    w={isLargerThen50em ? "70vw" : "80vw"}
                                    h="60vh"
                                    pos="relative"
                                    left="-2"
                                    pl="1rem"
                                    // onClick={handleStopPropagation}
                                    value={contents}
                                    onChange={handleEditMarkDown}
                                    onBlur={() => handleBlurEditor(word)}
                                  />
                                </TabPanel>
                              </TabPanels>
                            </Tabs>
                          </motion.div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })
        ) : (
          <motion.div style={{ textAlign: "center" }}>
            <Button w="10rem" onClick={getWords}>
              Reload
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
});
