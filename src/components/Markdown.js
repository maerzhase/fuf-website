import React from "react";
import ReactMarkdown from "react-markdown";
import cx from "classnames";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& a": {
      "&:hover": {
        color: theme.palette.primary.main,
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
