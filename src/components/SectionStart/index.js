'use strict'
'use extensible'

import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import {Link} from 'react-router';

export default class SectionStart extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const componentClass = classnames(styles.component);
    return(
      <div className={componentClass}>
        <h1>
          <Link to="/frauen">Frauen</Link> und <Link to="/lust">Fiktion</Link> erproben an der Schnittstelle von Theorie und
          Theater alternative Entwürfe von
          Frau-Sein.
        </h1>
      </div>
    )
  }
};