import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Text,
  Heading,
  Flex,
  Box,
  Divider,
  useMediaQuery,
} from "@/app/common/chakraui/ChakraUI";
import React, { useMemo } from "react";
import "../../../../components/organisms/scroll.css";

export default React.memo(function QiitaPostList({ qiitaItems }) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");
  const posts = [...qiitaItems];

  return (
    <Box w="full" h="full">
      <Flex
        whiteSpace="nowrap"
        overflow="scroll"
        gap="4"
        className="scrollbar"
        scrollSnapType="x proximity"
        sx={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
        {posts.map((post) => {
          return (
            <Box
              key={post.id}
              boxSizing="border-box"
              mb="2"
              minW={isLargerThen50em ? "25%" : "60%"}
              borderRadius="xl"
              bg="blackAlpha.50"
              scrollSnapAlign="center"
              scrollSnapStop="always"
              boxShadow="0 20px 25px -5px rgba(0 0 0 / .10), 0 10px 10px -5px rgba(0 0 0 / .0.4)"
              _hover={{ bg: "blackAlpha.200" }}
              p="4">
              <Box whiteSpace="normal">
                <Avatar name={post.user.id} src={post.user.profile_image_url} />
                <Text
                  fontSize="sm"
                  fontFamily="mono">{`@${post.user.id}`}</Text>
                <a href={post.url} target="_blank">
                  <Heading fontSize="md" _hover={{ color: "brand.700" }}>
                    {post.title}
                  </Heading>
                </a>
                <Divider w="full" />
              </Box>
              <Box maxH="4rem">
                <Flex direction="row" flexWrap="wrap" gap="1">
                  {post.tags.map((tag, i) => (
                    <Box
                      fontSize="xs"
                      px="0.2rem"
                      bg="blackAlpha.400"
                      color="white"
                      borderRadius="md"
                      key={i}>
                      {tag}
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
});
