import { motion } from "framer-motion";
import { Box } from "@/app/common/chakraui/ChakraUI";
import "./scroll.css";
import React from "react";

const variantsPage = {
  open: {
    x: "100vw",
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  closed: {
    x: "0",
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
};

export default React.memo(function PageWrapper({
  isLargerThen50em,
  isOpen,
  children,
}) {
  const LargerThen50rem = React.memo(({ children }) => {
    return (
      <Box
        className="scrollbar"
        m="5"
        h="95vh"
        overflowX="hidden"
        overflowY="scroll"
        bg="white"
        boxSizing="border-box"
        borderRadius="1rem"
        boxShadow="lg"
        py="0"
        sx={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
        {children}
      </Box>
    );
  });

  const SmallerThen50rem = React.memo(({ children }) => {
    return (
      <motion.div
        className="scrollbar"
        animate={isOpen ? "open" : "closed"}
        variants={variantsPage}
        style={{
          backgroundColor: "white",
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}>
        {children}
      </motion.div>
    );
  });

  if (isLargerThen50em) {
    return <LargerThen50rem>{children}</LargerThen50rem>;
  } else {
    return <SmallerThen50rem>{children}</SmallerThen50rem>;
  }
});
