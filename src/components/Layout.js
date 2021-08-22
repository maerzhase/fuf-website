import Footer from "./Footer";
import Meta from "./meta";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.gutter(),
    minHeight: props => props.minHeight ? '80vh' : 'none',
  },
}));
export default function Layout({ preview, children, ...rest }) {
  const classes = useStyles(rest);
  return (
    <>
      <Meta />
      <main className={classes.root}>{children}</main>
      <Footer />
    </>
  );
}
