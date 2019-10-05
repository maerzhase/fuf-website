import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { ParallaxProvider } from 'react-scroll-parallax';
import moment from 'moment';
import theme from '../theme';
import dataStore from '../stores/index';

moment.locale('de');

const styles = () => ({
  '@global': {
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    body: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
  },
});

@withStyles(styles)
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const isServer = typeof window === 'undefined';

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      isServer,
      pageProps,
    };
  }
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>FUF - Frauen und Fiktion</title>
        </Head>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Provider dataStore={dataStore}>
            <ParallaxProvider>
              <Component {...pageProps} />
            </ParallaxProvider>
          </Provider>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
