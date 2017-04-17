'use strict'
'use extensible'

import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import Logo from '../Logo';
import KontaktImage from '../../assets/images/kontakt.jpg';
import KontaktImageHighRes from '../../assets/images/kontakt_highres.jpg';
import ParallaxContainer from '../ParallaxContainer';

export default class SectionKontakt extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const componentClass = classnames(styles.component);
    const logoContainerClass = classnames(styles.logoContainer)
    const backgroundClass = classnames(styles.background);

    return(
      <div className={componentClass}>
        <div className="content">
          <h2>Kontakt</h2> 
          <a href="mailto:kontakt@frauenundfiktion.de"><span>kontakt@frauenundfiktion.de</span></a>
          <a href="https://www.facebook.com/frauenundfiktion/" target="_blank"><span>facebook</span></a>
        </div>
        <div className={logoContainerClass}>
          <Logo/>
          <h4>Impressum</h4>
        </div>
        <ParallaxContainer className={backgroundClass} speed={0.4}>
          <img src={KontaktImage} srcSet={KontaktImageHighRes}/>
        </ParallaxContainer>
      </div>
    )
  }
};