import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    padding: props => !props.noPadding && theme.spacing(8),
    textAlign: props => (props.centered ? 'center' : 'left'),
    minHeight: props => props.minHeight && '800px',
    [theme.breakpoints.down('md')]: {
      padding: props => !props.noPadding && theme.spacing(2),
      minHeight: props => props.minHeight && '700px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: props => !props.noPadding && theme.spacing(2),
      minHeight: props => props.minHeight && '600px',
    },
    marginBottom: props => !props.noMargin && theme.spacing(4),
  },
}));

const Section = props => {
  const classes = useStyles(props);
  const { centered, minHeight, noPadding, ...restProps } = props;
  return <section className={classes.root} {...restProps} />;
};

export default Section;
