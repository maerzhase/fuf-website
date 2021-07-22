import React from 'react';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Router from 'next/router';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      overflow: props => (props.isOpen ? 'hidden' : null),
    },
  },
  root: {
    position: 'fixed',
    top: 0,
    background: theme.palette.common.black,
    padding: theme.spacing(4),
    overflow: 'auto',
    height: '100vh',
    '-webkit-overflow-scrolling': 'touch',
  },
  closeBtn: {
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(2),
  },
}));

const Overlay = props => {
  const classes = useStyles(props);
  return (
    <Slide direction="up" in={props.isOpen}>
      <div className={classes.root}>
        <IconButton
          color="primary"
          className={classes.closeBtn}
          onClick={() => {
            Router.push('/');
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        {props.children}
      </div>
    </Slide>
  );
};

Overlay.defaultProps = {
  isOpen: false,
};

export default Overlay;
