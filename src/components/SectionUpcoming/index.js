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
    date: '18.-19.05.2019',
    title: 'King Up Your Life',
    text: 'Workshop Roxy Birsfelden',
    link: 'https://www.gaybasel.org/events/11475/king-up-your-life',
  },
  {
    date: '30.05.2019',
    title: 'You Are A Weapon!',
    text: 'Aufführung Performing Arts Festival Berlin',
    link: 'https://performingarts-festival.de/de/2019/programm/you-are-weapon',
  },
  {
    date: 'August 2019',
    link: '#',
    title: 'CARE 3.0',
    text: 'Premiere Treibstoff Theatertage Basel',
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