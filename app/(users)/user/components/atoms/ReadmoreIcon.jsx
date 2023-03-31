import Lottie, { useLottie, useLottieInteractivity } from "lottie-react";
import icon from "../../../../../public/lottie/rocket-line.json";
import { Flex, Box, Heading, Link } from "@/app/common/chakraui/ChakraUI";
import { NextLink } from "next/link";

const View = () => {
  return <Lottie animationData={icon} />;
};

export default function ReadmoreIcon({ user }) {
  return (
    <>
      <View />
    </>
  );
}
