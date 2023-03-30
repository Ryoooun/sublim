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

const isLargerThen50remVariants = {
  open: {
    opacity: 1,
    x: 0,
    y: "9%",
    width: "350px",
    height: "90vh",
    boxShadow: "0px 0px  rgba(0, 0, 0, 0.16)",
    backgroundColor: "#3fcb72",
    borderRadius: "1rem",
  },
  closed: {
    opacity: 1,
    x: "5%",
    y: "90%",
    width: "68px",
    height: "65px",
    borderRadius: "50%",
    backgroundColor: "#3fcb72",
    color: "rgba(0,0,0,0)",
  },
};

const isSmallerThen50remVariants = {
  open: {
    opacity: 1,
    x: 0,
    y: "7%",
    width: "20rem",
    height: "90vh",
    boxShadow: "0px 0px  rgba(0, 0, 0, 0.16)",
    backgroundColor: "#3fcb72",
    borderRadius: "1rem",
  },
  closed: {
    opacity: 1,
    x: "12%",
    y: "120%",
    width: "0",
    height: "0",
    backgroundColor: "#fff",
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
    title: "Map",
    path: "/user/map",
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
      <HamburgerIcon
        isOpen={isOpen}
        toggle={toggle}
        isLargerThen50rem={isLargerThen50em}
      />
      <Flex>
        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={
            isLargerThen50em
              ? isLargerThen50remVariants
              : isSmallerThen50remVariants
          }
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
          overflowX="hidden"
          overflowY="scroll"
          pl={
            isOpen
              ? isLargerThen50em // isOpen == true && isLarger ?
                ? "2rem"
                : "1rem"
              : isLargerThen50em // isOpen == false && isLarger ?
              ? "2rem"
              : "0"
          }
          py="10">
          {children}
        </Box>
      </Flex>
    </>
  );
};
