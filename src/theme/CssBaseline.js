import React from "react";
import PropTypes from "prop-types";
import MuiCssBaseline from "@mui/material/CssBaseline";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    html: {
      fontSize: `${theme.htmlFontSize}px`,
    },
    body: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.text.default,
    },
    a: {
      color: "inherit",
    },
    "::-webkit-scrollbar": {
      width: 10,
      height: 10,
      backgroundColor: theme.palette.common.white,
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const CssBaseline = ({ children }) => {
  useStyles();
  return (
    <React.Fragment>
      <MuiCssBaseline />
      {children}
    </React.Fragment>
  );
};

CssBaseline.propTypes = {
  children: PropTypes.node,
};

CssBaseline.defaultProps = {
  children: null,
};

export default CssBaseline;
