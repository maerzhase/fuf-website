'use strict'
'use extensible'

import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import FiktionImage from '../../assets/images/fiktion.jpg';
import FiktionImageHighRes from '../../assets/images/fiktion_highres.jpg';
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

export default class SectionFiktion extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const {title,id} = this.props;
    const componentClass = classnames(styles.component);
    const backgroundClass = classnames(styles.background);
    return(
      <div className={componentClass} >
        <ContentToggle title={title} id={id}/>
        <ParallaxContainer className={backgroundClass} speed={0.4}>
          <img src={FiktionImage} srcSet={FiktionImageHighRes}/>
        </ParallaxContainer>
      </div>
    )
  }
};

SectionFiktion.defaultProps = {
  title: "Fiktion",
  id: 1,
}