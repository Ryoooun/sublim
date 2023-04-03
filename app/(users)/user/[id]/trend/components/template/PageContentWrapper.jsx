"use client";

import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Divider,
  useMediaQuery,
  Box,
} from "@/app/common/chakraui/ChakraUI";

export default React.memo(function PageContentWrapper(qiitaItems) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");
  const posts = qiitaItems?.qiitaItems;
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
              <a href={post.url} target="_blank">
                <img src={post.ogData.ogImageUrl} alt="" />
              </a>
              <Divider w="full" />
            </CardHeader>
            <CardBody>
              <Heading fontSize="lg">{post.title}</Heading>
            </CardBody>
          </Card>
        );
      })}
    </Box>
  );
});
