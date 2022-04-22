import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles(() => ({
  root: {
    '& svg *': {
      transition: 'fill 0.5s',
    },
  },
}));

const SIZE = 32;

const variants = {
  up: {
    visible: { opacity: 1, scale: [1, 1.5, 1], rotate: '180deg' },
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: '180deg',
    },
  },
  down: {
    visible: { opacity: 1, scale: [1, 1.5, 1], rotate: '0deg' },
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: '0deg',
    },
  },
};

export default function Arrow(props) {
  const {
    direction = 'down',
    fill = '#000',
    onClick = null,
    isVisible = true,
  } = props;
  const classes = useStyles();

  return (
    <motion.div
      onClick={onClick}
      className={classes.root}
      style={{
        width: SIZE,
        height: SIZE,
        transformOrigin: '50% 50%',
        position: 'absolute',
        scale: 1,
        cursor: isVisible ? 'pointer' : null,
        pointerEvents: isVisible ? 'all' : 'none',
      }}
      animate={variants[direction][isVisible ? 'visible' : 'hidden']}
      transition={{
        duration: 0.75,
        ease: 'easeOut',
      }}
    >
      <ArrowDropDownIcon width={SIZE} height={SIZE} fill={fill} id="CaretDown32" />
    </motion.div>
  );
}

