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
    this.state = {
      isOpen: false,
    }
  }

  openImprint = () => {
    this.setState({isOpen:true});
    window.preventScrolling = true;
  }

  closeImprint = () => {
    this.setState({isOpen:false});
    window.preventScrolling = false;
  }

  render(){
    const componentClass = classnames(styles.component);
    const logoContainerClass = classnames(styles.logoContainer)
    const backgroundClass = classnames(styles.background);
    const impressumContainer = classnames(styles.impContainer, {isOpen: this.state.isOpen});

    return(
      <div className={componentClass}>
        <div className="content">
          <h2>Kontakt</h2> 
          <a className={styles.a} href="mailto:kontakt@frauenundfiktion.de"><span>kontakt@frauenundfiktion.de</span></a>
          <a className={styles.a} href="https://www.facebook.com/frauenundfiktion/" target="_blank"><span>facebook</span></a>
        </div>
        <div className={logoContainerClass}>
          <Logo/>
          <a onMouseDown={this.openImprint}><h4>Impressum</h4></a>
        </div>
        <div className={impressumContainer}>
          <div className="close" onMouseDown={this.closeImprint}><i className="material-icons">close</i></div>

        </div>
        <ParallaxContainer className={backgroundClass} speed={0.4}>
          <img src={KontaktImage} srcSet={KontaktImageHighRes}/>
        </ParallaxContainer>
      </div>
    )
  }
};