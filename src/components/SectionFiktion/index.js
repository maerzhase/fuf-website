'use strict'
'use extensible'

import React from 'react';
import autobind from 'autobind-decorator';
import classnames from 'classnames';
import styles from './style.scss';
import FiktionImage from '../../assets/images/fiktion.jpg';
import FiktionImageHighRes from '../../assets/images/fiktion_highres.jpg';
import ParallaxContainer from '../ParallaxContainer';
import OverlaySection from '../OverlaySection';



import fiktion1 from '../../assets/images/fiktion/fiktion_gallery_01.jpg'
import fiktion1_high from '../../assets/images/fiktion/fiktion_gallery_01_highres.jpg'

const images = [
  {
    hd: fiktion1,
    retina: fiktion1_high,
  },
]


const ContentToggle = (props) => {
  const {title,id,onClick} = props;
  const toggleClass = classnames(styles.toggle);
  return(
    <div className={toggleClass} onMouseDown={(e)=>{onClick(e)}}>
      <h1>{title}</h1>
      <label>{`# ${("0"+id).slice(-2)}`}</label>
    </div>
  )
}

export default class SectionFiktion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
    }
  }

  @autobind
  _openOverlay(e){
    document.body.style.overflowY ="hidden";
    this.setState({
      overlayOpen: true,
    })
  }


  render(){
    const {title,id} = this.props;
    const {overlayOpen,galleryOpen} = this.state;
    const componentClass = classnames(styles.component);
    const backgroundClass = classnames(styles.background);
    const overlayContentClass    = classnames(styles.overlayContent);

    return(
      <div className={componentClass} >
        <ContentToggle title={title} id={id} onClick={this._openOverlay}/>
        <ParallaxContainer className={backgroundClass} speed={0.4}>
          <img src={FiktionImage} srcSet={FiktionImageHighRes}/>
        </ParallaxContainer>
        <OverlaySection images={images} open={overlayOpen}>
          <div className={overlayContentClass}>
            <h4>Frauen und Fiktion #1 <span>Fiktion</span></h4>
            <div className="abstract">
              War sie tatsächlich so geboren, oder hatte sie ihren Schwanz bei einem Unfall verloren?  In Fiktion lockt uns die Vortragende mit Fragmenten aus Virginia Woolfs A Room Of One’s Own, einer Manx Katze und einem Augenzwinkern in ein Labyrinth aus literarischen Frauenbildern. Was ist dieses Eva? Frauen und Fiktion spielen mit gängigen Rollen-Klischees und lassen zwischen den Zeilen feministische Gedanken aufblitzen.            </div>
            <div className="credits">
            </div>
            <div className="support">
            </div>
          </div>
        </OverlaySection>
      </div>
    )
  }
};

SectionFiktion.defaultProps = {
  title: "Fiktion",
  id: 1,
  overlayOpen: false,
  galleryOpen:false
}