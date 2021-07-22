import React from 'react';
import PropTypes from 'prop-types';
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

export const Anchor = props => {
  const classes = useStyles(props);
  const { noDecoration, ...restProps } = props;
  return <a className={classes.root} {...restProps} />;
};

Anchor.propTypes = {
  noDecoration: PropTypes.bool,
  href: PropTypes.string.isRequired,
};

Anchor.defaultProps = {
  noDecoration: false,
};

const Link = props => {
  const classes = useStyles(props);
  const { noDecoration, href, as, scroll, ...restProps } = props;
  return (
    <NextLink href={href} as={as} scroll={scroll}>
      <a className={classes.root} {...restProps} />
    </NextLink>
  );
};

Link.propTypes = {
  noDecoration: PropTypes.bool,
  href: PropTypes.string.isRequired,
};

Link.defaultProps = {
  noDecoration: false,
};

export default Link;
