import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PlayIcon from '@material-ui/icons/PlayArrow';
import Slide from '@material-ui/core/Slide';
import Router, { withRouter } from 'next/router';

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
    // transform: props => props.isOpen ? 'translate(0,0)' : 'translate(-100%, 0)',
    // transition: theme.transitionHelper('transform'),
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
      transform: props => props.isGalleryOpen ? 'translate(0, 0)' : 'translate(85%, 0)',
    },
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.common.black,
    transform: props => props.isGalleryOpen ? 'translate(0, 0)' : 'translate(70%, 0)',
    transition: theme.transitionHelper('transform'),
  },
  galleryWrap: {
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    '-webkit-overflow-scrolling': 'touch',
  },
  playButton: {
    [theme.breakpoints.down('sm')]: {
      transform: props => props.isGalleryOpen ? 'translate(0, -50%) rotate(-180deg)' : 'translate(-50%, -50%) translate(85vw, 0) rotate(0deg)',
    },
    appearance: 'none',
    position: 'absolute',
    top: '50%',
    backgroundColor: theme.palette.common.white,
    width: 35,
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:focus': {
      outline: 'none',
    },
    borderTopLeftRadius: props => props.isGalleryOpen ? 0 : '50%',
    borderBottomLeftRadius: props => props.isGalleryOpen ? 0 : '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    transform: props => props.isGalleryOpen ? 'translate(0, -50%) rotate(-180deg)' : 'translate(-50%, -50%) translate(70vw, 0) rotate(0deg)',
    transition: theme.transitionHelper(['transform', 'borderRadius']),
  },
  galleryItem: {
    display: 'inline-block',
    position: 'relative',
  },
  caption: {
    position: 'absolute',
    left: theme.spacing(2),
    top: theme.spacing(2),
    ...theme.teaserShadow(),
  },
  embed: {
    display: 'inline-block',
    width: '90vw',
    height: '100vh',
  },
  img: {
    width: 'auto',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'auto',
    display: 'inline-block',
    // outline:  `${theme.palette.common.white} 10px solid`
  },
}));

const Project = props => {
  // if (!props.isOpen) return null;
  const classes = useStyles(props);
  const { num, title, subtitle, pre, text, caption, gallery } = props;
  return (
    <Slide direction={props.isOpen ? 'right' : 'left'} in={props.isOpen} mountOnEnter unmountOnExit timeout={300} onExited={() => console.log('Exited')}>
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
          <IconButton color="primary" className={classes.closeBtn} onClick={() => { Router.push('/')}}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </section>
        <section className={classes.gallerySection}>
          <div className={classes.galleryWrap}>
            {
              gallery.map(([type, url, caption]) => {
                switch(type) {
                  case 'embed':
                    return (
                    <iframe
                        className={classes.embed}
                          src={url}
                          frameBorder="0"
                          allowFullScreen
                        />
                     );
                  case 'image':
                    return (
                      <div className={classes.galleryItem}>
                        {caption && <Typography className={classes.caption} variant="caption">
                              {caption}
                                                </Typography>}
                        <img className={classes.img} src={url} />
                      </div>
                    );
                  default:
                    return null;
                }
              })
            }
          </div>
        </section>
        <button className={classes.playButton} onClick={props.onOpenGallery}>
          <PlayIcon />
        </button>
      </div>
    </Slide>
  );
};

Project.propTypes = {
  num: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  pre: PropTypes.array,
  text: PropTypes.array,
  caption: PropTypes.array,
  gallery: PropTypes.array,
  onOpenGallery: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isGalleryOpen: PropTypes.bool.isRequired,
};

Project.defaultProps = {
  subtitle: null,
  pre: null,
  text: null,
  caption: null,
  gallery: [],
  isOpen: false,
  isGalleryOpen: false,
  onOpenGallery: () => {},
};

export default Project;
