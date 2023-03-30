"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useSideMenuIsOpen } from "@/app/store/sidemenuIsOpen";
import { usePathname } from "next/navigation";
import "./scroll.css";
import {
  Button,
  Box,
  Heading,
  Flex,
  Center,
  VStack,
  Divider,
  useMediaQuery,
  useOutsideClick,
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

export const SideMenu = ({ logout, user, children }) => {
  const linksTop = [
    {
      id: 0,
      title: "Dashboard",
      path: `/user/${user?.uid}`,
      icon: RiHome2Fill,
    },
    {
      id: 1,
      title: "Trend",
      path: `/user/${user?.uid}/trend`,
      icon: RiSearchLine,
    },
    {
      id: 2,
      title: "Words",
      path: `/user/${user?.uid}/words`,
      icon: MdModeEdit,
    },
    {
      id: 3,
      title: "Map",
      path: `/user/${user?.uid}/map`,
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
  const isOpen = useSideMenuIsOpen((state) => state.isOpen);
  const toggleOpen = useSideMenuIsOpen((state) => state.toggleOpen);

  // const [isOpen, setIsOpen] = useState(true);
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");
  // const toggle = () => {
  //   setIsOpen((isOpen) => !isOpen);
  // };

  const Page = ({ children }) => {
    if (isLargerThen50em) {
      return (
        <Box
          className="scrollbar"
          m={isLargerThen50em ? "5" : "0"}
          h={isLargerThen50em ? "95vh" : "100vh"}
          w="100vw"
          overflowX="hidden"
          overflowY="scroll"
          bg="white"
          boxSizing="border-box"
          borderRadius={isLargerThen50em ? "1rem" : "0"}
          boxShadow="2xl"
          py="5"
          sx={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
          {children}
        </Box>
      );
    } else {
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
    }
  };

  return (
    <>
      <HamburgerIcon
        isOpen={isOpen}
        toggle={toggleOpen}
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
            textOverflow: "ellipsis",
            margin: "0",
            padding: "0",
          }}>
          <Flex direction="column" justifyContent="flex-end" p="2">
            {user ? <DashBoardAvatar src={user?.photoURL} /> : null}
            <VStack display="flex" alignItems="flex-start" direction="column">
              {isLargerThen50em && (
                <Heading color="blackAlpha.700" fontSize="2xl" p="2">
                  {user?.userName !== undefined
                    ? `${user?.userName.slice(0, 17)}`
                    : "Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Martyr Patricio Clito Ruíz y Picasso".slice(
                        0,
                        17
                      )}
                </Heading>
              )}
              <Divider mt="2" />
              <LinkList
                lists={linksTop}
                fontSize={isLargerThen50em ? "2xl" : "md"}
              />
              <Divider mt="2" />
              <Button
                mt="2"
                w="10rem"
                fontSize={isLargerThen50em ? "xl" : "md"}
                leftIcon={<RiLogoutBoxLine />}
                onClick={logout}
                bg="brand.100"
                color="gray.500"
                _hover={{ bg: "brand.600", color: "white" }}>
                Logout
              </Button>
              <LinkList
                lists={linksBottom}
                fontSize={isLargerThen50em ? "md" : "sm"}
              />
            </VStack>
          </Flex>
        </motion.nav>
        <Page>{children}</Page>
      </Flex>
    </>
  );
};
