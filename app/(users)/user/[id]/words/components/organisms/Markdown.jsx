"use client";

import { useCallback } from "react";
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
} from "@/app/common/chakraui/ChakraUI";
import { useState } from "react";

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

export default function Markdown() {
  const [value, setValue] = useState(test);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>Preview</Tab>
        <Tab>Editor</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ReactMarkdown
            children={value}
            remarkPlugins={[remarkGfm]}
            linkTarget={"_top"}
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
                <Heading fontSize="sm" color="gray.400" my="1rem" {...props} />
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
              td: ({ node, ...props }) => <Td fontSize="xs" {...props} />,
              a: ({ node, ...props }) => (
                <Link isExternal color="brand.500" {...props} />
              ),
              img: ({ node, ...props }) => (
                <Image boxSize="200px" objectFit="cover" {...props} />
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
              li: ({ node, ...props }) => <ListItem {...props} />,
            }}
          />
        </TabPanel>
        <TabPanel>
          <Textarea value={value} onChange={handleInputChange} size="lg" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
