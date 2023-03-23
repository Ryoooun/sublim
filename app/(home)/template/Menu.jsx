"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import {
  Link,
  Flex,
  Box,
  Spacer,
  Button,
  ButtonGroup,
  Heading,
  textDecoration,
  Text,
  Image,
} from "../../common/chakraui/ChakraUI";
import { BsPlusSquare } from "@react-icons/all-files/bs/BsPlusSquare";
import { BsNewspaper } from "@react-icons/all-files/bs/BsNewspaper";
import { RiDoorOpenLine } from "@react-icons/all-files/ri/RiDoorOpenLine";
import { RiMailStarLine } from "@react-icons/all-files/ri/RiMailStarLine";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";

export default function Menu() {
  const [isPcType, setIsPcType] = useState(true);
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
  return (
    <>
      <Flex w="20%" direction="column" align="center">
        <Flex direction="column" justify="space-between">
          <Flex mt="50" mb="100">
            <Image
              borderRadius="full"
              boxSize="60px"
              fallbackSrc="https://via.placeholder.com/150"
              alt="application icon"
            />
            <Heading ml="3" fontWeight="800" fontSize="xl" alignSelf="center">
              My App
            </Heading>
          </Flex>
          <Flex h="65vh" direction="column" justify="space-between">
            <Flex
              h="20vh"
              mb="32"
              direction="column"
              align="flex-start"
              justify="space-around">
              <Flex
                fontSize="xl"
                color="gray"
                align="center"
                fontWeight="800"
                bg="pink.50"
                p="3"
                m="-3"
                rounded="full">
                <CgProfile color="pink" />
                <Text ml="3">Home</Text>
              </Flex>

              <Flex fontSize="xl" color="gray" align="center">
                <BsNewspaper color="#63B3ED" />
                <Text ml="3">About</Text>
              </Flex>
              <Flex fontSize="xl" color="gray" align="center">
                <RiMailStarLine color="#ECC94B" />
                <Text ml="3">Employee</Text>
              </Flex>
            </Flex>
            <Flex fontSize="2xl" mb={30} color="gray" align="center">
              <RiDoorOpenLine />
              <Text ml={3} fontSize="md">
                Log out
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
