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
    return(
      <div>
          <h1>
          <Link to="/frauen">Frauen</Link> und <Link to="/fiktion">Fiktion</Link> erobern alternative
          der Schnittstelle von Theorie und
          Theater alternative Entwürfe von
          Frau-Sein.
          </h1>
      </div>
    )
  }
};