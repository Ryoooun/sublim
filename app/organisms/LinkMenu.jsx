import {
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Box,
} from "../common/chakraui/ChakraUI";
import NextLink from "next/link";

import { useState } from "react";
import { useMediaQuery } from "../common/chakraui/ChakraUI";

import { HiMenu } from "@react-icons/all-files/hi/HiMenu";

export default function LinkMenu() {
  const [currentPage, setCurrentPage] = useState(null);
  const handleLinkClick = (path) => {
    setCurrentPage(path);
  };
  const menuContents = [
    { id: 0, title: "Home", path: "/" },
    { id: 1, title: "About", path: "/about" },
    { id: 2, title: "Test", path: "/test" },
  ];

  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");

  if (isLargerThen50em) {
    return (
      <>
        {menuContents.map((content, count) => (
          <Link
            _hover={{
              textDecoration: "none",
              backgroundColor: "brand.500",
              color: "white",
            }}
            key={content.id}
            py="1"
            px="5"
            ml="-0.5"
            color={currentPage === content.path && "brand.800"}
            fontWeight="thin"
            fontSize={["xl", "2xl"]}
            as={NextLink}
            href={content.path}
            onClick={() => handleLinkClick(content.path)}
            bg={currentPage === content.path && "brand.500"}
            roundedRight="2xl"
            roundedLeft="lg"
            boxShadow="lg"
            zIndex={count}>
            {content.title}
          </Link>
        ))}
      </>
    );
  } else {
    return (
      <Menu>
        <MenuButton>
          <Icon as={HiMenu} boxSize="8" mt="1" color="blackAlpha.600" />
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link as={NextLink} href="/about">
              Sublimについて
            </Link>
          </MenuItem>
          <MenuItem>
            <Link as={NextLink} href="/test">
              Test
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }
}
