"use client";

import { useLogout } from "@/app/hooks/useLogout";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  SimpleGrid,
  useMediaQuery,
} from "../../common/chakraui/ChakraUI";
import { useUser } from "@/app/store/user";

export default function page(params) {
  const user = useUser((state) => state.user);
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");

  const LoginUser = () => {
    if (user) {
      return (
        <>
          <p>こんにちは!{`${user.displayName}`}さん</p>
          <p>{user.uid}</p>
        </>
      );
    } else {
      return <p>こんにちは!ゲストさん</p>;
    }
  };

  const TestFlowContent = () => {
    return (
      <>
        {Array(10)
          .fill(1)
          .map((index) => {
            return (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                error provident molestias molestiae fugit quae quam inventore
                omnis aspernatur repellendus dolorem soluta, quibusdam ea
                obcaecati veritatis corporis expedita a numquam?
              </p>
            );
          })}
      </>
    );
  };

  const TestBoxContent = () => {
    return (
      <>
        {Array(10)
          .fill(1)
          .map((_, index) => {
            return (
              <Card bg="blackAlpha.50" backdropFilter="auto" backdropBlur="2px">
                <CardHeader>
                  <h5>title{index}</h5>
                </CardHeader>
                <CardBody>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quibusdam, eum cum illum velit laboriosam deserunt incidunt
                    maiores sapiente accusamus similique numquam, corrupti
                    accusantium voluptates voluptatibus sint asperiores, cumque
                    officiis dignissimos.
                  </p>
                </CardBody>
              </Card>
            );
          })}
      </>
    );
  };

  return (
    <>
      <LoginUser />
      <TestFlowContent />

      <SimpleGrid
        minChildWidth={isLargerThen50em ? "20rem" : "full"}
        gridGap="5"
        overflowX="hidden"
        whiteSpace="nowrap">
        <TestBoxContent />
      </SimpleGrid>
    </>
  );
}
