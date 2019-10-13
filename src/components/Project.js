import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      overflow: props => (props.isOpen ? 'hidden' : null),
    },
  },
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.common.black,
    display: 'flex',
  },
  textSection: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      width: '85%',
    },
    padding: theme.spacing(4),
    width: '70%',
    height: '100%',
    overflowY: 'auto',
    position: 'relative',
  },
  closeBtn: {
    [theme.breakpoints.down('sm')]: {
      right: 0,
      top: 0,
    },
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(2),
  },
  gallerySection: {
    [theme.breakpoints.down('sm')]: {
      width: '15%',
    },
    width: '30%',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
  },

}));

const Project = props => {
  if (!props.isOpen) return null;
  const classes = useStyles(props);
  const { num, title, subtitle, pre, text, caption } = props;
  return (
    <div className={classes.root}>
      <section className={classes.textSection}>
        <Typography variant="h5">Frauen und Fiktion #{num}</Typography>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h4" gutterBottom>
          {subtitle}
        </Typography>
        {pre &&
          pre.map((text, index) => (
            <Typography key={`pre-${index}`} variant="subtitle1" gutterBottom>
              {text}
            </Typography>
          ))}
        {text &&
          text.map((text, index) => (
            <Typography key={`text-${index}`} variant="body1" gutterBottom>
              {text}
            </Typography>
          ))}
        {caption &&
          caption.map((caption, index) => (
            <Typography
              key={`caption-${index}`}
              variant="body2"
              gutterBottom={caption.length > 1}
              color="textSecondary"
            >
              {caption}
            </Typography>
          ))}
          <IconButton color="primary" className={classes.closeBtn} href="/">
            <CloseIcon fontSize="large" />
          </IconButton>
      </section>
      <section className={classes.gallerySection}></section>
    </div>
  );
};

Project.propTypes = {
  num: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  pre: PropTypes.array,
  text: PropTypes.array,
  caption: PropTypes.array,
};

Project.defaultProps = {
  subtitle: null,
  pre: null,
  text: null,
  caption: null,
};

export default Project;
