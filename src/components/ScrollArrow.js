import makeStyles from "@mui/styles/makeStyles";
import { motion } from "framer-motion";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SliderArrowLarge from "@/icons/SliderArrowLarge";

const useStyles = makeStyles(() => ({
  root: {
    "& svg *": {
      transition: "fill 0.5s",
    },
  },
}));

const SIZE = 70;

const variants = {
  up: {
    visible: { opacity: 1, scale: [1, 1.5, 1], rotate: "-90deg" },
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: "-90deg",
    },
  },
  down: {
    visible: { opacity: 1, scale: [1, 1.5, 1], rotate: "90deg" },
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: "90deg",
    },
  },
};

export default function Arrow(props) {
  const {
    direction = "down",
    fill = "#000",
    onClick = null,
    isVisible = true,
  } = props;
  const classes = useStyles();

  return (
    <motion.div
      initial={false}
      onClick={onClick}
      className={classes.root}
      style={{
        width: SIZE,
        height: SIZE,
        transformOrigin: "50% 50%",
        position: "absolute",
        scale: 1,
        cursor: isVisible ? "pointer" : null,
        pointerEvents: isVisible ? "all" : "none",
      }}
      animate={variants[direction][isVisible ? "visible" : "hidden"]}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
    >
      <SliderArrowLarge fontSize="large" className={classes.sliderArrowLarge} />
    </motion.div>
  );
}
