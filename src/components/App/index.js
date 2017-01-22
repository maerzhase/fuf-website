'use extensible'

import React, {Component} from 'react';
import AppActions from '../../flux/actions/AppActions';

const JSONFile = require('../../assets/data.json')

export default class App extends Component{

  constructor(props){
    super(props)
  }

  static initialActions(params){
    return [
      (async)=>{
        if(async != undefined) async()
      },
    ]
  }
  
  componentDidMount(){
    const initialActions = App.initialActions(this.context.router.params);
    initialActions.forEach((a)=>{
      a();
    })
  }

  render(){
    return this.props.children
  }
}

App.contextTypes = {
  router: React.PropTypes.object,
}