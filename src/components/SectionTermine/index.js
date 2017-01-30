'use strict'
'use extensible'

import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';


const DateLI = (props) => {
  const {date, title, location} = props;
  const liClass = classnames(styles.li);
  return(
    <li className={liClass}>
      <div className="flex">
        <div>{date}</div>
        <div>{title}</div>
        <div>{location}</div>
      </div>
    </li>
  )
}

export default class SectionTermine extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const componentClass = classnames(styles.component)
    return(
      <div className={componentClass}>
        <h2>Termine</h2>
        <ul>
          <DateLI title="blabla"
                  date="12.01.15"
                  location="Kampnagel (Hamburg)"/>
                  
        </ul>
      </div>
    )
  }
};