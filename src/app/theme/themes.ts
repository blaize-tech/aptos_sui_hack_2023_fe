import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import "../fonts.css";

const primaryButton = defineStyle({
  width: "237px",
  height: "48px",
  bg: "#3387B7",
  borderRadius: "8px",
  fontWeight: " 900",
  color: "#F5FAFF",
  padding: 0,
  fontFamily: "Orbitron",
  fontSize: "14px",
  textTransform: "uppercase",
  letterSpacing: "10%",
  lineHeight: "24.08px",
});

const ListHeadingText = defineStyle({
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "10px",
  lineHeight: "15px",
  color: "#777D99",
});

const ListText = defineStyle({
  fontFamily: "Poppins",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "21px",
  color: "#777D99",
});

export const buttonTheme = defineStyleConfig({
  variants: { primaryButton },
});

export const textConfig = defineStyleConfig({
  variants: { ListHeadingText, ListText },
});
