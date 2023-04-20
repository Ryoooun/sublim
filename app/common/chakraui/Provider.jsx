"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      50: "#f3fcf6",
      100: "#d8f4e2",
      200: "#baeccc",
      300: "#98e3b3",
      400: "#70d896",
      500: "#3fcb72",
      600: "#1fb757",
      700: "#1b9d4a",
      800: "#157c3b",
      900: "#0c4923",
    },
  },
});

export default function ({ children }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
}
