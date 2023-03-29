"use client";

import {
  Flex,
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Link,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "../../../../common/chakraui/ChakraUI";
import { NextLink } from "next/link";

import { BsPlusSquare } from "@react-icons/all-files/bs/BsPlusSquare";
import { BsNewspaper } from "@react-icons/all-files/bs/BsNewspaper";
import { RiDoorOpenLine } from "@react-icons/all-files/ri/RiDoorOpenLine";
import { RiMailStarLine } from "@react-icons/all-files/ri/RiMailStarLine";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";

import DashBoardAvatar from "../atoms/DashBoardAvatar";
import { SideMenu } from "../organisms/SideMenu";

import { useLogout } from "../../../../hooks/useLogout";
import { useUserHook } from "@/app/hooks/useUser";

export default function Menu({ children }) {
  const user = useUserHook();
  const logout = useLogout();

  return (
    <>
      <SideMenu logout={logout} user={user}>
        {children}
      </SideMenu>
    </>
  );
}

// {user ? <DashBoardAvatar src={user.photoURL} /> : null}
//       {user ? (
//         <Heading fontSize={["lg", "lg", "lg", "2xl"]} ml="3">
//           {user?.userName}
//         </Heading>
//       ) : null}
