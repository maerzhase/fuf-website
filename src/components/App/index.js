'use extensible'

import React, {Component} from 'react';
import AppActions from '../../flux/actions/AppActions';

const JSONFile = require('../../assets/data.json')

const routes = [
  '/start',
  '/lust',
  '/fiktion',
  '/frauen',
  '/termine',
  '/kontakt'
]

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
    const routeIndex = routes.indexOf(this.props.router.location.pathname);
    this.delay = false;
    this.routeIndex = routeIndex > -1 ? routeIndex : 0;
    this.scrollListener = require('mouse-wheel')(window,this.handleScroll,true);
  }

  componentWillUnmount(){
    window.removeEventListener('wheel', this.scrollListener);
  }

  handleScroll = (dx,dy) => {
    if(this.delay || window.preventScrolling) return;

    this.delay = true;
    setTimeout(() => {this.delay = false}, 400)

    if(dy < 0) {
      console.log('up')  
      this.routeIndex -= 1;
      if(this.routeIndex < 0) this.routeIndex = 0;
    }
    else {
      console.log('down')
      this.routeIndex += 1;
      if(this.routeIndex > routes.length) this.routeIndex = 0;
    }
    const nextPath = routes[this.routeIndex];
    this.props.router.push(nextPath)
  }

  render(){
    return this.props.children
  }
}

App.contextTypes = {
  router: React.PropTypes.object,
}