/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { memo } from "react";
import { ZennPost } from "./ZennPost";
import { useState } from "react";
import "../../../../components/organisms/scroll.css";

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
  padding: "1rem",
  minWidth: "100%",
  borderRadius: "1.25rem",
  scrollSnapAlign: "center",
  scrollSnapStop: "always",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  "&:hover": {
    opacity: "0.7",
    transitionDuration: "400ms",
    transitionTimingFunction: "ease-in-out",
  },
});

const cardVariants = {
  on: {
    display: "block",
    width: "100vw",
    height: "20rem",
    position: "fixed",
    left: "0",
    top: "0",
    zIndex: "20",
    backgroundColor: "#ffffffea",
    WebkitBackdropFilter: "blur(10px)",
    backdropFilter: "blur(10px)",
    padding: "2rem",
  },
  onPc: {},
  off: {},
};

export default memo(function ZennPostList({ zennItems }) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");
  const [selectId, setSelectId] = useState(null);
  const handleClickCard = (id) => {
    if (id !== selectId) {
      console.log(id);
      setSelectId(id);
    }
  };

  return (
    <Box w="full" h="full">
      <Flex css={flexStyle}>
        <LayoutGroup>
          <AnimatePresence>
            {zennItems.map((post) => {
              return (
                <motion.div
                  layout
                  layoutScroll
                  variants={cardVariants}
                  animate={
                    selectId == post.id
                      ? isLargerThen50em
                        ? "onPc"
                        : "on"
                      : "off"
                  }
                  css={
                    isLargerThen50em
                      ? css`
                          ${cardStyleMobile};
                          min-width: 28%;
                        `
                      : cardStyleMobile
                  }
                  key={post.id}
                  onClick={() => handleClickCard(post.id)}>
                  <motion.div style={{ whiteSpace: "normal" }}>
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
