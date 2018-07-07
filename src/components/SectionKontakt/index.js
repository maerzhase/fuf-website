'use strict'
'use extensible'

import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import Logo from '../Logo';
import KontaktImage from '../../assets/images/kontakt.jpg';
import KontaktImageHighRes from '../../assets/images/kontakt_highres.jpg';
import ParallaxContainer from '../ParallaxContainer';
import Impressum from './Impressum';
import Datenschutz from './Datenschutz';

export default class SectionKontakt extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      impressumOpen: false,
      datenschutzOpen: false,
    }
  }

  openImprint = () => {
    this.setState({impressumOpen:true});
   // window.preventScrolling = true;
  }

  closeImprint = () => {
    this.setState({impressumOpen:false});
   // window.preventScrolling = false;
  }

  openDatenschutz = () => {
    this.setState({datenschutzOpen:true});
   // window.preventScrolling = true;
  }

  closeDatenschutz = () => {
    this.setState({datenschutzOpen:false});
   // window.preventScrolling = false;
  }

  render(){
    const componentClass = classnames(styles.component);
    const logoContainerClass = classnames(styles.logoContainer)
    const backgroundClass = classnames(styles.background);
    const impressumContainer = classnames(styles.impContainer, {isOpen: this.state.impressumOpen});
    const datenschutzContainer = classnames(styles.impContainer, {isOpen: this.state.datenschutzOpen});

    return(
      <div className={componentClass}>
        <div>
          <h2>Kontakt</h2>
          <a className={styles.a} href="mailto:kontakt@frauenundfiktion.de"><span>kontakt@frauenundfiktion.de</span></a>
          <a className={styles.a} href="https://www.facebook.com/frauenundfiktion/" target="_blank"><span>frauenundfiktion auf facebook</span></a>
        </div>
        <div className={logoContainerClass}>
          <Logo/>
          <a onMouseDown={this.openImprint}><h4>Impressum</h4></a>
          <a onMouseDown={this.openDatenschutz}><h4>Datenschutz</h4></a>
        </div>
        <div className={impressumContainer}>
          <div className="close" onMouseDown={this.closeImprint}><i className="material-icons">close</i></div>
          <Impressum />
        </div>
        <div className={datenschutzContainer}>
          <div className="close" onMouseDown={this.closeDatenschutz}><i className="material-icons">close</i></div>
          <Datenschutz />
        </div>
        <ParallaxContainer className={backgroundClass} speed={0.4}>
          <img src={KontaktImage} srcSet={KontaktImageHighRes}/>
        </ParallaxContainer>
      </div>
    )
  }
};