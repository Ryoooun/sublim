/**@jsxImportSource @emotion/react */
import {
  Box,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from "@/app/common/chakraui/ChakraUI";
import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import NextImage from "next/image";
import { memo, useState } from "react";
import "../../../../components/organisms/scroll.css";
// import WordBookmarkPopOver from "../molecules/WordBookmarkPopOver";

const scroll = css({
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const avatarStyleImage = css({
  borderRadius: "50%",
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
    height: "30vh",
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

const WordBookmarkPopOver = dynamic(() =>
  import("../molecules/WordBookmarkPopOver")
);

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
    <Box w="full">
      {/* <LayoutGroup id="card"> */}
      <AnimatePresence mode="popLayout" initial={false}>
        <Flex css={flexStyle}>
          {zennItems.map((post) => {
            return (
              <motion.div
                layout="size"
                layoutScroll={true}
                variants={cardVariants}
                // css={cardStyleMobile}
                animate={
                  selectId === post.id
                    ? isLargerThen50em
                      ? "onPc"
                      : "on"
                    : isLargerThen50em
                    ? "offPc"
                    : "off"
                }
                exit={{ opacity: 0 }}
                key={post.id}
                onClick={() => handleClickCard(post)}>
                <motion.div style={{ whiteSpace: "normal" }}>
                  <NextImage
                    src={post.user.avatarSmallUrl}
                    alt={post.id}
                    width={50}
                    height={50}
                    css={avatarStyleImage}
                  />

                  <Text
                    fontSize="xs"
                    fontFamily="mono">{`@${post.user.username}`}</Text>
                  <a href={post.path} target="_blank">
                    <Heading fontSize="sm" _hover={{ color: "brand.700" }}>
                      {post.title}
                    </Heading>
                  </a>
                  {post.id === selectId && (
                    <>
                      <Flex
                        as={motion.div}
                        layout
                        css={scroll}
                        flexWrap="wrap"
                        justifyItems="center"
                        mt="2"
                        gap="2"
                        height={
                          post.id === selectId && isLargerThen50em
                            ? "24vh"
                            : "12vh "
                        }
                        overflow="scroll">
                        {post.id === selectId &&
                          post.parse.map((obj, i) => (
                            <WordBookmarkPopOver text={obj.text} key={i} />
                          ))}
                      </Flex>
                    </>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </Flex>
      </AnimatePresence>
      {/* </LayoutGroup> */}
    </Box>
  );
});
