import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import "../fonts.css";

const primaryButton = defineStyle({
  width: "237px",
  height: "48px",
  bgColor: "#3387B7",
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

export const buttonTheme = defineStyleConfig({
  variants: { primaryButton },
});

const semiHeading = defineStyle({
  color: "#FFF",
  height: "47px",
  fontSize: "30px",
  fontFamily: "Orbitron",
  fontWeight: "900",
  alignItems: "center",
});

export const semiHeadingTheme = defineStyleConfig({
  variants: { semiHeading },
});
