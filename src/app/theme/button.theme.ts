import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import "../fonts.css";

const primaryButton = defineStyle({
  width: "237px",
  height: "48px",
  background: "#3387B7",
  borderRadius: "8px",
  fontWeight: 900,
  color: "#F5FAFF",
  padding: 0,
  fontFamily: "Orbitron",
  fontSize: "14px",
  textTransform: "uppercase",
});

export const buttonTheme = defineStyleConfig({
  variants: { primaryButton },
});
