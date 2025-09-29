import makeStyles from "@mui/styles/makeStyles";
import MuiCssBaseline from "@/theme/CssBaseline";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      overflowX: "hidden",
      // touchAction: 'none',
      // '-ms-touch-action': 'none',
      // position: 'relative',
    },
    html: {
      // overflowX: 'hidden',
      //  position: 'relative',
      // touchAction: 'none',
      // '-ms-touch-action': 'none',
    },
  },
}));

export default function CssBaseline() {
  const classes = useStyles();
  return (
    <>
      <MuiCssBaseline />
    </>
  );
}
