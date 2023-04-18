/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  SimpleGrid,
  Avatar,
  Text,
  Heading,
  Flex,
  Box,
  Divider,
  useMediaQuery,
} from "@/app/common/chakraui/ChakraUI";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React, { memo, useEffect, useState } from "react";

import "../../../../components/organisms/scroll.css";

const closeButtonStyle = css({
  display: "block",
  position: "absolute",
  top: "1rem",
  right: "1rem",
  width: "1.5rem ",
  height: "1.5rem",
  border: "2px solid #333d",
  borderRadius: "50%",
  transition: "all 1s",
  "&::before,&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "1rem",
    height: "2px",
    backgroundColor: "#333d",
  },
  "::before": {
    transform: "translate(-50%, -50%) rotate(45deg)",
  },
  "::after": {
    transform: "translate(-50%, -50%) rotate(-45deg)",
  },
  ":hover": {
    transform: "rotate(360deg)",
  },
});

const flexStyle = css({
  padding: "0 4rem 0 2rem",
  height: "100%",
  whiteSpace: "nowrap",
  overflow: "scroll",
  gap: "1rem",
  scrollSnapType: "x proximity",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const cardStyleMobile = css({
  marginBottom: "1rem",
  height: "20rem",
  padding: "1rem",
  minWidth: "100%",
  borderRadius: "1.25rem",
  scrollSnapAlign: "center",
  scrollSnapStop: "always",
  backgroundColor: "#0f0",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
});

const cardTransition = {
  duration: 0.5,
  type: "spring",
  mass: 0.6,
};

const cardVariants = {
  on: {
    width: "100vw",
    height: "38vh",
    padding: "2rem",
  },
  onPc: {
    height: "38vh",
    minWidth: "28%",
    padding: "2rem",
  },
  off: {
    marginBottom: "1rem",
    height: "20vh",
    padding: "1rem",
    minWidth: "100%",
    borderRadius: "1.25rem",
    scrollSnapAlign: "center",
    scrollSnapStop: "always",
    backgroundColor: "#fff",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
  offPc: {
    marginBottom: "1rem",
    height: "20vh",
    padding: "1rem",
    minWidth: "28%",
    borderRadius: "1.25rem",
    scrollSnapAlign: "center",
    scrollSnapStop: "always",
    backgroundColor: "#fff",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
};

import "../../../../components/organisms/scroll.css";

export default memo(function QiitaPostList({ qiitaItems }) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");
  const [selectId, setSelectId] = useState(null);

  const handleClickCard = async (post) => {
    if (post.id !== selectId) {
      setSelectId(post.id);
    } else {
      setSelectId(null);
    }
  };

  return (
    <Box w="full" h="40vh">
      <LayoutGroup id="card">
        <AnimatePresence mode="popLayout" initial={false}>
          <Flex css={flexStyle}>
            {qiitaItems.map((post) => {
              return (
                <motion.div
                  layout="size"
                  layoutScroll={true}
                  variants={cardVariants}
                  // css={cardStyleMobile}
                  initial={false}
                  animate={
                    selectId === post.id
                      ? isLargerThen50em
                        ? "onPc"
                        : "on"
                      : isLargerThen50em
                      ? "offPc"
                      : "off"
                  }
                  transition={cardTransition}
                  exit={{ opacity: 0 }}
                  key={post.id}
                  onClick={() => handleClickCard(post)}>
                  <motion.div style={{ whiteSpace: "normal" }}>
                    <Avatar
                      name={post.user.id}
                      src={post.user.profile_image_url}
                      size="md"
                    />
                    <Text
                      fontSize="sm"
                      fontFamily="mono">{`@${post.user.id}`}</Text>
                    <a href={post.url} target="_blank">
                      <Heading fontSize="md" _hover={{ color: "brand.700" }}>
                        {post.title}
                      </Heading>
                    </a>
                    {post.id === selectId && (
                      <>
                        <Divider w="full" mt="3" />
                        <SimpleGrid
                          pb="3"
                          mt="1"
                          spacing="0.5rem"
                          height={post.id === selectId && "8rem "}
                          overflow="scroll">
                          {post.id === selectId &&
                            post.parse.map((obj, i) => (
                              <Text
                                bg="brand.400"
                                py="1"
                                px="2"
                                borderRadius="xl"
                                color="white"
                                textAlign="center"
                                key={i}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  alert(obj.text);
                                }}>
                                {obj.text}
                              </Text>
                            ))}
                        </SimpleGrid>
                      </>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </Flex>
        </AnimatePresence>
      </LayoutGroup>
    </Box>
    // <Box w="full" h="full">
    //   <Flex
    //     whiteSpace="nowrap"
    //     overflow="scroll"
    //     gap="4"
    //     className="scrollbar"
    //     scrollSnapType="x proximity"
    //     sx={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
    //     {qiitaItems.map((post) => {
    //       return (
    //         <Box
    //           className="Card"
    //           key={post.id}
    //           mb="4"
    //           minW={isLargerThen50em ? "28%" : "60%"}
    //           borderRadius="xl"
    //           scrollSnapAlign="center"
    //           scrollSnapStop="always"
    //           // boxShadow="0 20px 25px -5px rgba(0 0 0 / .10), 0 10px 10px -5px rgba(0 0 0 / .0.4)"
    //           sx={{
    //             boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    //           }}
    //           p="4"
    //           _hover={{
    //             opacity: "0.7",
    //             transitionDuration: "400ms",
    //             transitionTimingFunction: "ease-in-out",
    //           }}>
    //           <Box whiteSpace="normal">
    //             <Avatar
    //               name={post.user.id}
    //               src={post.user.profile_image_url}
    //               size="md"
    //             />
    //             <Text
    //               fontSize="sm"
    //               fontFamily="mono">{`@${post.user.id}`}</Text>
    //             <a href={post.url} target="_blank">
    //               <Heading fontSize="md" _hover={{ color: "brand.700" }}>
    //                 {post.title}
    //               </Heading>
    //             </a>
    //             <Divider w="full" mt="3" />
    //             <Box mt="3" maxH="4rem">
    //               <Flex
    //                 direction="row"
    //                 flexWrap="wrap"
    //                 gap="1"
    //                 overflow="auto"
    //                 whiteSpace="nowrap">
    //                 {post.tags.map((tag, i) => (
    //                   <Box
    //                     fontSize="xs"
    //                     px="0.2rem"
    //                     bg="blackAlpha.400"
    //                     color="white"
    //                     borderRadius="md"
    //                     key={i}>
    //                     {tag}
    //                   </Box>
    //                 ))}
    //               </Flex>
    //             </Box>
    //           </Box>
    //         </Box>
    //       );
    //     })}
    //   </Flex>
    // </Box>
  );
});
