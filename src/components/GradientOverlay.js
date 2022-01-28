import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,0) 66%, #ff6e56 100%)",
    zIndex: 1,
    pointerEvents: "none",
  },
}));

const GradientOverlay = () => {
  const classes = useStyles();
  return <div className={classes.root} />;
};

export default GradientOverlay;
