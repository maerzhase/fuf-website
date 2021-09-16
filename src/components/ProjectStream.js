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
import { motion, useTransform , useViewportScroll, useMotionValue} from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: 0,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(15),
  },
  headline: {
    zIndex: 100,
    position: "absolute",
    top: "33%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    // opacity: props => props.isActive ? 1 - props.progress : 1,
    '&:hover': {
      color: theme.palette.primary.main,
    }
  },
  heroImage: {
    width: '100%',
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, #ff6e56 100%)",
    zIndex: 10000,
  }
}));

export const Teaser = React.forwardRef((props, ref) => {
  const { project, progress, isActive, currentStepIndex, index } = props;
  const y = useTransform(progress, [index, index + 1], [500, 0]);
  const y2 = useTransform(progress, [index, index +0.5 ,index + 1], [500, 0, 1000]);
  const scale = useTransform(progress, [index, index +0.5, index + 1], [0.25, 1, 0.25]);
  const classes = useStyles(props);
  const isVisible = currentStepIndex - 1 < index;
  const nextActive = currentStepIndex > index;

  return (
    <motion.div  ref={ref} className={classes.root}>
      <div className={classes.headline}>
        <motion.div style={{y}} >
          <Link href={`/projects/${project._id}`}>
            <a>
              <Typography variant="h1">{project.title}</Typography>
              <Typography variant="h6">
                {project.theme.display}
              </Typography>
            </a>
          </Link>
        </motion.div>
      </div>
      <motion.img
        className={classes.heroImage}
        src={getHeroImageSrc(project.heroImage.path)}
        style={{y: y2}}
      />
      {isVisible && <motion.div style={{scaleY: scale, transformOrigin: 'bottom center'}} className={classes.overlay}  />}
    </motion.div>
  );
});

Teaser.displayName = "Teaser";

export const SimpleTeaser = React.forwardRef((props, ref) => {
  const { project } = props;
  const classes = useStyles();
  return (
    <motion.div ref={ref} className={classes.root}>
      <div className={classes.headline}>
        <Link href={`/projects/${project._id}`}>
          <a>
            <Typography variant="h1">{project.title}</Typography>
            <Typography variant="h6">
              {project.theme.display}
            </Typography>
          </a>
        </Link>
      </div>
      <img
        className={classes.heroImage}
        src={getHeroImageSrc(project.heroImage.path)}
      />
    </motion.div>
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
  } = props;
  return (
    <Scrollama
      onStepEnter={onStepEnter}
      onStepProgress={onStepProgress}
      offset={1}
    >
      {projects.map((e, i) => (
        <Step key={i} data={i}>
          <Teaser
            index={i}
            project={e}
            currentStepIndex={currentStepIndex}
            isActive={currentStepIndex === i}
            progress={currentStepProgress}
          />
        </Step>
      ))}
    </Scrollama>
  );
};

export default ProjectStream;
