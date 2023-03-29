"use client";
import Menu from "./user/components/template/Menu";
import { Box } from "../common/chakraui/ChakraUI";

export default function UserLayout({ children }) {
  return (
    <>
      <Menu>{children}</Menu>
    </>
  );
}
