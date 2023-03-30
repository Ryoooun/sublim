"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Icon, Link, Heading } from "../../../../common/chakraui/ChakraUI";
import NextLink from "next/link";

import { RiHome2Fill } from "@react-icons/all-files/ri/RiHome2Fill";
import { RiSearchLine } from "@react-icons/all-files/ri/RiSearchLine";
import { MdModeEdit } from "@react-icons/all-files/md/MdModeEdit";
import { RiMapLine } from "@react-icons/all-files/ri/RiMapLine";

export default function LinkList({ fontSize = "2xl", user, toggleOpen }) {
  const linksTop = [
    {
      id: 0,
      title: "Dashboard",
      path: `/user/${user?.uid}`,
      icon: RiHome2Fill,
    },
    {
      id: 1,
      title: "Trend",
      path: `/user/${user?.uid}/trend`,
      icon: RiSearchLine,
    },
    {
      id: 2,
      title: "Words",
      path: `/user/${user?.uid}/words`,
      icon: MdModeEdit,
    },
    {
      id: 3,
      title: "Map",
      path: `/user/${user?.uid}/map`,
      icon: RiMapLine,
    },
  ];

  const linksBottom = [
    {
      id: 0,
      title: "How to use",
      path: "/user/usage",
    },
    {
      id: 1,
      title: "このアプリについて",
      path: "/user/about",
    },
  ];
  return (
    <>
      {linksTop.map((list) => {
        return (
          <Link
            onClick={toggleOpen}
            color="#c4c4c4"
            display="flex"
            alignItems="center"
            key={list.id}
            as={NextLink}
            href={list.path}
            _hover={{ color: "brand.500" }}>
            {list.icon ? <Icon as={list.icon} boxSize="6" /> : null}
            <Heading fontSize={fontSize} p="2">
              {list.title}
            </Heading>
          </Link>
        );
      })}
    </>
  );
}
