import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Link from './Link';
import Section from './Section';

const useStyles = makeStyles(theme => ({
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  h1: {
    textTransform: 'uppercase',
    position: 'relative',
    lineHeight: 1,
    fontSize: '10rem',
    marginLeft: theme.spacing(4),
    textShadow: '1px 1px 3px rgba(0,0,0,0.68)',
    [theme.breakpoints.down('md')]: {
      fontSize: '6rem',
    },
  },
  h2: {
    position: 'absolute',
    top: '50%',
    left: theme.spacing(-4),
    color: theme.palette.grey[500],
    lineHeight: 1,
    fontSize: '1.4rem',
  },
}));

const Teaser = props => {
  const classes = useStyles(props);
  return (
    <Section
      minHeight
      img={props.img}
      backgroundAlign={props.backgroundAlign}
      id={props.id}
    >
      <div className={classes.content}>
        <div className={classes.title}>
          <Typography variant="h1" className={classes.h1} component="h1">
            <Link href="" noDecoration>
              {props.title}
            </Link>
            <Typography variant="h2" className={classes.h2} component="span">
              <Link color="inherit" noDecoration href={`#${props.id}`}>
                #0{props.num}
              </Link>
            </Typography>
          </Typography>
        </div>
      </div>
    </Section>
  );
};

Teaser.propTypes = {
  title: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  backgroundAlign: PropTypes.string.isRequired,
};

export default Teaser;
