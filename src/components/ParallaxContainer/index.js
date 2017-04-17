'use strict'
'use extensible'

import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import styles from './style.scss';

export default class SectionFiktion extends React.Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    const el = ReactDOM.findDOMNode(this)
    const allPContainer = document.getElementsByClassName('nand-parallax-container');
    for(var i = 0; i < allPContainer.length; i++){
      const pc = allPContainer[i];
      if(pc == el){
        el.style.zIndex = `-${(i + 1)}`;
        this._id = i;
      }
    }

    this._offset = el.getBoundingClientRect().top + window.pageYOffset;
    this._interval = setInterval(this.handleScroll,1);
    this._lastTop = 0;
    //window.addEventListener('scroll',this.handleScroll)
    //window.requestAnimationFrame(this.handleScroll);

  }

  componentWillUnmount(){
    clearInterval(this._interval);
  }

  handleScroll(){
    const el = ReactDOM.findDOMNode(this)
    const originalOffset = this._offset;
    const speed = this.props.speed;
    const offset = window.pageYOffset;
    const top = ((offset - originalOffset) * speed).toFixed(1);
    const clientRect = el.getBoundingClientRect()
    if(top != this._lastTop) {
      if(clientRect.top < -clientRect.height * 1.5 || clientRect.top < clientRect.height * 1.5 ){
        el.style.transform = `translate3d(0px,${top}px,0)`;
      }
      this._lastTop = top;
    }    
  }

  render(){
    const componentClass = classnames("nand-parallax-container",styles.component,this.props.className);
    return(
      <div className={componentClass} style={this.props.style} >
        {this.props.children}
      </div>
    )
  }
};

SectionFiktion.propTypes = {
  speed: React.PropTypes.number,
}

SectionFiktion.defaultProps = {
  speed: 0.12,
}