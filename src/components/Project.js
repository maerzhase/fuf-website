import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      overflow: 'hidden',
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
    padding: theme.spacing(4),
    width: '70%',
    height: '100%',
    overflowY: 'auto',
  },
  gallerySection: {
    width: '30%',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
  },
}));

const Project = props => {
  const classes = useStyles(props);
  const { num, title, subtitle, pre, text, caption } = props;
  return (
    <div className={classes.root}>
      <section className={classes.textSection}>
        <Typography variant="h5">Frauen und Fiktion #{num}</Typography>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h4" gutterBottom>{subtitle}</Typography>
        {pre && pre.map((text, index) => (
          <Typography key={`pre-${index}`} variant="subtitle1" gutterBottom>
            {text}
          </Typography>
        ))}
        {text && text.map((text, index) => (
          <Typography key={`text-${index}`} variant="body1" gutterBottom>
            {text}
          </Typography>
        ))}
        {caption && caption.map((caption, index) => (
          <Typography
            key={`caption-${index}`}
            variant="body2"
            gutterBottom={caption.length > 1}
            color="textSecondary"
          >
            {caption}
          </Typography>
        ))}
      </section>
      <section className={classes.gallerySection}></section>
    </div>
  );
};

Project.propTypes = {
  num: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
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
