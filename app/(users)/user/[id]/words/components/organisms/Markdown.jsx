"use client";

import {
  Code,
  Divider,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
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
import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

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
          <Textarea value={value} onChange={handleInputChange} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
