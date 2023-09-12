import { mode } from "@chakra-ui/theme-tools";
import a from "../../../public/asset/svg/bg.svg";

const styles = {
  global: {
    body: {
      color: mode("gray.800", "whiteAlpha.900"),
      lineHeight: "base",
    },
    section: {
      bg: a,
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400"),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300"),
      wordWrap: "break-word",
    },
  },
};
