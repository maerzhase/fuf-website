'use strict'
'use extensible'

import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import Logo from '../Logo';

export default class SectionKontakt extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const componentClass = classnames(styles.component);
    const logoContainerClass = classnames(styles.logoContainer)
    return(
      <div className={componentClass}>
        <div className="content">
          <h2>Kontakt</h2> 
          <a>kontakt@frauenundfiktion.de</a>
          <a>facebook</a>
        </div>
        <div className={logoContainerClass}>
          <Logo/>
          <h4>Impressum</h4>
        </div>
      </div>
    )
  }
};