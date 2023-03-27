import AboutContent from "./AboutContent";

import { Box } from "../../../common/chakraui/ChakraUI";
import React from "react";

export default React.memo(function AboutRoot() {
  return (
    <Box h="100vh" overflow="hidden">
      <AboutContent />
    </Box>
  );
});
