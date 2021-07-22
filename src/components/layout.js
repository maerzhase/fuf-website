import Footer from './Footer'
import Meta from './meta'
import {makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
  },
}));
export default function Layout({ preview, children }) {
  const classes = useStyles();
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  )
}
