import NextLink from "next/link";
import { Flex, Link, Icon, Box } from "../../common/chakraui/ChakraUI";

import AppIcon from "../atoms/AppIcon";
import LinkMenu from "../organisms/LinkMenu";
import HeaderLoginContent from "../organisms/HeaderLoginContent";

export default function HomeMenu({ currentPage, handleLinkClick }) {
  return (
    <Flex
      pos="fixed"
      shadow="md"
      w="full"
      h="10"
      zIndex="10"
      backdropFilter="auto"
      backdropBlur="1px">
      <Box
        bg="blackAlpha.800"
        w="full"
        pos="fixed"
        h="20"
        top="-20"
        filter="auto"
        blur="20px"></Box>
      <Link as={NextLink} href="/">
        <Icon as={AppIcon} boxSize="8" my="1" mx="3" />
      </Link>
      <LinkMenu currentPage={currentPage} handleLinkClick={handleLinkClick} />
      <Flex pos="absolute" right="2" gap="2" alignItems="center">
        <HeaderLoginContent />
      </Flex>
    </Flex>
  );
}
