import AboutContent from "./AboutContent";

import React from "react";
import { Box } from "../../../common/chakraui/ChakraUI";

export default React.memo(function AboutRoot() {
  return (
    <Box h="100vh" overflow="hidden">
      <AboutContent />
    </Box>
  );
});
