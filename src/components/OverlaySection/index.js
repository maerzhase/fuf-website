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
    document.body.style.overflow ="auto";
    if(this.props.onClose) this.props.onClose();
  }

  @autobind
  _toggleGallery(e){
    const newVal = !this.state.galleryOpen;
    if(this.props.onToggleGallery) this.props.onToggleGallery(newVal);
  }

  @autobind
  _next(){
    const params = this.context.router.params;
    const currentId = Number(params.id);
    const maxLength = this.state.images.length;
    let newVal = 1;
    if(currentId == maxLength) newVal = 1;
    if(currentId < maxLength) newVal = currentId+1;  
    const path = this.context.router.location.pathname;
    const newpath = `${path.substring(0,path.length-1)}${newVal}`;
    this.context.router.push(newpath);
  }
  
  @autobind
  _prev(){
    const params = this.context.router.params;
    const currentId = Number(params.id);
    const maxLength = this.state.images.length;
    let newVal = 1;
    if(currentId == 0) newVal = maxLength;
    if(currentId > 1) newVal = currentId-1;  
    const path = this.context.router.location.pathname;
    const newpath = `${path.substring(0,path.length-1)}${newVal}`;
    this.context.router.push(newpath);
  }

  render(){
    const {open,galleryOpen,images,credits} = this.state;
    const componentClass  = classnames(styles.component,{isOpen:open});
    const contentClass = classnames(styles.content,{isOpen:!galleryOpen});
    const galleryClass = classnames(styles.gallery,{isOpen:galleryOpen});
    const arrowClass   = classnames(styles.arrow,{moveLeft:galleryOpen});
    const arrowIcon = galleryOpen ? <i className="material-icons">arrow_drop_down</i> : <i className="material-icons">arrow_drop_down</i>;
    const params = this.context.router.params;
    const currentId = Number(params.id);
    const inlineStyle = {transform:`translate(-${(currentId-1)}00%,0)`}
    console.log(inlineStyle)
    return(
      <div className={componentClass}>
        <div className={styles.scrollContainer}>
          <div className={contentClass}>
            <div className="close" onMouseDown={this._closeOverlay}><i className="material-icons">close</i></div>
            {this.props.children}
          </div>
        </div>
        <div className={arrowClass} 
              onMouseDown={(e)=>this._toggleGallery(e)}>
          {arrowIcon}
        </div>

        <div className={galleryClass} >
          <div className="container" style={inlineStyle}>
          {images.map((image,i)=>{
            const style = {backgroundImage:`url(${image.retina})`};
            return <div className={styles.img} key={i} style={style}/>
          })}
          </div>
          <div className={styles.next} onMouseDown={this._next}><i className="material-icons">skip_next</i></div>
          <label>{credits}</label>
        </div>
      </div>
    )
  }
};

OverlaySection.defaultProps = {
  open: false,
  galleryOpen:false,
  images: [],
  credits:"",
}

OverlaySection.contextTypes = {
  router: React.PropTypes.object,
}