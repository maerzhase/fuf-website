'use strict'
'use extensible'

import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import LustImage from '../../assets/images/lust.jpg';
import LustImageHighRes from '../../assets/images/lust_highres.jpg';
import ParallaxContainer from '../ParallaxContainer';

const ContentToggle = (props) => {
  const {title,id} = props;
  const toggleClass = classnames(styles.toggle);
  return(
    <div className={toggleClass}>
      <h1>{title}</h1>
      <label>{`# ${("0"+id).slice(-2)}`}</label>
    </div>
  )
}

export default class SectionLust extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const {title,id} = this.props;
    const componentClass = classnames(styles.component);
    const backgroundClass = classnames(styles.background);
    return(
      <div className={componentClass}>
        <ContentToggle title={title} id={id}/>
        <ParallaxContainer className={backgroundClass} speed={0.3}>
          <img src={LustImage} srcSet={LustImageHighRes}/>
        </ParallaxContainer>
      </div>
    )
  }
};

SectionLust.defaultProps = {
  title: "Lust",
  id: 2,
}