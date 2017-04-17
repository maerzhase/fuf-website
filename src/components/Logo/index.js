import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import logoSVG from '../../assets/fuf-logo.svg';
export default class Logo extends React.Component {
  render(){
    const componentClass = classnames(styles.component);
    return(
      <div className={componentClass}>
        <img src={logoSVG}/>
        <div 
          className="fb-like"
          data-href="https://www.facebook.com/frauenundfiktion/" 
          data-layout="button_count" 
          data-action="like" 
          data-size="large" 
          data-show-faces="false" 
          data-share="false"
        />
      </div>
    )
  }
}
