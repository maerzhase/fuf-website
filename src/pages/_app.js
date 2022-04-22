import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import Navigation from "@/components/Navigation";
import CssBaseline from "@/components/CssBaseline";
import theme from "@/theme/index";
import GradientOverlay from "@/components/GradientOverlay";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Frauen und Fiktion</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <Component {...pageProps} />
	<ScrollIndicator />
	<GradientOverlay />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
