import { Text } from "../../common/chakraui/ChakraUI";

export default function DescriptionBanner({ children, props }) {
  const { bg = "gray.100", p = "2", fontSize = "md" } = { ...props };
  return (
    <Text bg={bg} w="full" p={p} textAlign="center" fontSize={fontSize}>
      {children}
    </Text>
  );
}
