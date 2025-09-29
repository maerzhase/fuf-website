import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { getImageSrc } from "@/api/constants";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "auto",
    height: "100%",
  },
}));

export function Image({ item }) {
  const classes = useStyles();
  return (
    <img
      key={item.path}
      className={classes.img}
      src={getImageSrc(item.path)}
      alt={item.title}
    />
  );
}
