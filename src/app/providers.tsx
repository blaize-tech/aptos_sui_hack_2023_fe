// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import { buttonTheme, textConfig } from "./theme/themes";

export const theme = extendTheme({
  components: {
    Button: buttonTheme,
    Text: textConfig,
  },
  styles: {
    global: {
      "html, body": {
        bgColor: "#0c1229",
      },
      section: {
        bgImage: "url('../../public/asset/svg/bg.svg')",
        bgPosition: "center",
        bgRepeat: "no-repeat",
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
