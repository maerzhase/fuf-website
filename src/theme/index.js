import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const SANS = ['Trash', 'system-ui', 'sans-serif'];

const FONTWEIGHT_REGULAR = 400;
const FONTWEIGHT_MEDIUM = 500;
const FONTWEIGHT_BOLD = FONTWEIGHT_MEDIUM;

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      secondary: '#6a6a6a',
    }
  },
  typography: {
    sans: SANS,
    fontFamily: SANS,
    fontWeightRegular: FONTWEIGHT_REGULAR,
    fontWeightMedium: FONTWEIGHT_MEDIUM,
    fontWeightBold: FONTWEIGHT_BOLD,
    h1: {
      fontSize: 110,
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: 75,
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: 35,
      textTransform: 'uppercase',
    },
    h4: {
      fontSize: 25,
    },
    h6: {
      fontSize: 20,
    },
    body1: {
      fontSize: 15,
    },
    body2: {
      fontSize: 13,
    },
    button: {
      fontSize: 20,
    }
  },
});

theme.overrides = {
  MuiButton: {
    root: {
      // fontSize: 20,
      textTransform: 'none',
    }
  },
  MuiTab: {
    root: {
      // fontSize: 20,
      textTransform: 'none',
      lineHeight: 1,
    }
  },
 PrivateTabIndicator: {
   root: {
     top: 1,
   },
 },
}

export default theme;