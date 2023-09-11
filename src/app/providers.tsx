// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { buttonTheme, tableHead, tableDtext } from "./theme/themes";

export const theme = extendTheme({
  components: {
    Button: buttonTheme,
    Text: {
      variants: {
        tableHead: {
          fontFamily: "Poppins",
          fontWeight: "700",
          fontSize: "10px",
          lineHeight: "15px",
          color: "#777D99",
          opacity: "100%",
        },
        tableText: {
          fontFamily: "Poppins",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "21px",
          color: "#777D99",
        },
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
