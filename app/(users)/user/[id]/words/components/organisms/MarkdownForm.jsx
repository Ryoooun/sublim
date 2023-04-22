/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { MdEdit } from "@react-icons/all-files/md/MdEdit";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

import {
  Code,
  Divider,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Skeleton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@/app/common/chakraui/ChakraUI";
import useSWR, { useSWRConfig } from "swr";
import { useState } from "react";
const markDownStyle = css({
  width: "max(90vw, 300px)",
  height: "60vh",
  whiteSpace: "normal",
  overflowY: "scroll",
});

export default function MarkdownForm({
  word,
  getContents,
  contents,
  setContents,
  selectId,
  isLargerThen50em,
  handleStopPropagation,
  updateWord,
}) {
  const { data, isLoading } = useSWR(true ? selectId : null, (title) => {
    // const res = await getContents(word);
    // return res;
    return getContents(title);
  });
  const { mutate } = useSWRConfig();
  const [focus, setFocus] = useState(false);

  const handleEditMarkDown = (e) => {
    setContents(e.target.value);
  };

  const handleBlurEditor = async (word) => {
    setFocus(false);
    // console.log(word.contents, "=>", contents);
    try {
      if (data !== contents) {
        // console.log("changed content");
        await updateWord(word.title, "contents", contents);
        mutate(word.title);
      } else {
        console.log("not change");
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  if (isLoading) {
    return <Skeleton w="max(75vw, 300px)" h="60vh" />;
  }

  return (
    <div
      // layout="size"
      // layoutScroll={true}
      style={{
        width: "90vw",
        height: "80vh",
        overflow: "scroll",
      }}>
      <Tabs variant="enclosed" w={isLargerThen50em ? "70vw" : "90vw"}>
        <TabList onClick={handleStopPropagation}>
          <Tab>
            <AiFillEye />
          </Tab>
          <Tab onClick={() => setContents(data)}>
            <MdEdit />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel pl="0">
            <ReactMarkdown
              css={css({
                width: `${isLargerThen50em ? "80vw" : "90vw"}`,
                height: "60vh",
                whiteSpace: "normal",
                overflowY: "scroll",
              })}
              children={
                data ? data.replace(/  /g, "\n").replace(/\| \|/g, "|\n") : ""
              }
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
                thead: ({ node, ...props }) => <Thead {...props} />,
                tr: ({ node, ...props }) => <Tr {...props} />,
                th: ({ node, ...props }) => <Th {...props} />,
                tbody: ({ node, ...props }) => <Tbody {...props} />,
                td: ({ node, ...props }) => <Td fontSize="sm" {...props} />,
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
                hr: ({ node, ...props }) => <Divider {...props} my="1rem" />,
                code: ({ node, ...props }) => (
                  <Code variant="subtle" {...props} />
                ),
                ol: ({ node, ...props }) => <OrderedList {...props} />,
                ul: ({ node, ...props }) => <UnorderedList {...props} />,
                li: ({ node, ...props }) => (
                  <ListItem listStylePosition="inside" {...props} />
                ),
              }}
            />
          </TabPanel>
          <TabPanel pl="0">
            <Textarea
              variant="outline"
              w={isLargerThen50em ? "80vw" : "90vw"}
              h="60vh"
              pos="relative"
              value={contents}
              onFocus={() => setFocus(true)}
              onChange={(e) => handleEditMarkDown(e)}
              onBlur={() => handleBlurEditor(word)}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
