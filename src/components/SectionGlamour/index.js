'use strict'
'use extensible'

import React from 'react';
import {Link,browserHistory} from 'react-router';
import classnames from 'classnames';
import styles from './style.scss';
import glamourImage from '../../assets/images/glamour.png';
import glamourImageHighRes from '../../assets/images/glamour.png';
import ParallaxContainer from '../ParallaxContainer';
import OverlaySection from '../OverlaySection';

// import img from '../../assets/images/weapon/weapon.jpg';
import img1 from '../../assets/images/glamour/glamour_01.jpg';
import img2 from '../../assets/images/glamour/glamour_02.jpg';
import img3 from '../../assets/images/glamour/glamour_03.jpg';
import img4 from '../../assets/images/glamour/glamour_04.jpg';

const media = [
  {
    type: 'image',
    hd: img1,
    retina: img1,
  },
  {
    type: 'image',
    hd: img2,
    retina: img2,
  },
  {
    type: 'image',
    hd: img3,
    retina: img3,
  },
  {
    type: 'image',
    hd: img4,
    retina: img4,
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

export default class GlamourSection extends React.Component {

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

  _openOverlay = (e) => {
   // document.body.style.overflowY ="hidden";
   // window.preventScrolling = true;
    this.context.router.push('/glamour/details')
  }

  _onCloseOverlay = () => {
    this.context.router.push('/glamour')
  }

  _onToggleGallery = (open) => {
    if (open) {
      this.context.router.push('/glamour/details/1')
    } else {
      this.context.router.push('/glamour/details')
    }
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
          <img src={glamourImage} srcSet={glamourImageHighRes}/>
        </ParallaxContainer>
        <OverlaySection
          onClose={this._onCloseOverlay}
          onToggleGallery={this._onToggleGallery}
          media={media}
          open={overlayOpen}
          galleryOpen={galleryOpen}
          credits=""
        >
          <div className={overlayContentClass}>
            <h1>Frauen und Fiktion #4</h1>
            <h4>fuerGLAMOURsorgen</h4>
            <div className="abstract">
Seid ihr bereit für den Frühjahrsputz? Wir misten mit euch aus. Trennt euch vom staubigen Klischee, dass Frauen bestimmte Arbeit leichter von der Hand geht.
Kinder zur Welt bringen oder betreuen, alte und kranke Menschen pflegen: wie lustvoll, erfüllend und wertvoll diese Arbeit ist, erfahren wir von Menschen, die professionell Sorgearbeit leisten. Entlang ihrer Geschichten stellen wir die Vorstellung, dass Sorgearbeit stärker mit Frauen verknüpft ist in Frage und erfinden mit der Kunst des Drag unterschiedlichste Rollen.
In einer Performance mit fürsorglichen Drag Kings und Queens, wird Sorgearbeit als Zentrum des Begehrens inszeniert; glamourös und humorvoll aufgeladen und gefeiert. We Care to Shine! We Are Glamour!
            </div>
            <div className="credits">
              Von Frauen und Fiktion & Menschen in Sorge-Berufen / Mit: Robert Craven, Christina Geiger, Jonas Mahari, Anja Kerschkewicz, Arnis Levits, Felina Levits, Paula Reissig, Sahra Abbassi / Interviewpartner*innen: Lena Biermann, Cesar Bony, Christiane Meier (www.sortiergut.de), Anastasia Reichart
            </div>
          </div>
        </OverlaySection>
      </div>
    )
  }
};

GlamourSection.defaultProps = {
  title: "GLAMOUR",
  id: 4,
  overlayOpen: false,
  galleryOpen:false
}

GlamourSection.contextTypes = {
  router: React.PropTypes.object,
}