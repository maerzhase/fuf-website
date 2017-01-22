import React from 'react';
import ReactDOMServer from 'react-dom/server';
import routes from './src/components/routes';
import {match,RouterContext} from 'react-router'
import Html from './Html';
import path from 'path';
import alt from './src/flux/alt';
import Immutable from 'immutable';
import express from 'express';
const app = express()
const __DEVELOPMENT = process.env.NODE_ENV === "development";

var MockBrowser = require('mock-browser').mocks.MockBrowser;
var mock = new MockBrowser();
global.window = mock.getWindow();

if(!__DEVELOPMENT){
 app.use(express.static(path.join(__dirname,'dist'))); 
}

const handleStaticFiles = (req,response) => {
  var splittedUrl = req.url.split('.');
  var files = ['ico','svg'];
  if(splittedUrl != undefined){
    console.log(splittedUrl) 
    if(files.indexOf(splittedUrl[splittedUrl.length-1]) > -1){
      response.send("404");
      return true;
    }
  }
  return false;
}

app.get('/*', function (req, response) {
  console.log("request received:",req.url);
  if(handleStaticFiles(req,response)) return;

  if (__DEVELOPMENT)
  {
    webpack_isomorphic_tools.refresh()
  }
  match({ routes: routes, location: req.url }, (err, redirect, props) => {

    var i = 0;
    var components = props.components;
    var comp = components[i];
    // TODO: handle comp that doesn't have initalActions()
    var actions = comp.initialActions(props.params);
    var j = 0;
    //TODO: remove this closure
    var asyncActions = () => {
      if(j < actions.length-1){
        j++;
        return actions[j](asyncActions);
      }else if(i < components.length-1){
        j = 0;
        i++;
        comp = components[i];
        actions = comp.initialActions(props.params);
        if(j < actions.length){
          return actions[j](asyncActions);
        }
      }
      const app_component = <RouterContext {...props}/>
      return renderApp(req,response,app_component)  
    }
    actions[j](asyncActions);
    
  })
})

const renderApp = (req,response,app_component) => {
  const stores = `window.fluxStores = ${ alt.takeSnapshot() };`;
  const assets = webpack_isomorphic_tools.assets();
  const AppTemplate = <Html assets={assets} 
                            stores={stores}
                            component={app_component} />
  var htmlString = ReactDOMServer.renderToString(AppTemplate);
  alt.flush();
  response.send('<!doctype html>\n' +  htmlString)
  console.log("===> response send")
}

const port = 3000;
app.listen(port, function () {
  console.log(`isomorphic-server listening @ localhost:${port}`)
})