import React from "react";
import ReactMarkdown from "react-markdown";
import cx from "classnames";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& a": {
      color: theme.palette.primary.main,
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
}));

const Markdown = ({ className, ...props }) => {
  const style = useStyles();
  return <ReactMarkdown className={cx(className, style.root)} {...props} />;
};

export default Markdown;
