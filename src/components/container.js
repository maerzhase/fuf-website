import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.maxWidth(),
  },
}));
export default function Container({ children }) {
  const classes = useStyles();


  return <div className={classes.root}>{children}</div>
}
