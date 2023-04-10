import {
  Avatar,
  Text,
  Heading,
  Flex,
  Box,
  Divider,
  useMediaQuery,
} from "@/app/common/chakraui/ChakraUI";
import { memo, useMemo } from "react";

import "../../../../components/organisms/scroll.css";

export default memo(function ZennPostList({ devToItems, isLargerThen50em }) {
  return (
    <Box w="full" h="full">
      <Flex
        whiteSpace="nowrap"
        overflow="scroll"
        gap="4"
        className="scrollbar"
        scrollSnapType="x proximity"
        sx={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
        {devToItems.map((post) => {
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
                  src={post.user.profile_image}
                  size="md"
                />
                <Text
                  fontSize="sm"
                  fontFamily="mono">{`@${post.user.username}`}</Text>
                <a href={post.url} target="_blank">
                  <Heading fontSize="md" _hover={{ color: "brand.700" }}>
                    {post.title}
                  </Heading>
                </a>
                <Divider w="full" mt="3" />
                <Box mt="3" maxH="4rem">
                  <Flex direction="row" flexWrap="wrap" gap="1">
                    {post.tag_list.map((tag, i) => (
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
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
});
