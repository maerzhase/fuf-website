import React, { useState } from "react";
import {
  getAllCollections,
  getCollectionEntries,
  getSingleton,
  getAllSingletons,
} from "@/api/api";
import { getHeroImageSrc } from "@/api/constants";
import Link from "next/link";
import Box from "@material-ui/core/Box";
import Zoom from "@material-ui/core/Zoom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Scrollama, Step } from "react-scrollama";
import {
  motion,
  useTransform,
  useViewportScroll,
  useMotionValue,
} from "framer-motion";

import { useScrollDirection } from "react-use-scroll-direction";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    // border: '2px solid white',
    // overflow: 'hidden',
  },
  headline: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width: "100%",
    maxWidth: 1000,
    margin: "auto",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  heroImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    //backgroundColor: 'red',
    top: 0,
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    //    background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, #ff6e56 100%)",
    zIndex: 10000,
  },
}));

const generateRanges = (length, index, valIn, valOut, valOut2) => {
  const rangeIn = Array(length)
    .fill()
    .map((v, i) => i);
  const rangeOut = rangeIn.map((i) =>
    i === index + 1 || i === index + 1
      ? valIn
      : i > index + 0.5
      ? valOut2
      : valOut
  );
  return [rangeIn, rangeOut];
};

const generateStickyRanges = (length, index, valIn, valOut, valOut2) => {
  const rangeIn = Array(length * 2)
    .fill()
    .map((v, i) => i * 0.5);
  const rangeOut = rangeIn.map((i) =>
    i === index + 1 || i === index + 1.5
      ? valIn
      : i > index + 0.5
      ? valOut2
      : valOut
  );
  return [rangeIn, rangeOut];
};
const useAnimationProperty = (
  isSticky,
  motionValue,
  length,
  index,
  valIn,
  valOut,
  valOut2
) => {
  const [rangeIn, rangeOut] = isSticky
    ? generateStickyRanges(length, index, valIn, valOut, valOut2)
    : generateRanges(length, index, valIn, valOut, valOut2);
  const val = useTransform(motionValue, rangeIn, rangeOut);
  return val;
};

export const Teaser = React.forwardRef((props, ref) => {
  const {
    project,
    isSticky,
    progress,
    currentDirection,
    currentStepIndex,
    index,
    length,
  } = props;
  const classes = useStyles(props);
  const y1 = useAnimationProperty(
    isSticky,
    progress,
    4 + 2,
    index,
    "0%",
    "100%",
    "100%"
  );
  const y2 = useAnimationProperty(
    isSticky,
    progress,
    4 + 2,
    index,
    "0%",
    "100%",
    "-100%"
  );
  const zIndex = useAnimationProperty(
    isSticky,
    progress,
    4 + 2,
    index,
    1,
    0,
    0
  );
  return (
    <motion.div
      ref={ref}
      className={classes.root}
      style={{
        pointerEvents: "none",
        //	position: 'relative',
        //	zIndex
      }}
    >
      <motion.div
        className={classes.heroImage}
        // initial={{y: '0%'}}
        //animate={{y: show ? '100%' :  '0%'}}
        style={{
          pointerEvents: "none",
          y: y1,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${getHeroImageSrc(project.heroImage?.path)})`,
        }}
        transition={{
          duration: 0.5,
        }}
      />
      <motion.div
        style={{
          y: y2,
          width: "100%",
          height: "100%",
          position: "relative",
          pointerEvents: "auto",
        }}
        //	initial={{y: '0%'}}
        //	animate={{y: show ? '-100%' :  '0%'}}
      >
        <div className={classes.headline}>
          <Link href={`/projects/${project._id}`}>
            <a>
              <Typography variant="h1">{project.title}</Typography>
              <Typography variant="h6">{project.theme.display}</Typography>
            </a>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
});

Teaser.displayName = "Teaser";

export const SimpleTeaser = React.forwardRef((props, ref) => {
  const { project } = props;
  const classes = useStyles();
  return (
    <div ref={ref}>
      <motion.div className={classes.root}>
        <div className={classes.headline}>
          <Link href={`/projects/${project._id}`}>
            <a>
              <Typography variant="h1">{project.title}</Typography>
              <Typography variant="h6">{project.theme.display}</Typography>
            </a>
          </Link>
        </div>
        <img
          className={classes.heroImage}
          src={getHeroImageSrc(project.heroImage?.path)}
        />
      </motion.div>
    </div>
  );
});

SimpleTeaser.displayName = "SimpleTeaser";

const ProjectStream = (props) => {
  const {
    projects,
    currentStepIndex,
    currentStepProgress,
    onStepProgress,
    onStepEnter,
    currentDirection,
    stickyAnimation,
  } = props;
  return (
    <>
      <Scrollama
        onStepEnter={onStepEnter}
        onStepProgress={onStepProgress}
        offset={0.99}
        debug
      >
        {projects.map((e, i) => (
          <Step key={i} data={i}>
            <div
              style={{
                height: "100vh",
                width: "100%",
              }}
            />
          </Step>
        ))}
      </Scrollama>
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {projects.map((e, i) => (
          <Teaser
            key={e.uuid}
            isSticky={stickyAnimation}
            length={projects.length}
            index={i}
            project={e}
            currentStepIndex={currentStepIndex}
            isActive={currentStepIndex === i}
            progress={currentStepProgress}
            currentDirection={currentDirection}
          />
        ))}
      </div>
    </>
  );
};

ProjectStream.defaultProps = {
  stickyAnimation: false,
};

export default ProjectStream;
