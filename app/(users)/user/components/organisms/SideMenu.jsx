import { motion } from "framer-motion";
import { useState } from "react";
import {
  Button,
  Text,
  Box,
  Heading,
  Flex,
  VStack,
  Divider,
  Link,
} from "../../../../common/chakraui/ChakraUI";
import DashBoardAvatar from "../atoms/DashBoardAvatar";
import { NextLink } from "next/link";
const variants = {
  open: {
    opacity: 1,
    x: 0,
    width: "20rem",
    height: "100vh",
    boxShadow: "0px 0px  rgba(0, 0, 0, 0.16)",
    backgroundColor: "#48BB78",
    borderRadius: "1rem",
  },
  closed: {
    opacity: 1,
    position: "fixed",
    x: "10%",
    y: "10%",
    height: "4rem",
    width: "4rem",
    borderRadius: "100%",
    backgroundColor: "#48BB78",
    color: "rgba(0,0,0,0)",
  },
};

export const SideMenu = ({ logout, user, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setIsOpen((isOpen) => !isOpen)}>Toggle</Button>
      <Flex>
        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            margin: "0",
            padding: "0",
            backdropFilter: "auto",
            backdropBlur: "2px",
          }}>
          <Flex
            direction="column"
            justifyContent="flex-end"
            p="2"
            backdropFilter="auto"
            backdropBlur="2px">
            {user ? <DashBoardAvatar src={user?.photoURL} /> : null}
            <VStack display="flex" alignItems="flex-start" direction="column">
              <Heading
                fontSize={{ sm: "xl", lg: "2xl" }}
                p="2"
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap">
                {user ? `${user?.userName}` : "ゲスト"}
              </Heading>
              <Divider />
              <Link
                as={NextLink}
                href="/user/top"
                _hover={{ textDecoration: "none", bg: "brand.500" }}>
                <Heading p="2">Top</Heading>
              </Link>
              <Button
                onClick={logout}
                bg="brand.300"
                _hover={{ bg: "brand.600", color: "white" }}>
                Logout
              </Button>
            </VStack>
          </Flex>
        </motion.nav>
        <Box h="100vh" pl="20" overflow="hidden" whiteSpace="nowrap">
          {children}
        </Box>
      </Flex>
    </>
  );
};
