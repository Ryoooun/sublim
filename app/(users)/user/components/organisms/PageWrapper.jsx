import { motion } from "framer-motion";
import { Box } from "@/app/common/chakraui/ChakraUI";
import "./scroll.css";
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

export default function PageWrapper({ isLargerThen50em, isOpen, children }) {
  const LargerThen50rem = ({ children }) => {
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
        boxShadow="2xl"
        py="5"
        sx={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
        {children}
      </Box>
    );
  };

  const SmallerThen50rem = ({ children }) => {
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
  };

  if (isLargerThen50em) {
    return <LargerThen50rem>{children}</LargerThen50rem>;
  } else {
    return <SmallerThen50rem>{children}</SmallerThen50rem>;
  }
}
