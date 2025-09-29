import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const SANS = ["Commuters Sans"].reverse();
const SANS_HEADLINE = ["Trash"].reverse();

const WHITE = "#ffffff";
const PRIMARY = "#ff6e56";

const FONTWEIGHT_REGULAR = 400;
const FONTWEIGHT_MEDIUM = 500;
const FONTWEIGHT_BOLD = FONTWEIGHT_MEDIUM;

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: PRIMARY,
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
    common: {
      black: "#000000",
      white: WHITE,
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
      textTransform: "uppercase",
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
    subtitle1: {
      fontSize: 20,
    },
    subtitle2: {
      fontSize: 13,
    },
  },
  shape: {
    maxWidth: 1280,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          "&.MuiButton-textPrimary": {
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
        textPrimary: {
          color: WHITE,
          "&:hover": {
            color: PRIMARY,
          },
        },
        textSizeSmall: {
          fontSize: 12,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "28px !important",
          textTransform: "none",
          lineHeight: 1,
        },
        textColorInherit: {
          opacity: 1,
        },
      },
    },
    PrivateTabIndicator: {
      styleOverrides: {
        root: {
          top: 1,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: 30,
        },
        fontSizeLarge: {
          fontSize: 70,
        },
      },
    },
  },
});

theme.mixins = {
  maxWidth: () => ({
    maxWidth: theme.shape.maxWidth,
    margin: "auto",
  }),
  gutter: () => ({
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 1),
    },
    padding: theme.spacing(0, 2),
  }),
};

export default responsiveFontSizes(theme, { factor: 4 });
