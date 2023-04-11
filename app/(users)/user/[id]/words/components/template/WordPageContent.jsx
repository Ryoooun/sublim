"use client";
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Container,
  Tag,
  Flex,
  Card,
  CardBody,
  Stack,
  Text,
  Divider,
  CardFooter,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  IconButton,
} from "@/app/common/chakraui/ChakraUI";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import CloudWrapper from "../../../map/components/organisms/CloudWrapper";
import { useMemo } from "react";
import WordStack from "../organisms/WordStack";
import WordStackHeader from "../organisms/WordStackHeader";
const scroll = css`
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function WordPageContent({ children }) {
  const postURL = useMemo(() => {
    return "https://qiita.com/jnchito/items/459d58ba652bf4763820";
  }, []);
  return (
    <Container maxW="100vw" as={motion.div} layout overflow="hidden">
      <WordStackHeader />
      {/* <TableContainer
        overflowY="scroll"
        h="80vh"
        mt="2"
        sx={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Folder</Th>
              <Th>Word's</Th>
              <Th>create at</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array(100)
              .fill(1)
              .map((_, i) => {
                return (
                  <Tr key={i}>
                    <Td isTruncated={true}>
                      {
                        ["フロントエンド", "バックエンド", "UI/UX", "Network"][
                          i % 4
                        ]
                      }
                    </Td>
                    <Td isNumeric>{i * i}</Td>
                    <Td isNumeric>{new Date().toLocaleDateString()}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer> */}
      <SimpleGrid
        minChildWidth="8rem"
        gap="4"
        overflow="scroll"
        h="95vh"
        pt="24"
        pb="20"
        sx={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        css={scroll}>
        <WordStack />
      </SimpleGrid>
    </Container>
  );
}
