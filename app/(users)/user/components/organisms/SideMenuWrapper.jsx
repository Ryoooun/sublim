import { motion } from "framer-motion";

const isLargerThen50emVariants = {
  open: {
    opacity: 1,
    x: 0,
    y: "50px",
    width: "350px",
    height: "90vh",
    borderRadius: "1rem",
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  closed: {
    opacity: 1,
    x: 10,
    y: 50,
    width: "72px",
    height: "65px",
    borderRadius: "50%",
    backgroundColor: "rgba(0,0,0,0.08)",
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};

const isSmallerThen50remVariants = {
  open: {
    opacity: 1,
    x: 0,
    y: 50,
    width: "20rem",
    height: "90vh",
  },
  closed: {
    opacity: 1,
    x: 0,
    y: 50,
    width: "0",
    color: "rgba(0,0,0,0)",
  },
};

export default function SideMenuWrapper({
  isOpen,
  isLargerThen50em,
  children,
}) {
  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={
        isLargerThen50em ? isLargerThen50emVariants : isSmallerThen50remVariants
      }
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        margin: "0",
        padding: "0",
      }}>
      {children}
    </motion.nav>
  );
}
