import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const SANS = ["Commuters Sans", "system-ui", "sans-serif"];
const SANS_HEADLINE = ["Trash", "system-ui", "sans-serif"];

const WHITE = "#ffffff";
const SALMON = "#ff6e56";

const FONTWEIGHT_REGULAR = 400;
const FONTWEIGHT_MEDIUM = 500;
const FONTWEIGHT_BOLD = FONTWEIGHT_MEDIUM;

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: SALMON,
      contrastText: WHITE,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    text: {
      secondary: "#6a6a6a",
    },
  },
  typography: {
    sans: SANS,
    sansHeadline: SANS_HEADLINE,
    fontFamily: SANS,
    fontWeightRegular: FONTWEIGHT_REGULAR,
    fontWeightMedium: FONTWEIGHT_MEDIUM,
    fontWeightBold: FONTWEIGHT_BOLD,
    h1: {
      fontSize: 140,
      textTransform: "uppercase",
      fontFamily: SANS_HEADLINE,
    },
    h2: {
      fontSize: 90,
      textTransform: "uppercase",
      fontFamily: SANS_HEADLINE,
    },
    h3: {
      fontSize: 50,
      textTransform: "uppercase",
    },
    h4: {
      fontSize: 35,
    },
    h5: {
      fontSize: 28,
    },
    h6: {
      fontSize: 20,
      fontWeight: FONTWEIGHT_REGULAR,
    },
    body1: {
      fontSize: 15,
    },
    body2: {
      fontSize: 13,
    },
    button: {
      fontSize: 20,
      fontWeight: FONTWEIGHT_REGULAR,
    },
    subtitle2: {
      fontSize: 13,
    },
  },
  shape: {
    maxWidth: 1280,
  },
});

theme.mixins = {
  maxWidth: () => ({
    maxWidth: theme.shape.maxWidth,
    margin: "auto",
  }),
  gutter: () => ({
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 1),
    },
    padding: theme.spacing(0, 2),
  }),
};

theme.overrides = {
  MuiButton: {
    root: {
      // fontSize: 20,
      textTransform: "none",
    },
  },
  MuiTab: {
    root: {
      fontSize: '28px !important',
      textTransform: "none",
      lineHeight: 1,
    },
    textColorInherit: {
      opacity: 1, 
    },
  },
  PrivateTabIndicator: {
    root: {
      top: 1,
    },
  },
};

export default responsiveFontSizes(theme, { factor: 4 });
