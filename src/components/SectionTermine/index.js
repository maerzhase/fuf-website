'use strict'
'use extensible'

import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';


const DateLI = (props) => {
  const {date, title, location,link} = props;
  const liClass = classnames(styles.li);
  return(
    <li className={liClass}>
      <div className="flex">
        <div className="date">{date}</div>
        <div>{title},{location}</div>
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
        <h2>Aufführungen 2016 / 2017</h2>
        <ul>
          <DateLI date="Mi 08/03/2017"
                  title="International Women's Day"
                  location="Hannover"/>
          <DateLI date="Mi 20/03/2016"
                  title="Lichthof Theater"
                  location="Hamburg"/>
          <DateLI date="Mi 19/11/2016"
                  title="Lichthof Theater"
                  location="Hamburg"/>
          <DateLI date="Mi 18/11/2016"
                  title="Lichthof Theater"
                  location="Hamburg"/>
                  
        </ul>
      </div>
    )
  }
};