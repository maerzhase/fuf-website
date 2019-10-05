import React from 'react';
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
  },
  img: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundPosition: props =>
      props.backgroundAlign === 'left' ? 'left top' : 'right top',
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

export default Section;
