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
      </div>
    )
  }
}
