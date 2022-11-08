import theme from "./index";

const baseStyles = {
  "@global": {
    "*, ::after, ::before": {
      boxSizing: "border-box"
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: [theme.font.fontFamily, "sans-serif"],
      fontSize: theme.font.size.xs,
      fontStyle: "normal",
      fontWeight: 400,
      color: theme.colors.black,
      lineHeight: theme.font.lineHeight.s,
      fontFeatureSettings: "'pnum' on, 'lnum' on"
    },
    "html, body": {
      height: "100%",
      overflowX: "hidden"
    },
    a: {
      textDecoration: "none",
      color: theme.colors.black,
      cursor: "pointer"
    },
    p: {
      fontSize: theme.font.size.xs,
      fontWeight: 400
    },
    h1: {
      fontSize: theme.font.size.xxl,
      fontWeight: 500,
      margin: 0,
      marginBottom: theme.spacing.l
    },
    h2: {
      fontSize: theme.font.size.xl,
      fontWeight: 500,
      margin: 0,
      marginBottom: theme.spacing.l
    },
    h3: {
      fontSize: theme.font.size.l,
      fontWeight: 500,
      margin: 0,
      marginBottom: theme.spacing.l
    },
    h4: {
      fontSize: theme.font.size.m,
      fontWeight: 500,
      margin: 0,
      marginBottom: theme.spacing.l
    },
    h5: {
      fontSize: theme.font.size.s,
      fontWeight: 500,
      margin: 0,
      marginBottom: theme.spacing.l
    },
    h6: {
      fontSize: theme.font.size.xs,
      fontWeight: 500,
      margin: 0,
      marginBottom: theme.spacing.l
    },
    ul: {
      listStyle: "none",
      padding: 0
    },
    "button, input, textarea": {
      fontFamily: [theme.font.fontFamily, "sans-serif"]
    },
    "input[type=number]": {
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0
      },
      "-moz-appearance": "textfield"
    }
  }
};

export default baseStyles;
