import Footer from "./Footer";
import Meta from "./meta";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.gutter(),
  },
}));
export default function Layout({ preview, children }) {
  const classes = useStyles();
  return (
    <>
      <Meta />
      <main className={classes.root}>{children}</main>
      <Footer />
    </>
  );
}
