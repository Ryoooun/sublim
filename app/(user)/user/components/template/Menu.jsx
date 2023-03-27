"use client";

import {
  Flex,
  Heading,
  Text,
  Image,
  Button,
} from "../../../../common/chakraui/ChakraUI";
import { BsPlusSquare } from "@react-icons/all-files/bs/BsPlusSquare";
import { BsNewspaper } from "@react-icons/all-files/bs/BsNewspaper";
import { RiDoorOpenLine } from "@react-icons/all-files/ri/RiDoorOpenLine";
import { RiMailStarLine } from "@react-icons/all-files/ri/RiMailStarLine";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";

import DashBoardAvatar from "../atoms/DashBoardAvatar";

import { useLogout } from "@/app/hooks/useLogout";
import { useUser } from "@/app/hooks/useUser";

export default function Menu() {
  const user = useUser();
  const logout = useLogout();

  return (
    <>
      <Flex w="20%" direction="column" align="center">
        <Flex direction="column" justify="space-between">
          <Flex mt="50" mb="100">
            <DashBoardAvatar src={user.photoURL || null} />
            <Heading ml="3" fontWeight="800" fontSize="xl" alignSelf="center">
              {user.userName || null}
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
              <Button ml={3} fontSize="md" onClick={logout}>
                Log out
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
