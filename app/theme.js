import { extendTheme } from "./common/chakraui/ChakraUI";

const config = {
  initialColorMode: "system",
  useSystemColorMode: "true",
};

const theme = extendTheme({ config });

export default theme;
