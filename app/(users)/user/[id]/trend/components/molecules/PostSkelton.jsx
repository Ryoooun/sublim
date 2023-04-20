/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Flex,
  Box,
  SkeletonText,
  SkeletonCircle,
  Skeleton,
} from "@/app/common/chakraui/ChakraUI";

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

const on = css({
  width: "100vw",
  height: "30vh",
});
const onPc = css({
  height: "38vh",
  minWidth: "28%",
  padding: "2rem",
});
const off = css({
  marginBottom: "1rem",
  height: "20vh",
  padding: "1rem",
  minWidth: "100%",
  borderRadius: "1.25rem",
  scrollSnapAlign: "center",
  scrollSnapStop: "always",
  backgroundColor: "#fff",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
});
const offPc = css({
  marginBottom: "1rem",
  height: "20vh",
  padding: "1rem",
  minWidth: "28%",
  borderRadius: "1.25rem",
  scrollSnapAlign: "center",
  scrollSnapStop: "always",
  backgroundColor: "#fff",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
});

import "../../../../components/organisms/scroll.css";

export default function PostSkelton({ qiitaItems }) {
  return (
    <Box w="full">
      <Flex css={flexStyle}>
        {Array(2)
          .fill(1)
          .map((_, i) => {
            return (
              <Box style={{ whiteSpace: "normal" }} css={off} key={i}>
                <SkeletonCircle size="3rem" />
                <SkeletonText noOfLines={4} spacing="2" skeletonHeight="5" />
                <SkeletonText fontSize="sm" />
              </Box>
            );
          })}
      </Flex>
    </Box>
  );
}
