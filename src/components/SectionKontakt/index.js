'use strict'
'use extensible'

import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';

export default class SectionKontakt extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <h2>Kontakt</h2> 
        <div>kontakt@frauenundfiktion.de</div>
        <div>facebook</div>
      </div>
    )
  }
};