"use client";
import React from "react";

import NextLink from "next/link";
import { Heading, Icon, Link } from "../../../../common/chakraui/ChakraUI";

import { MdModeEdit } from "@react-icons/all-files/md/MdModeEdit";
import { RiHome2Fill } from "@react-icons/all-files/ri/RiHome2Fill";
import { RiMapLine } from "@react-icons/all-files/ri/RiMapLine";
import { RiSearchLine } from "@react-icons/all-files/ri/RiSearchLine";

export default React.memo(function LinkList({
  fontSize = "2xl",
  user,
  toggleOpen,
}) {
  const linksTop = [
    {
      id: 0,
      title: "Dashboard",
      path: `/user/${user?.uid}`,
      icon: RiHome2Fill,
      prefetch: true,
    },
    {
      id: 1,
      title: "Trend",
      path: `/user/${user?.uid}/trend`,
      icon: RiSearchLine,
      prefetch: true,
    },
    {
      id: 2,
      title: "Words",
      path: `/user/${user?.uid}/words`,
      icon: MdModeEdit,
      prefetch: false,
    },
    {
      id: 3,
      title: "Map",
      path: `/user/${user?.uid}/map`,
      icon: RiMapLine,
      prefetch: false,
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
            prefetch={linksTop.prefetch}
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
});
