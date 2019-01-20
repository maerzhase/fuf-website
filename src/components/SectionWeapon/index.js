'use strict'
'use extensible'

import React from 'react';
import {Link,browserHistory} from 'react-router';
import classnames from 'classnames';
import styles from './style.scss';
import WeaponImage from '../../assets/images/weapon.jpg';
import WeaponImageHighRes from '../../assets/images/weapon.jpg';
import ParallaxContainer from '../ParallaxContainer';
import OverlaySection from '../OverlaySection';

// import img from '../../assets/images/weapon/weapon.jpg';
import img1 from '../../assets/images/weapon/1.jpg';
import img2 from '../../assets/images/weapon/2.jpg';
import img3 from '../../assets/images/weapon/3.jpg';
import img4 from '../../assets/images/weapon/4.jpg';
import img5 from '../../assets/images/weapon/5.jpg';
import img6 from '../../assets/images/weapon/6.jpg';
import img7 from '../../assets/images/weapon/7.jpg';
import img8 from '../../assets/images/weapon/8.jpg';

const media = [
  // {
  //   type: 'image',
  //   hd: img,
  //   retina: img,
  // },
  {
    type: 'embed',
    component: <iframe
      src="https://player.vimeo.com/video/309847175"
      frameBorder="0"
      allowFullScreen
    />
  },
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
  {
    type: 'image',
    hd: img5,
    retina: img5,
  },
  {
    type: 'image',
    hd: img6,
    retina: img6,
  },
  {
    type: 'image',
    hd: img7,
    retina: img7,
  },
  {
    type: 'image',
    hd: img8,
    retina: img8,
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

export default class WeaponSection extends React.Component {

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
    this.context.router.push('/weapon/details')
  }

  _onCloseOverlay = () => {
    this.context.router.push('/weapon')
  }

  _onToggleGallery = (open) => {
    if (open) {
      this.context.router.push('/weapon/details/1')
    } else {
      this.context.router.push('/weapon/details')
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
          <img src={WeaponImage} srcSet={WeaponImageHighRes}/>
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
            <h1>Frauen und Fiktion #3</h1>
            <h4>You Are A Weapon!</h4>
            <div className="quote">
            "Gewalt passiert im Schweigen. Gewalt funktioniert deswegen sehr gut, weil nicht darüber geredet wird. Und genausowenig wird über Geschichten gesprochen, in denen sich Menschen erfolgreich gegen Gewalt zur Wehr gesetzt haben."
            </div>
            <div className="quote">
              „Wir bewegen uns in einem gewaltvollen System und ich möchte gerne, dass es diese Gewalt nicht mehr gibt. Und gleichzeitig merke ich: dass ich mit einer immerzu pädagogisch wertvollen pazifistischen Haltung nicht mehr weiter komme und mir zu gestatten auch mal gewalttätig zu sein, ein Bruch in diesem System ist - und das finde ich wichtig und richtig!"
            </div>
            <div className="abstract">
             Frauen und Fiktion porträtieren in YOU ARE A WEAPON! Angreiferinnen. Ihre schweißtreibende Auseinandersetzung basiert auf biografischen Interviews mit Expertinnen wie einer Selbstverteidigungs-Trainerin, einer Kneipenwirtin, einer Anti-Aggressionstrainerin, einer MMA-Kämpferin u.a.. Mit drei von ihnen und der Musikerin L. Krüger, verhandeln Frauen und Fiktion Perspektiven, die sich durch körperliches Empowerment ergeben. Sie berichten von Ohnmachtserlebnissen, Vorbildfiguren und Selbstermächtigung durch Training. Während sie die Gewalt tanzen, verwandelt sich die Bühne von einem unberechenbaren Schlachtfeld zu einem geschützten Trainingsraum. Durch Geschichten über wehrhaftes Handeln entstehen dabei alternative Bilder von Weiblichkeit.             </div>
            <div className="credits">
              Von und mit Frauen und Fiktion (Anja Kerschkewicz / Eva Kessler / Felina Levits / Paula Reissig ) / L. Krüger / Idalia Nwaimo / Birgit Schley / Lenza Severin // Musik L. Krüger // Bühne und Kostüme Felina Levits // Assistenz Florence Fausch // Licht/Technik Stephan Mäusel // Beratung Produktion Zwei Eulen // Outside Eye Helen Schröder / Anne Brammen
              <br/>
              Produktion Frauen und Fiktion // Koproduktion Theaterdiscounter Berlin
            </div>
            <div className="support">
              Gefördert durch Fonds Darstellende Künste / Hamburgische Kulturstiftung / Künstlerhaus Lukas
            </div>
          </div>
        </OverlaySection>
      </div>
    )
  }
};

WeaponSection.defaultProps = {
  title: "You Are A Weapon!",
  id: 3,
  overlayOpen: false,
  galleryOpen:false
}

WeaponSection.contextTypes = {
  router: React.PropTypes.object,
}