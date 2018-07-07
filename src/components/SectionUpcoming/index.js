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
    date:'06.09.2018',
    link:'https://www.lichthof-theater.de/event-reader/events/you-are-a-weapon.html',
    title:'You Are A Weapon!',
    text:'Hamburg Showing Lichthof Theater Hamburg',
  },
  {
    date:'14.12.2018',
    link:'#',
    title:'You Are A Weapon!',
    text:'Premiere Theaterdiscounter Berlin',
  },
  {
    date: '15.12.2018',
    link: '#',
    title:'You Are A Weapon!',
    text:'Aufführung Theaterdiscounter Berlin',
  },
  {
    date: '16.12.2018',
    link: '#',
    title: 'You Are A Weapon!',
    text: 'Aufführung Theaterdiscounter Berlin',
  },
  {
    date: 'Mai 2019',
    link: '#',
    title: 'You Are A Weapon!',
    text: 'Gastspiel Theater Oberhausen',
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