/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
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
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Link,
  Image,
  Text,
  Divider,
  Code,
  List,
  ListItem,
  OrderedList,
  UnorderedList,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Button,
  Box,
  useMediaQuery,
} from "@/app/common/chakraui/ChakraUI";
import { memo, useEffect, useState, useCallback } from "react";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";

import dayjs from "dayjs";
import useToggle from "@/app/hooks/useToggle";

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
const cardStyle = css({
  fontWeight: "bold",
  color: "black",
  height: "10rem",
  boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.06) inset",
  display: "grid",
  whiteSpace: "normal",
});

const markDownStyle = css({
  // whiteSpace: "break-spaces",
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
    WebkitBackdropFilter: "blur(20px)",
    backdropFilter: "blur(20px)",
    padding: "1rem",
  },
  onPc: {
    width: "80vw",
    height: "95vh",
    position: "fixed",
    top: "2.5vh",
    zIndex: "20",
    backgroundImage: "none",
    backgroundColor: "#ffffff0f",
    WebkitBackdropFilter: "blur(20px)",
    backdropFilter: "blur(20px)",
    padding: "2rem",
  },
  off: {
    placeContent: "center",
    //   backgroundImage:
    //     "linear-gradient(140deg, rgb(35, 81, 94), rgb(190, 131, 139) 100%)",
    // },
  },
};

export default memo(function WordStack({ words, getWords }) {
  const [toggle, flag] = useToggle(false);
  const [selectId, setSelectId] = useState(null);
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");

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
                layoutScroll={true}
                style={{ borderRadius: "1rem" }}
                css={cardStyle}
                key={word.id}
                variants={cardVariants}
                animate={
                  selectId == word.id
                    ? isLargerThen50em
                      ? "onPc"
                      : "on"
                    : "off"
                }
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  type: "spring",
                  mass: 0.8,
                }}
                onClick={() => handleSelectCard(word.id)}>
                <motion.div layout>
                  <motion.h3
                    layout
                    style={{
                      fontSize: `${word.title.length < 7 ? "3" : "2"}rem`,
                    }}>
                    {word.title.length > 10
                      ? `${word.title.slice(0, 10)}...`
                      : word.title}
                  </motion.h3>
                  <AnimatePresence>
                    {selectId == word.id ? (
                      <motion.div
                        layout
                        // style={{ overflow: "scroll", height: "80%" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <motion.time
                          dateTime={dayjs(word.timestamp.toDate()).format(
                            "YYYY-MM-DDTHH:mm"
                          )}>
                          {dayjs(word.timestamp.toDate()).format("YYYY-MM-DD")}
                        </motion.time>
                        {/* <motion.p>{word.contents}</motion.p> */}
                        <motion.div
                          layout
                          style={{
                            width: "70vw",
                            height: "80vh",
                            overflow: "scroll",
                          }}>
                          <ReactMarkdown
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
                                <Heading fontSize="2xl" my="1rem" {...props} />
                              ),
                              h3: ({ node, ...props }) => (
                                <Heading fontSize="xl" my="1rem" {...props} />
                              ),
                              h4: ({ node, ...props }) => (
                                <Heading fontSize="lg" my="1rem" {...props} />
                              ),
                              h5: ({ node, ...props }) => (
                                <Heading fontSize="md" my="1rem" {...props} />
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
                              tr: ({ node, ...props }) => <Tr {...props} />,
                              th: ({ node, ...props }) => <Th {...props} />,
                              tbody: ({ node, ...props }) => (
                                <Tbody {...props} />
                              ),
                              td: ({ node, ...props }) => (
                                <Td fontSize="sm" {...props} />
                              ),
                              a: ({ node, ...props }) => (
                                <Link isExternal color="brand.500" {...props} />
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
