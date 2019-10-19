import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { Parallax } from 'react-scroll-parallax';
import Autosizer from 'react-virtualized-auto-sizer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.black,
    position: 'relative',
    textAlign: props => (props.centered ? 'center' : 'left'),
    minHeight: props => props.minHeight && '800px',
    [theme.breakpoints.down('md')]: {
      minHeight: props => props.minHeight && '700px',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: props => props.minHeight && '500px',
    },
    marginBottom: props => !props.noMargin && theme.spacing(4),
  },
  content: {
    ...theme.sectionPadding(),
    position: 'relative',
  },
  img: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundPosition: props => props.backgroundAlign,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  },
  title: {
    minHeight: 650,
    [theme.breakpoints.down('md')]: {
      minHeight: 600,
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 450,
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: 250,
    },
  }
}));

const Section = props => {
  const theme = useTheme();
  const matchesDownSm = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles({...props, isSmall: matchesDownSm});
  const {
    centered,
    minHeight,
    noPadding,
    children,
    img,
    backgroundAlign,
    noMargin,
    ...restProps
  } = props;
  return (
    <section className={cx(classes.root, {[classes.title]: props.title})} {...restProps}>
      {img && (
        <Autosizer>
          {({ width, height }) => (
            <Parallax
              y={[-15, 15]}
              styleInner={{ height, width }}
              styleOuter={{ height, width }}
            >
              <div
                className={classes.img}
                style={{ backgroundImage: `url(${img})` }}
              />
            </Parallax>
          )}
        </Autosizer>
      )}
      <div className={classes.content}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.any.isRequired,
  backgroundAlign: PropTypes.string,
  centered: PropTypes.bool,
  minHeight: PropTypes.bool,
  noPadding: PropTypes.bool,
  img: PropTypes.string,
  noMargin: PropTypes.bool,
  title: PropTypes.bool,
};

Section.defaultProps = {
  backgroundAlign: 'left top',
  centered: false,
  minHeight: false,
  noPadding: false,
  noMargin: false,
  img: null,
  title: false,
};

export default Section;
