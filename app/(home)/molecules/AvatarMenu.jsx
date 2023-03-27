"use client";

import NextLink from "next/link";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
} from "../../common/chakraui/ChakraUI";
import React from "react";

export default React.memo(function AvatarMenu({ name, src }) {
  return (
    <Menu>
      <MenuButton>
        <Avatar mt="1" size="md" name={name} src={src} />
      </MenuButton>
      <MenuList>
        <MenuItem fontSize="xl">
          <Link as={NextLink} href="/user" _hover={{ textDecoration: "none" }}>
            {name}のトップページ
          </Link>
        </MenuItem>
        <MenuItem>
          <Link as={NextLink} href="/user" _hover={{ textDecoration: "none" }}>
            設定
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
});
