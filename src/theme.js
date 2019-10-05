import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const muiTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff8c69',
    },
  },
  typography: {
    fontFamily: "'Oswald', sans-serif",
    h1: {
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 400,
    },
    h3: {
      fontWeight: 400,
    },
    h4: {
      color: muiTheme.palette.grey[500],
    },
    h6: {
      fontWeight: 400,
    },
  },
  sectionPadding: () => ({
    padding: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  }),
  teaserShadow: () => ({
    textShadow: '1px 1px 3px rgba(0,0,0,0.70)',
  }),
  transitions: {
    color: 'color ease-in-out 150ms',
  },
  overrides: {
    MuiTypography: {
      gutterBottom: {
        marginBottom: '0.6em',
      },
    },
  },
});

export default responsiveFontSizes(theme, { factor: 5 });
