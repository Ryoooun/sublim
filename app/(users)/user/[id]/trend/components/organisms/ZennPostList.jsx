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
import { memo } from "react";
import { ZennPost } from "./ZennPost";

import "../../../../components/organisms/scroll.css";

export default memo(function ZennPostList({ zennItems }) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");

  return (
    <Box w="full" h="full">
      <Flex
        whiteSpace="nowrap"
        overflow="scroll"
        gap="4"
        className="scrollbar"
        scrollSnapType="x proximity"
        sx={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
        {zennItems.map((post) => {
          return (
            <Box
              className="Card"
              key={post.id}
              mb="4"
              minW={isLargerThen50em ? "28%" : "60%"}
              borderRadius="xl"
              scrollSnapAlign="center"
              scrollSnapStop="always"
              // boxShadow="0 20px 25px -5px rgba(0 0 0 / .10), 0 10px 10px -5px rgba(0 0 0 / .0.4)"
              sx={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
              p="4"
              _hover={{
                opacity: "0.7",
                transitionDuration: "400ms",
                transitionTimingFunction: "ease-in-out",
              }}>
              <Box whiteSpace="normal">
                <Heading>Keyword</Heading>
                <Avatar
                  name={post.user.username}
                  src={post.user.avatarSmallUrl}
                  size="md"
                />
                <Text
                  fontSize="sm"
                  fontFamily="mono">{`@${post.user.username}`}</Text>
                <a href={`https://zenn.dev${post.path}`} target="_blank">
                  <Heading fontSize="md" _hover={{ color: "brand.700" }}>
                    {post.title}
                  </Heading>
                </a>
                <Divider w="full" mt="3" />
                <Box mt="3" maxH="4rem"></Box>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
});
