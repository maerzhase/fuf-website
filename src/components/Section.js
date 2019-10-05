import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Parallax } from 'react-scroll-parallax';
import Autosizer from 'react-virtualized-auto-sizer';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    textAlign: props => (props.centered ? 'center' : 'left'),
    minHeight: props => props.minHeight && '800px',
    [theme.breakpoints.down('md')]: {
      minHeight: props => props.minHeight && '700px',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: props => props.minHeight && '600px',
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
}));

const Section = props => {
  const classes = useStyles(props);
  const {
    centered,
    minHeight,
    noPadding,
    children,
    img,
    backgroundAlign,
    ...restProps
  } = props;
  return (
    <section className={classes.root} {...restProps}>
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
};

Section.defaultProps = {
  backgroundAlign: 'left top',
  centered: false,
  minHeight: false,
  noPadding: false,
  img: null,
};

export default Section;
