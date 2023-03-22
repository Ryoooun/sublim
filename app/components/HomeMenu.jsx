"use client";
import NextLink from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Flex, Box, Link } from "../common/chakraui/ChakraUI";

export default function HomeMenu(params) {
  const [isPcType, setIsPcType] = useState(true);
  const [currentPage, setCurrentPage] = useState(null);
  useEffect(() => {
    const mobileTypeList = ["iPhone", "iPod", "iPad", "Android"];
    const machineType = navigator.userAgent;
    const mobileTypeCheck = mobileTypeList.filter((item) => {
      return machineType.search(item) != -1;
    });

    if (mobileTypeCheck.length > 0) {
      setIsPcType(false);
    } else {
      setIsPcType(true);
    }
  });

  const handleLinkClick = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    setCurrentPage(location.pathname); //Homeのボタンから遷移した場合は更新されない。
  }, []);
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
      <LinkMenu />
      <h1>これは{isPcType ? "PC" : "Mobile"}</h1>
    </Flex>
  );
}
