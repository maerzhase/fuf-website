'use strict'
'use extensible'

import React from 'react';
import ViewHome from '../ViewHome';

export default class RouteHome extends React.Component {

  constructor(props) {
    super(props);
  }

  static initialActions(params){
    return []
  }

  componentDidMount(){
    const initialActions = RouteHome.initialActions(this.context.router.params);
    initialActions.forEach((a)=>{
      a();
    })
  }

  render(){
    return <ViewHome/>
  }
};

RouteHome.contextTypes = {
  router: React.PropTypes.object,
}