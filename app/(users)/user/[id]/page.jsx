"use client";

import { useLogout } from "@/app/hooks/useLogout";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Divider,
  useMediaQuery,
  Box,
} from "../../../common/chakraui/ChakraUI";
import { useUserHook } from "@/app/hooks/useUser";

export default function page(params) {
  const user = useUserHook();
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");

  const LoginUser = () => {
    if (user) {
      return (
        <>
          <p>{`${user.userName}`}'s Dashboard</p>
        </>
      );
    } else {
      return <p>こんにちは!ゲストさん</p>;
    }
  };

  return (
    <>
      <LoginUser />
      <Card>
        <CardHeader>
          <Heading>Dashboard</Heading>
          <Divider w="full" />
        </CardHeader>
        <CardBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            distinctio sequi tempora! Distinctio exercitationem, explicabo animi
            expedita debitis modi repudiandae dicta similique praesentium
            doloremque mollitia repellendus amet officiis laboriosam sit.
          </p>
        </CardBody>
      </Card>
    </>
  );
}
