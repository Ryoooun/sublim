import { extendTheme } from "./common/chakraui/ChakraUI";

const config = {
  initialColorMode: 'system',
  useSystemColorMode: 'false',
}

const theme = extendTheme({ config })

export default theme
