"use client";
import NextLink from "next/link";
import { useState } from "react";
import { Flex, Box, Link } from "../common/chakraui/ChakraUI";
import { useUserAgentStore } from "../store/userAgent";

export default function HomeMenu(params) {
  const [currentPage, setCurrentPage] = useState(null);
  // const [isPcType, setIsPcType] = useState(true);
  // useEffect(() => {
  //   const mobileTypeList = ["iPhone", "iPod", "iPad", "Android"];
  //   const machineType = navigator.userAgent;
  //   const mobileTypeCheck = mobileTypeList.filter((item) => {
  //     return machineType.search(item) != -1;
  //   });

  //   if (mobileTypeCheck.length > 0) {
  //     setIsPcType(false);
  //   } else {
  //     setIsPcType(true);
  //   }
  // });
  const isPC = useUserAgentStore((state) => state.isPC);

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

  const Message = () => {
    if (isPC) {
      return <h1>pc</h1>;
    } else {
      return <h1>sm</h1>;
    }
  };

  return (
    <Flex pos="fixed" bg="whatsapp.500" w="100vw" h="12" zIndex="10">
      <LinkMenu />
      <Message />
    </Flex>
  );
}
