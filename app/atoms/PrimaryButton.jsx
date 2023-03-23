import { color } from "framer-motion";
import { Button, Icon } from "../common/chakraui/ChakraUI";
import { useMediaQuery } from "../common/chakraui/ChakraUI";

export default function PrimaryButton({ title, colorScheme, icon }) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)", {
    ssr: true,
    fallback: false,
  });
  return (
    <Button colorScheme={colorScheme} mt="1" mx="0.5">
      {isLargerThen50em ? `${title}` : <Icon as={icon} boxSize="7" />}
    </Button>
  );
}
