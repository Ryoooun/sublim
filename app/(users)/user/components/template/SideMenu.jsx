"use client";
import { useSideMenuIsOpen } from "@/app/store/sidemenuIsOpen";

import { RiLogoutBoxLine } from "@react-icons/all-files/ri/RiLogoutBoxLine";
import {
  Button,
  Divider,
  Flex,
  VStack,
} from "../../../../common/chakraui/ChakraUI";

import DashBoardAvatar from "../atoms/DashBoardAvatar";
import HamburgerIcon from "../atoms/HamburgerIcon";
import LinkList from "../molecules/LinkList";
import UserNameHeading from "../molecules/UserNameHeading";
import PageWrapper from "../organisms/PageWrapper";
import SideMenuWrapper from "../organisms/SideMenuWrapper";

import { useCallback } from "react";

export const SideMenu = ({ logout, user, isLargerThen50em, children }) => {
  const isOpen = useSideMenuIsOpen((state) => state.isOpen);
  const toggleOpen = useCallback(
    useSideMenuIsOpen((state) => state.toggleOpen),
    []
  );
  return (
    <>
      <HamburgerIcon
        isOpen={isOpen}
        toggle={toggleOpen}
        isLargerThen50em={isLargerThen50em}
      />
      <Flex>
        <SideMenuWrapper isOpen={isOpen} isLargerThen50em={isLargerThen50em}>
          <Flex direction="column" justifyContent="flex-end" p="2">
            {user ? <DashBoardAvatar src={user?.photoURL} /> : null}
            <VStack display="flex" alignItems="flex-start" direction="column">
              <UserNameHeading
                isLargerThen50em={isLargerThen50em}
                user={user}
              />
              <Divider mt="2" />
              <LinkList
                fontSize={isLargerThen50em ? "2xl" : "md"}
                user={user}
                toggleOpen={toggleOpen}
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
            </VStack>
          </Flex>
        </SideMenuWrapper>
        <PageWrapper isLargerThen50em={isLargerThen50em} isOpen={isOpen}>
          {children}
        </PageWrapper>
      </Flex>
    </>
  );
};
