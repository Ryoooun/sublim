import AboutContent from "./AboutContent";
import SideMenu from "./SideMenu";
import { Box } from "../../../common/chakraui/ChakraUI";

export default function AboutRoot() {
  return (
    <Box h="100vh" overflow="hidden">
      <AboutContent />
    </Box>
  );
}
