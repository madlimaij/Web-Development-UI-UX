const theme = {
  colors: {
    white: "#FFFFFF",
    whiteOpacity: "rgba(255, 255, 255, 0.7)",
    black: "#333333",
    lightGray: "#F6F6F6",
    darkGray: "#4B5157",
    mediumGray: "#D7D7D7",
    darkGrayOpacity: "rgb(75, 81, 87, 0.7)"
  },
  borderRadius: {
    s: 4,
    m: 8,
    l: 16
  },
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
    "3xl": 48,
    "4xl": 64,
    "5xl": 128
  },
  font: {
    size: {
      "3xs": 12,
      xxs: 14,
      xs: 15,
      s: 16,
      m: 18,
      l: 24,
      xl: 36,
      xxl: 48
    },
    lineHeight: {
      s: 1.2,
      m: 1.4,
      l: 1.7
    },
    fontFamily: "Montserrat"
  },
  breakPoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    newsMaxWidth: "647px",
    maxWidth: "1311px",
    mobileMaxWidth: "408px"
  },
  media: {
    xs: "@media screen and (min-width: 396px)",
    sm: "@media screen and (min-width: 576px)",
    md: "@media screen and (min-width: 768px)",
    lg: "@media screen and (min-width: 992px)",
    xl: "@media screen and (min-width: 1200px)",
    xxl: "@media screen and (min-width: 1350px)",
    ie: "@media screen and (-ms-high-contrast: none)",
    ie_xl: "@media screen and (-ms-high-contrast: none) and (min-width: 1200px)"
  },
  boxShadow: {
    box: "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)"
  }
};

export default theme;
