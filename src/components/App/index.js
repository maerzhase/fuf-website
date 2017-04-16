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
    this._interval = setInterval(this.handleScroll,1);
    this.lastOffset = 0;
    this.routeIndex = 0;
  }

  resetInterval = (time) => {
    clearInterval(this._interval);
    setTimeout(()=>{
      this._interval = setInterval(this.handleScroll,1);
      this.lastAction = '';
      this.lastOffset = window.pageYOffset;
    },time);
  }

  handleScroll = () => {
     const offset = window.pageYOffset;
     if(offset === this.lastOffset) return;
     if (offset > this.lastOffset && this.lastAction != 'down') {
      this.lastAction = 'down';
      this.lastOffset = offset;
      this.routeIndex = this.routeIndex + 1;
      if(this.routeIndex >= routes.length) this.routeIndex = 0;
      this.context.router.push(routes[this.routeIndex])
      this.resetInterval(1900);
      console.log('down', this.routeIndex)

     } else if (offset < this.lastOffset && this.lastAction != 'up') {
      this.lastAction = 'up';
      this.lastOffset = offset;
      this.routeIndex = this.routeIndex - 1;
      if(this.routeIndex <= 0) this.routeIndex = 0;
      this.context.router.push(routes[this.routeIndex])
      this.resetInterval(1900);
      console.log('up', this.routeIndex);
     }

  }

  render(){
    return this.props.children
  }
}

App.contextTypes = {
  router: React.PropTypes.object,
}