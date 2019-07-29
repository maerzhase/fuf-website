'use strict'
'use extensible'

import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';

const EventLI = (props) => {
  const {date, text, title, link} = props;
  const liClass = classnames(styles.li);
  return(
    <li  className={liClass}>
      <div className="flex">
        <div className="date">{date}</div>
        <div className="title">{title}</div>
        <div className="location">{text}</div>
        {
          link !== '#' &&
          <div className={"tickets"}><a target="_blank"href={link}>Link</a></div>
        }
      </div>
    </li>
  )
}

const events = [
  {
    date: '27.08.2019',
    link: 'https://www.treibstoffbasel.ch/produktionen/care',
    title: 'CARE 3.0',
    text: 'Premiere Treibstoff Theatertage Basel/junges Theater Basel',
  },
  {
    date: '29.08.2019',
    link: 'https://www.treibstoffbasel.ch/produktionen/care',
    title: 'CARE 3.0',
    text: 'Premiere Treibstoff Theatertage Basel/junges Theater Basel',
  },
  {
    date: '31.08.2019',
    link: 'https://www.treibstoffbasel.ch/produktionen/care',
    title: 'CARE 3.0',
    text: 'Premiere Treibstoff Theatertage Basel/junges Theater Basel',
  },

];


export default class SectionTermine extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const componentClass = classnames(styles.component)
    return(
      <div className={componentClass}>
        <h2>Upcoming</h2>
        <ul>
          {
            events.map((d, i) => {
              return <EventLI key={i} {...d} />
            })
          }
        </ul>
      </div>
    )
  }
};