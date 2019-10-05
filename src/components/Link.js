import React from 'react';
import NextLink from 'next/link';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'default',
    textDecoration: props => (props.noDecoration ? 'none' : 'underline'),
    color: props => (props.color ? props.color : theme.palette.common.white),
    transition: theme.transitions.color,
    '&:hover': {
      color: props => (props.color ? props.color : theme.palette.primary.main),
    },
  },
}));

const Link = props => {
  const classes = useStyles(props);
  const { noDecoration, href, ...restProps } = props;
  return (
    <NextLink href={href}>
      <a className={classes.root} {...restProps} />
    </NextLink>
  );
};

export default Link;
