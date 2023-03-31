"use client";

import { useLogout } from "@/app/hooks/useLogout";

import {
  Button,
  Flex,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Divider,
  useMediaQuery,
  Box,
} from "@/app/common/chakraui/ChakraUI";
import { useUserHook } from "@/app/hooks/useUser";

export default function PageContentWrapper(qiitaItems) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");
  const posts = qiitaItems?.qiitaItems;
  console.log(posts);
  return (
    <Box
      w={isLargerThen50em ? "93vw" : "100vw"}
      bg="white"
      px={isLargerThen50em ? "4rem" : "5"}
      py={isLargerThen50em ? "0" : "10"}>
      {posts.map((post) => {
        return (
          <Card key={posts.id} mb="2">
            <CardHeader>
              <Heading>{post.title}</Heading>
              <Divider w="full" />
            </CardHeader>
            <CardBody>
              <p>{post.title}</p>
              <p>{post.url}</p>
            </CardBody>
          </Card>
        );
      })}
    </Box>
  );
}
