'use strict'
'use extensible'

import React from 'react';
import {Link} from 'react-router'
import autobind from 'autobind-decorator';
import classnames from 'classnames';
import styles from './style.scss';
import LustImage from '../../assets/images/lust.jpg';
import LustImageHighRes from '../../assets/images/lust_highres.jpg';
import ParallaxContainer from '../ParallaxContainer';

import OverlaySection from '../OverlaySection';

import lust1 from '../../assets/images/lust/lust_gallery_01.jpg'
import lust1_high from '../../assets/images/lust/lust_gallery_01_highres.jpg'

const images = [
  {
    hd: lust1,
    retina: lust1_high,
  },
]


const ContentToggle = (props) => {
  const {title,id,onClick} = props;
  const toggleClass = classnames(styles.toggle);
  return(
    <div className={toggleClass} onMouseDown={onClick}>
      <h1>{title}</h1>
      <label>{`# ${("0"+id).slice(-2)}`}</label>
    </div>
  )
}

export default class SectionLust extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      ...nextProps
    })
  }

  @autobind
  _openOverlay(e){
    document.body.style.overflowY ="hidden";
    this.context.router.push('/lust/details')
  }

  @autobind
  _onCloseOverlay(){
    this.context.router.push('/lust')
  }

  render(){
    const {title,id} = this.props;
    const {overlayOpen,galleryOpen} = this.state;
    const componentClass  = classnames(styles.component);
    const backgroundClass = classnames(styles.background);
    const overlayContentClass    = classnames(styles.overlayContent);
    
    return(
      <div className={componentClass}>
        <ContentToggle title={title} id={id} onClick={this._openOverlay}/>
        <ParallaxContainer className={backgroundClass} speed={0.3}>
          <img src={LustImage} srcSet={LustImageHighRes}/>
        </ParallaxContainer>
        <OverlaySection onClose={this._onCloseOverlay} images={images} open={overlayOpen} credits="Fotos von Paula Reissig">
          <div className={overlayContentClass}>
            <h4>Frauen und Fiktion #2 <span>Lust</span></h4>
            <div className="abstract">
               Frauen und Fiktion überschreiten Schamgrenzen und geben der alltäglichen Lust eine Bühne. Ob dark dirty talk, eine Sammlung der Sexuellen Identitäten oder Perlen perverser Sexphantasien - sie umarmen die Stereotypen und erweitern gemeinsam mit ihnen die erogenen Zonen. Von Foucault bis Tinder machen sie mehr als einen intellektuellen Striptease und füllen dabei euer Bildarchiv mit verqueerten Bildern der Lust. Ein Gespräch. Ein Tanz. Eine Einladung auf den spannenden Spielplatz der weiblichen Lust.
            </div>
            <div className="link"><Link to="/termine">Termine / Tickets</Link></div>
            <div className="credits">
              Performance Eva Kessler und Patricia Carolin Mai // Eine Arbeit von Frauen und Fiktion: Anja Kerschkewicz & Eva Kessler // Choreografie: Patricia Carolin Mai // Konzeptionelle Mitarbeit & mit Texten von: Elsa-Sophie Donata Jach // Bühne und Kostüme: Felina Levits // mit Musik von: plastiq // Technik und Licht: Sönke C. Herm // Dramaturgische Mitarbeit: Alisa Tretau // Beratung Produktion: Zwei Eulen
            </div>
            <div className="support">
              Gefördert durch die Kulturbehörde der Freien und Hansestadt Hamburg, die Rudolf Augstein Stiftung, die Hamburgische Kulturstiftung, die LICHTHOF Stiftung, die Gerda-Weiler-Stiftung und Gängeviertel e.V. 
            </div>
          </div>
        </OverlaySection>

      </div>
    )
  }
};

SectionLust.defaultProps = {
  title: "Lust",
  id: 2,
  overlayOpen: false,
  galleryOpen:false
}

SectionLust.contextTypes = {
  router: React.PropTypes.object,
}