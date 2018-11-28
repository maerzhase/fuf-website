'use strict'
'use extensible'

import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';


const DateLI = (props) => {
  const {date, time, text, title, location,link} = props;
  const liClass = classnames(styles.li);
  return(
    <li  className={liClass}>
      <div className="flex">
        <div className="date">{date}</div>
        <div className="title">{title}</div>
        <div className="location">{location}</div>
        <div className="tickets"><a target="_blank"href={link}>LINK</a></div>
      </div>
    </li>
  )
}

const dates = [
  {
    date:"18.03.2017",
    time:"20h",
    location: "Theaterdiscounter Berlin",
    text:"",
    link:"https://theaterdiscounter.de/stuecke/lust",
  },
  {
    date:"17.03.2017",
    time:"20h",
    location: "Theaterdiscounter Berlin",
    text:"+ Peepshow-Installation ab 19h (Alisa Tretau)",
    link:"https://theaterdiscounter.de/stuecke/lust",
  },
  {
    date:"17.03.2017",
    time:"12-16h",
    location: "Workshop im Tatwerk Berlin",
    text:"",
    link:"http://www.tatwerk-berlin.de/de/programm/workshops/237-lust",
  },
  {
    date:"16.03.2017",
    time:"20h",
    location: "Theaterdiscounter Berlin",
    text:"",
    link:"https://theaterdiscounter.de/stuecke/lust",
  },
  {
    date:"12.03.2017",
    time:"19.30h",
    location: "Lichthof Theater Hamburg",
    text:"",
    link:"http://www.lichthof-theater.de/event-reader/events/lust-478.html",
  },
  {
    date:"11.03.2017",
    time:"20.15h",
    location: "Lichthof Theater Hamburg",
    text:"",
    link:"http://www.lichthof-theater.de/event-reader/events/lust-478.html",
  },
  {
    date:"09.03.2017",
    time:"21h",
    location: "Pavillon Hannover",
    text:"+ Doppelvorstellung mit 'Männer fressen' ab 19h",
    link:"http://pavillon-hannover.de/programm/veranstaltung/?nr=22243",
  },
  {
    date:"09.03.2017",
    time:"11-16h",
    location: "Workshop TuT - Schule für Tanz, Clown und Theater",
    text:"",
    link:"http://www.das-tut.de/de/programm/2017/03/09/Lust-1982",
  },
  {
    date:"08.03.2017",
    time:"21h",
    location: "Pavillon Hannover",
    text:"+ Doppelvorstellung mit 'Männer fressen' ab 19h",
    link:"http://pavillon-hannover.de/programm/veranstaltung/?nr=22231",
  }
]

const EventLI = (props) => {
  const {date, text, title, link} = props;
  const liClass = classnames(styles.li);
  return(
    <li  className={liClass}>
      <div className="flex">
        <div className="date">{date}</div>
        <div className="title">{title}</div>
        <div className="location">{text}</div>
        <div className="tickets"><a target="_blank"href={link}>Link</a></div>
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
    date:'18.08.2018',
    link:'http://www.kuenstlerhaus-lukas.de/?Veranstaltungen',
    title:'Showing',
    text:'Künstlerhaus Lukas',
  },
  {
    date:'08.06.2018',
    link:'http://www.berlin-diagonale.de/2018/',
    title:'Präsentation',
    text:'PAF - Berlin Diaognale',
  },
  {
    date: '08.03.2018',
    link:'http://www.theater-oberhausen.de/programm/extras.php?SID=626',
    title:'Workshop',
    text:'Theater Oberhausen',
  },
  {
    date: '20.01.2018',
    link: 'https://performancesvonweiblichkeit.wordpress.com/programm-2017',
    title: 'Vortrag',
    text: 'Universität der Künste Berlin',
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
        <h2>Termine</h2>
        <ul>
          {
            events.map((d, i) => {
              return <EventLI key={i} {...d} />
            })
          }
        </ul>
        <ul>
          {dates.map((d,i)=>{
            return <DateLI key={i} {...d} title="Lust"/>
          })}
        </ul>
      </div>
    )
  }
};