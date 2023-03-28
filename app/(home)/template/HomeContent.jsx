"use client";
import { Box, Button, VStack } from "../../common/chakraui/ChakraUI";
import HeroLogo from "../organisms/HeroLogo";
import DescriptionBanner from "../organisms/DescriptionBanner";
import HomeStackCard from "./HomeStackCard";
import AboutLink from "../organisms/AboutLink";
import useAuthWithPopup from "@/app/hooks/useAuthWithPopup";

export default function HomeContent() {
  const handleSignWithPopup = useAuthWithPopup();
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
          <Button
            bg="brand.400"
            color="brand.900"
            _hover={{ bg: "brand.200", color: "brand.500" }}
            onClick={handleSignWithPopup}>
            学習を始める
          </Button>
        </Box>
        <HomeStackCard />
        <AboutLink />
      </VStack>
    </>
  );
}
