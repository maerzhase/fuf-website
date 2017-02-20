'use strict'
'use extensible'

import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';



const Frau = (props) =>{
  const {name,role} = props;
  return(
    <div className={styles.frau}>
      <div className={styles.h5}>{role}</div>
      <div className={styles.h1}>{name}</div>
    </div>
  )
}

const H1 = (props) => {
  const componentClass = classnames(props.className,styles.h1) 
  return(
    <div className={componentClass}>{props.children}</div>
  )
}

const H5 = (props) => {
  const componentClass = classnames(props.className,styles.h5) 
  return(
    <div className={componentClass}>{props.children}</div>
  )
}


export default class SectionFrauen extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const componentClass = classnames(styles.component);
    return(
      <div className={componentClass}>
        <H5 className={styles.sind}>FRAUEN UND FIKTION sind</H5>
        <H1><a href="http://www.anjakerschkewicz.com/">Anja Kerschkewicz</a></H1>
        <H5>Szenografin/Regisseurin</H5>
        <H1><a href="http://www.evakessler.com/EvasWebSite/Willkommen.html">Eva Kessler</a></H1>
        <H5>Theaterwissenschaflterin/Schauspielerin</H5>
        <H5 className={styles.collab}>Kollaborationen</H5>
        <H1><a href="https://vimeo.com/user45802127">Particia Carolin Mai</a></H1>
        <H5>Tänzerin/Choreografin</H5>
        <H1><a href="https://showcase.design.haw-hamburg.de/author/felina-levits/">Felina Levits</a></H1>
        <H5>Kostümbildnerin</H5>
      </div>
    )
  }
};