"use client";
import NextLink from "next/link";
import React from "react";
import {
  Avatar,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "../../common/chakraui/ChakraUI";

export default React.memo(function AvatarMenu({ name, src, logout }) {
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
        <MenuItem onClick={logout}>ログアウト</MenuItem>
      </MenuList>
    </Menu>
  );
});
