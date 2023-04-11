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
} from "@/app/common/chakraui/ChakraUI";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { RiSearchLine } from "@react-icons/all-files/ri/RiSearchLine";
import CloudWrapper from "../../../map/components/organisms/CloudWrapper";
import { useMemo } from "react";

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
    <Container maxW="100vw">
      <Box
        mb="4"
        pos="fixed"
        top="5"
        zIndex="10"
        w="85vw"
        backdropFilter="auto"
        backdropBlur="3px">
        <Heading mb="4">Words</Heading>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<RiSearchLine style={{ color: "#888" }} />}
          />
          <Input
            as={motion.input}
            type="text"
            placeholder="単語帳を検索"
            variant="outline"
            color="#888"
            whileFocus={{ backgroundColor: "#fff" }}
          />
        </InputGroup>
      </Box>
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
        {Array(20)
          .fill(1)
          .map((_, i) => {
            return (
              <Card maxW="sm" key={i} borderRadius="xl">
                <CardBody
                  bg={["#3771FB", "#FF693A", "#58BD7D", "#353945"][i % 4]}
                  borderTopRadius="xl">
                  <Stack>
                    <Heading
                      size="md"
                      color="white"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                      overflow="hidden">
                      Front End
                    </Heading>
                  </Stack>
                </CardBody>
                <Divider color="gray.100" />
                <CardFooter p="2">
                  <Stack>
                    <Text>単語数: 100</Text>
                    <Text>{new Date().toLocaleDateString()}</Text>
                  </Stack>
                </CardFooter>
              </Card>
            );
          })}
      </SimpleGrid>
    </Container>
  );
}
