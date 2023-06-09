import React from "react";
import { Button, Icon, useMediaQuery } from "../../common/chakraui/ChakraUI";

export default React.memo(function PrimaryButton({ title, icon, onClick }) {
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)", {
    ssr: true,
    fallback: false,
  });
  return (
    <Button
      onClick={onClick}
      bg="#2b698d66"
      color="whiteAlpha.700"
      p={1}
      minW={isLargerThen50em ? "20" : "10"}
      roundedTop="xl"
      roundedBottom="sm"
      _hover={{
        bg: "#2b698dea",
        color: "whiteAlpha.900",
        transition: "all 0.5s 0s",
      }}>
      {isLargerThen50em ? `${title}` : <Icon as={icon} boxSize="7" />}
    </Button>
  );
});
