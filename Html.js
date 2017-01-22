import React from 'react'
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';

const polyfills = (inject) => {
  if(!inject) return [];
  return [
      <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-shim.min.js"/>,
      <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-sham.min.js"/>,
      <script src="https://cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js"/>,
      <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.34.2/es6-shim.min.js"/>,
      <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.34.2/es6-sham.min.js"/>,
  ]
}

export default class Html extends React.Component
{
  constructor(props){
    super(props);
  }

  render()
  {
    const { assets, component, stores } = this.props
    const __DEVELOPMENT = process.env.NODE_ENV === "development";
    const renderedComponent = ReactDOMServer.renderToString(component);
    const head = Helmet.rewind();
    const html = (
      <html lang="en-us">
        <head>
          {/* static metas you always want to have */}
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
          {/* retrive meta information from react-helmet*/}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {/* favicon */}
          {/* <link rel="shortcut icon" href={icon} /> */}
          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, i) => <link href={assets.styles[style]} key={i} media="screen, projection" rel="stylesheet" type="text/css"/>)}
          {/* inject polyfills if not in development mode */}
          {polyfills(!__DEVELOPMENT)}
        </head>

        <body>
          {/* inject React page */}
          <div id="app" dangerouslySetInnerHTML={{__html:renderedComponent}}/>
          {/* inject stores data that will be reloaded into the stores on the client */}
          <script dangerouslySetInnerHTML={{__html: stores}}/>
          {/* javascripts */}
          {Object.keys(assets.javascript).map((script, i) => <script src={assets.javascript[script]} key={i}/>)}
        </body>
      </html>
    )

    return html
  }
}

Html.propTypes = {
  assets: React.PropTypes.object.isRequired,
  component: React.PropTypes.object.isRequired,
  stores: React.PropTypes.string.isRequired,
}