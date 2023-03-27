import { Box, Text } from "../../../common/chakraui/ChakraUI";

export default function SideMenu({ refs }) {
  const scrollToHeading = (r) => {
    r.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  return (
    <Box w="25vw" h="100vh" shadow="base">
      <Text
        fontSize={["sm", "md", "lg", "xl"]}
        p="2"
        bg="gray.100"
        onClick={() => scrollToHeading(refs.top)}>
        SUBLIMについて
      </Text>
      <Text p="2" bg="gray.100" onClick={() => scrollToHeading(refs.h2)}>
        学習を学習する
      </Text>
      <Text p="2" bg="gray.100" onClick={() => scrollToHeading(refs.h3)}>
        SUBLIMの卒業
      </Text>
    </Box>
  );
}
