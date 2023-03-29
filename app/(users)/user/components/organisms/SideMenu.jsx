import { motion } from "framer-motion";
import { useState } from "react";
import {
  Button,
  Box,
  Heading,
  Flex,
  VStack,
  Divider,
  useMediaQuery,
} from "../../../../common/chakraui/ChakraUI";
import DashBoardAvatar from "../atoms/DashBoardAvatar";

import HamburgerIcon from "../atoms/HamburgerIcon";
import LinkList from "../molecules/LinkList";

import { RiLogoutBoxLine } from "@react-icons/all-files/ri/RiLogoutBoxLine";
import { RiHome2Fill } from "@react-icons/all-files/ri/RiHome2Fill";
import { RiSearchLine } from "@react-icons/all-files/ri/RiSearchLine";
import { MdModeEdit } from "@react-icons/all-files/md/MdModeEdit";
import { RiMapLine } from "@react-icons/all-files/ri/RiMapLine";

const variants = {
  open: {
    opacity: 1,
    x: 0,
    y: "10%",
    width: "20rem",
    height: "90vh",
    boxShadow: "0px 0px  rgba(0, 0, 0, 0.16)",
    backgroundColor: "#3fcb72",
    borderRadius: "1rem",
  },
  closed: {
    opacity: 1,
    x: "13%",
    y: "120%",
    width: "4rem",
    height: "4rem",
    borderRadius: "2rem",
    backgroundColor: "#3fcb72",
    color: "rgba(0,0,0,0)",
  },
};

const linksTop = [
  {
    id: 0,
    title: "Top",
    path: "/user/top",
    icon: RiHome2Fill,
  },
  {
    id: 1,
    title: "Trend",
    path: "/user/trend",
    icon: RiSearchLine,
  },
  {
    id: 2,
    title: "Words",
    path: "/user/words",
    icon: MdModeEdit,
  },
  {
    id: 3,
    title: "Arts",
    path: "/user/arts",
    icon: RiMapLine,
  },
];

const linksBottom = [
  {
    id: 0,
    title: "How to use",
    path: "/user/usage",
  },
  {
    id: 1,
    title: "このアプリについて",
    path: "/user/about",
  },
];

export const SideMenu = ({ logout, user, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");
  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <HamburgerIcon isOpen={isOpen} toggle={toggle} />
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
              {isLargerThen50em && (
                <Heading
                  fontSize="2xl"
                  p="2"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap">
                  {user ? `${user?.userName}` : "ゲスト"}
                </Heading>
              )}
              <Divider mt="2" />
              <LinkList lists={linksTop} />
              <Divider mt="2" />
              <Button
                mt="2"
                w="full"
                fontSize="xl"
                leftIcon={<RiLogoutBoxLine />}
                onClick={logout}
                bg="brand.300"
                color="gray.700"
                _hover={{ bg: "brand.600", color: "white" }}>
                Logout
              </Button>
              <LinkList lists={linksBottom} fontSize="md" />
            </VStack>
          </Flex>
        </motion.nav>
        <Box
          h="100vh"
          w="100vw"
          overflow="hidden"
          whiteSpace="nowrap"
          pl={isOpen ? "1rem" : "5rem"}
          py="10">
          {children}
        </Box>
      </Flex>
    </>
  );
};
