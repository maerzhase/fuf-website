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

import img from '../../assets/images/weapon/weapon.jpg';

const media = [
  {
    type: 'image',
    hd: img,
    retina: img,
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
            <div className="abstract">
              Die Theatermacherinnen von Frauen und Fiktion porträtieren in ihrer schweißtreibenden Performance You Are A Weapon! Angreiferinnen. Sie berichten von Ohnmachtserlebnissen, Vorbildfiguren und Selbstermächtigung durch Training. Wehrhaftes Handeln wird nicht als ‚failure of femininity‘ dargestellt, stattdessen werden mit kraftvollen Bewegungen und Geschichten alternative Bilder von Weiblichkeit erzeugt. Während die Performerinnen die Gewalt tanzen, verwandelt sich die Bühne von einem unberechenbaren Schlachtfeld zu einem geschützten Trainingsraum.
              Die performative Auseinandersetzung basiert auf intensiven Körpertrainings sowie biografischen Interviews mit Expertinnen (Selbstverteidigungs-Trainerinnen, Polizistinnen, Verbrecherinnen). Durch sie werden neue Perspektiven aufgezeigt, die sich durch Empowerment ergeben.
            </div>
            <div className="credits">
              Von und mit: Anja Kerschkewicz, Eva Kessler, Felina Levits, Paula Reissig <br />
              Musik: plastiq <br />
              Beratung Produktion: Zwei Eulen
            </div>
            <div className="support">
              Gefördert durch: Fonds Darstellende Künste, Hamburgische Kulturstiftung, Künstlerhaus Lukas
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