'use strict';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import alt from '../flux/alt';

class Routing extends React.Component {
  constructor(props){
    super(props);
    // if we received some stores data from server load
    // bootstrap them into flux and rebuild editorState for
    // current state of application
    if(props.stores != undefined){
      alt.bootstrapAndUpdate(JSON.stringify(props.stores))
    }
  } 
  render() {
    if (!this.routeConfig) this.routeConfig = routes;
    return <Router history={browserHistory} routes={this.routeConfig}/>
  }
}

export default Routing;