"use client";
import NextLink from "next/link";
import { Flex, Link, Icon, Box } from "../common/chakraui/ChakraUI";

import AppIcon from "../atoms/AppIcon";
import PrimaryButton from "../atoms/PrimaryButton";
import LinkMenu from "../organisms/LinkMenu";

import { RiLoginCircleLine } from "@react-icons/all-files/ri/RiLoginCircleLine";
import { AiOutlineUserAdd } from "@react-icons/all-files/ai/AiOutlineUserAdd";

import useAuthWithPopup from "../hooks/useAuthWithPopup";

export default function HomeMenu(params) {
  const [handleSignInWithPopup, isAuth] = useAuthWithPopup();

  return (
    <Flex pos="fixed" bg="brand.300" w="full" h="12" zIndex="10">
      <Link as={NextLink} href="/">
        <Icon as={AppIcon} boxSize="10" mt="1" mx="2" />
      </Link>
      <LinkMenu />
      <Box pos="absolute" right="2">
        <h1>{isAuth.toString()}</h1>
        <PrimaryButton
          title="Log in"
          colorScheme="telegram"
          icon={RiLoginCircleLine}
          onClick={() => handleSignInWithPopup()}
        />
        <PrimaryButton
          title="Sing up"
          colorScheme="telegram"
          icon={AiOutlineUserAdd}
          onClick={() => alert("sign up")}
        />
      </Box>
    </Flex>
  );
}
