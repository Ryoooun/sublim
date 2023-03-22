"use client";
import NextLink from "next/link";
import { useState } from "react";
import { Flex, Link, Icon } from "../common/chakraui/ChakraUI";
import AppIcon from "../atoms/AppIcon";
import { useUserAgentStore } from "../store/userAgent";

export default function HomeMenu(params) {
  const [currentPage, setCurrentPage] = useState(null);
  const isPC = useUserAgentStore((state) => state.isPC);

  const handleLinkClick = (path) => {
    setCurrentPage(path);
  };

  const LinkMenu = () => {
    const menuContents = [
      { id: 0, title: "Home", path: "/" },
      { id: 1, title: "About", path: "/about" },
      { id: 2, title: "Test", path: "/test" },
    ];
    return (
      <>
        {menuContents.map((content) => (
          <Link
            _hover={{ textDecoration: "none", backgroundColor: "whatsapp.400" }}
            key={content.id}
            p="2"
            color="white"
            fontWeight="semibold"
            fontSize={["xl", "2xl"]}
            as={NextLink}
            href={content.path}
            onClick={() => handleLinkClick(content.path)}
            bg={currentPage === content.path && "whatsapp.400"}>
            {content.title}
          </Link>
        ))}
      </>
    );
  };

  return (
    <Flex pos="fixed" bg="whatsapp.500" w="100vw" h="12" zIndex="10">
      <Icon as={AppIcon} boxSize="200px" />
      <LinkMenu />
    </Flex>
  );
}
