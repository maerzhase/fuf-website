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
    date: '09.03.2018',
    link: 'https://www.theater-oberhausen.de/programm/stuecke.php?SID=722',
    title: 'ANGREIFEN!',
    text: 'Feministisches Minifestival | Theater Oberhausen',
  },
  {
    date: '22.03.2019',
    link: ' https://www.frauenmaerz.de/?fbclid=IwAR2t3PJyvQ9Uuzn4HRsHp6DI95wRMHYQ1pDDATIDixpXCrRZ7veviBCNuqE',
    title: 'Manifest für einen feministischen Führungsstil',
    text: 'Workshop | Frauenmärz Berlin',
  },
  {
    date: '03.05.2019',
    link: '  http://www.lichthof-theater.de/event-reader/events/stadttheater2.html',
    title: 'fuerGLAMOURsorgen',
    text: 'Lichthof Theater Hamburg',
  },
  {
    date: '04.05.2019',
    link: '  http://www.lichthof-theater.de/event-reader/events/stadttheater2.html',
    title: 'fuerGLAMOURsorgen',
    text: 'Lichthof Theater Hamburg',
  },
  {
    date: '05.05.2019',
    link: '  http://www.lichthof-theater.de/event-reader/events/stadttheater2.html',
    title: 'fuerGLAMOURsorgen',
    text: 'Lichthof Theater Hamburg',
  },
  {
    date: 'August 2019',
    link: '#',
    title: 'CARE 3.0 | Premiere',
    text: 'Treibstoff Theatertage Basel',
  }
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