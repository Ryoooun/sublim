"use client";
import NextLink from "next/link";
import NextImage from "next/image";
import { Text, Button, Flex, Heading, Box } from "../common/chakraui/ChakraUI";
import NotFoundSvg from "../(users)/user/components/atoms/NotFoundSvg";

export default function NotFound() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h="100vh">
      <Box>
        <Flex w="60vw" justifyContent="center">
          <NotFoundSvg />
        </Flex>
        <Text
          textAlign="center"
          fontSize="4xl"
          color="gray.300"
          mt={["1", "-10", "-28"]}
          fontFamily="mono">
          Not Found
        </Text>
      </Box>
      <Heading
        fontSize={["2xl", "lg", "3xl"]}
        textAlign="center"
        color="gray.700">
        指定されたファイルまたはディレクトリは存在しません。
      </Heading>
      <Button
        as={NextLink}
        href="/"
        bg="brand.400"
        color="brand.900"
        _hover={{ bg: "brand.200", color: "brand.500" }}
        mt="10"
        fontSize={{ sm: "xl", md: "xl" }}
        p={["10", "8"]}>
        トップページ
      </Button>
    </Flex>
  );
}
