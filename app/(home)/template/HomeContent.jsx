import {
  Heading,
  Box,
  Flex,
  Button,
  Text,
  Center,
  VStack,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Stack,
  Divider,
  Icon,
  Link,
} from "../../common/chakraui/ChakraUI";
import HeroLogo from "../organisms/HeroLogo";
import DescriptionBanner from "../organisms/DescriptionBanner";
import HomeStackCard from "./HomeStackCard";
import AboutLink from "../organisms/AboutLink";

import NextLink from "next/link";

export default function HomeContent() {
  return (
    <>
      <HeroLogo logo="SUBLIM" />
      <VStack gap="10">
        <DescriptionBanner props={{ fontSize: ["md", "2xl"] }}>
          <span>「知っている」ことを、知っていますか？</span>
          <br />
          Sublimはあなたの学習や知識吸収をサポートする環境を提供します。
        </DescriptionBanner>
        <Box>
          <Button colorScheme="whatsapp">学習を始める</Button>
        </Box>
        <HomeStackCard />
        <AboutLink />
      </VStack>
    </>
  );
}
