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
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useAnimate,
  stagger,
} from "framer-motion";
import { memo, useEffect } from "react";
import { ZennPost } from "./ZennPost";
import { useState } from "react";
import useWord from "@/app/hooks/useWord";
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
  duration: 0.2,
  type: "spring",
  mass: 0.6,
};

const cardVariants = {
  on: {
    width: "100vw",

    padding: "2rem",
  },
  onPc: {},
  off: {
    marginBottom: "1rem",

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
    padding: "1rem",
    minWidth: "28%",
    borderRadius: "1.25rem",
    scrollSnapAlign: "center",
    scrollSnapStop: "always",
    backgroundColor: "#fff",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
};

export default memo(function ZennPostList({ zennItems }) {
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
    <Box w="full" h="full">
      <Flex css={flexStyle}>
        <LayoutGroup id="card">
          <AnimatePresence mode="popLayout" initial={false}>
            {zennItems.map((post) => {
              return (
                <motion.div
                  layout="position"
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
                      name={post.user.username}
                      src={post.user.avatarSmallUrl}
                      size="md"
                    />
                    <Text
                      fontSize="sm"
                      fontFamily="mono">{`@${post.user.username}`}</Text>
                    <a href={post.path} target="_blank">
                      <Heading fontSize="md" _hover={{ color: "brand.700" }}>
                        {post.title}
                      </Heading>
                    </a>
                    {post.id === selectId && (
                      <>
                        <Divider w="full" mt="3" />
                        <SimpleGrid
                          pb="3"
                          mt="4"
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
          </AnimatePresence>
        </LayoutGroup>
      </Flex>
    </Box>
  );
});
