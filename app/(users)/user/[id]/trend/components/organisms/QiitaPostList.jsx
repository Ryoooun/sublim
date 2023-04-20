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
import NextImage from "next/image";
import { memo, useState } from "react";
import "../../../../components/organisms/scroll.css";
import dynamic from "next/dynamic";
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
  duration: 10.5,
  type: "spring",
  mass: 0.6,
};

const cardVariants = {
  on: {
    width: "100vw",
    height: "18rem",
  },
  onPc: {
    height: "38vh",
    minWidth: "28%",
    padding: "2rem",
  },
  off: {
    marginBottom: "1rem",
    height: "10rem",
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
    <Box w="full">
      {/* <LayoutGroup id="card"> */}
      <AnimatePresence mode="popLayout" initial={false}>
        <Flex css={flexStyle}>
          {qiitaItems.map((post) => {
            return (
              <motion.div
                layout="size"
                layoutScroll={true}
                variants={cardVariants}
                // css={cardStyleMobile}
                // initial={false}
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
                    // name={post.user.id}
                    src={post.user.profile_image_url}
                    alt={post.id}
                    width={50}
                    height={50}
                    css={avatarStyleImage}
                    // size="md"
                  />

                  <Text
                    fontSize="xs"
                    fontFamily="mono">{`@${post.user.id}`}</Text>
                  <a href={post.url} target="_blank">
                    <Heading fontSize="sm" _hover={{ color: "brand.700" }}>
                      {post.title.length > 40
                        ? `${post.title.slice(0, 40)}...`
                        : `${post.title}`}
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
                            : "9rem"
                        }
                        overflow="scroll">
                        {post.id === selectId &&
                          post.parse.map((obj, i) => (
                            <WordBookmarkPopOver text={obj.text} key={i} />
                            // <motion.span
                            //   css={tagStyle}
                            //   key={i}
                            //   onClick={(e) => {
                            //     e.stopPropagation();
                            //     alert(obj.text);
                            //   }}>
                            //   {obj.text}
                            // </motion.span>
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
