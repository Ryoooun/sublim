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

const scroll = css({
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const flexStyle = css({
  height: "100%",
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
  duration: 0.5,
  type: "spring",
  mass: 0.6,
};

const cardVariants = {
  on: {
    width: "100vw",
    height: "38vh",
    padding: "0rem",
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

const tagStyle = css({
  backgroundColor: "#3fcb72",
  maxWidth: "90%",
  padding: "0.25rem 0.5rem",
  borderRadius: "1.25rem",
  color: "#fff",
  textAlign: "center",
});

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
    <Box w="full" h="40vh">
      <LayoutGroup id="card">
        <AnimatePresence mode="popLayout" initial={false}>
          <Flex css={flexStyle}>
            {zennItems.map((post) => {
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
                        <SimpleGrid
                          css={scroll}
                          justifyItems="center"
                          mt="2"
                          spacing="0.5rem"
                          height={post.id === selectId && "8rem "}
                          overflow="scroll">
                          {post.id === selectId &&
                            post.parse.map((obj, i) => (
                              <motion.span
                                css={tagStyle}
                                key={i}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  alert(obj.text);
                                }}>
                                {obj.text}
                              </motion.span>
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
  );
});
