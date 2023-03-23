import { extendTheme } from "./common/chakraui/ChakraUI";

const config = {
  initialColorMode: "light",
  useSystemColorMode: "false",
};

const theme = extendTheme({ config });

export default theme;
