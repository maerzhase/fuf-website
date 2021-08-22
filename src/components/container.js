import { makeStyles } from "@material-ui/core/styles";
import cx from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.maxWidth(),
  },
}));
export default function Container({ children, className }) {
  const classes = useStyles();

  return <div className={cx(classes.root, className)}>{children}</div>;
}
