'use strict'
'use extensible'

import React from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';
import styles from './style.scss';

export default class OverlaySection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
    }
  }

  componentWillReceiveProps(newProps){
    this.setState({
      ...newProps
    })
  }

  @autobind
  _closeOverlay(e){
    document.body.style.overflowY ="auto";
    this.setState({
      open:false,
    })
  }

  @autobind
  _toggleGallery(e){
    this.setState({
      galleryOpen: !this.state.galleryOpen,
    })
  }

  render(){
    const {open,galleryOpen,images} = this.state;
    const componentClass  = classnames(styles.component,{isOpen:open});
    const contentClass = classnames(styles.content,{isOpen:!galleryOpen});
    const galleryClass = classnames(styles.gallery,{isOpen:galleryOpen});
    return(
      <div className={componentClass}>
        <div className={contentClass}>
          <div className="close" onMouseDown={this._closeOverlay}>X</div>
          {this.props.children}
        </div>
        <div className={galleryClass} onMouseDown={(e)=>this._toggleGallery(e)}>
          {images.map((image,i)=><div key={i} style={{backgroundImage:`url(${image.retina}`}}/>)}
        </div>
      </div>
    )
  }
};

OverlaySection.defaultProps = {
  open: false,
  galleryOpen:false,
  images: [],
}