import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';

export default class Logo extends React.Component {
  render(){
    const componentClass = classnames(styles.component);
    return(
      <div className={componentClass}>
        <div>Frauen</div>
        <div>und</div>
        <div>Fiktion</div>
        <div>&emsp;&nbsp;&nbsp;</div>
        <span className="clearfix"/>
      </div>
    )
  }
}
