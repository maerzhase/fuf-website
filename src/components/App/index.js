'use extensible'

import React, {Component} from 'react';
import AppActions from '../../flux/actions/AppActions';
import zenscroll from 'zenscroll';
import {Lethargy} from 'lethargy';
const lethargy = new Lethargy();

const JSONFile = require('../../assets/data.json')

const routes = [
  '/start',
  '/weapon',
  '/lust',
  '/fiktion',
  '/frauen',
  '/upcoming',
  '/termine',
  '/kontakt'
]
import ReactSwipeEvents from 'react-swipe-events'
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
    this.routeIndex = routeIndex > -1 ? routeIndex : 0;
    this.scrollListener = require('mouse-wheel')(window,this.handleScroll,true);
    this.touchListener = window.addEventListener('touchmove',this.handleTouch);
  }

  componentWillUnmount(){
    window.removeEventListener('wheel', this.scrollListener);
  }

  handleTouch = (event) => {
    if(window.preventScroll) return;
    event.preventDefault();
  }

  handleScroll = (dx,dy,dz,e) => {
    console.log('scroll',lethargy.check(e));
    if(!lethargy.check(e) || zenscroll.moving() || window.preventScroll) return;
    if(dy < 0) {
      // console.log('up')
      this.routeIndex -= 1;
      if(this.routeIndex < 0) this.routeIndex = routes.length - 1;
    }
    else {
      // console.log('down')
      this.routeIndex += 1;
      if(this.routeIndex >= routes.length) this.routeIndex = 0;
    }
    const nextPath = routes[this.routeIndex];
    this.props.router.push(nextPath)
    return false;
  }

  // render(){
  //   return <ReactSwipeEvents onSwiping={(e, originalX, originalY, currentX, currentY, deltaX, deltaY)=>{
  //       this.handleScroll(deltaX,deltaY*-1)
  //   }}>{this.props.children}</ReactSwipeEvents>
  // }

  render(){
    return this.props.children;
  }
}

App.contextTypes = {
  router: React.PropTypes.object,
}