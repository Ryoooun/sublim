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
} from "@/app/common/chakraui/ChakraUI";
import CloudWrapper from "../../../map/components/organisms/CloudWrapper";
import { useMemo } from "react";
export default function WordPageContent({ children }) {
  const postURL = useMemo(() => {
    return "https://qiita.com/jnchito/items/459d58ba652bf4763820";
  }, []);
  return (
    <Container maxW="85vw">
      <Box>
        <Heading>Word List</Heading>
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
      <Stack mt="5" spacing="3">
        {Array(20)
          .fill(1)
          .map((_, i) => {
            return (
              <Card maxW="sm" key={i}>
                <CardBody>
                  <Box w="100%" h="100%" borderRadius="xl">
                    <CloudWrapper url={postURL} />
                  </Box>
                  <Stack mt="6" spacing="3">
                    <Heading size="md">React</Heading>
                    <Text>words: 100</Text>
                    <Text>created at: today</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter></CardFooter>
              </Card>
            );
          })}
      </Stack>
    </Container>
  );
}
