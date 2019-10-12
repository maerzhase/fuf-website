import moment from 'moment';

const dates = [
  {
    date: '06.03.2020',
    title: '(save me) not',
    text: 'Premiere',
    location: 'Theater Oberhausen',
    link: 'https://www.theater-oberhausen.de/programm/stuecke.php?SID=773=',
  },
  {
    date: '27.08.2019',
    link: 'https://www.treibstoffbasel.ch/produktionen/care',
    title: 'CARE 3.0',
    text: 'Premiere',
    location: 'Treibstoff Theatertage Basel/junges Theater Basel',
  },
  {
    date: '29.08.2019',
    link: 'https://www.treibstoffbasel.ch/produktionen/care',
    title: 'CARE 3.0',
    text: 'Premiere',
    location: 'Treibstoff Theatertage Basel/junges Theater Basel',
  },
  {
    date: '31.08.2019',
    link: 'https://www.treibstoffbasel.ch/produktionen/care',
    title: 'CARE 3.0',
    text: 'Premiere',
    location: 'Treibstoff Theatertage Basel/junges Theater Basel',
  },
  {
    date: '18.05.2019',
    title: 'King Up Your Life',
    text: 'Workshop',
    location: 'Roxy Birsfelden',
    link: 'https://www.gaybasel.org/events/11475/king-up-your-life',
  },
  {
    date: '19.05.2019',
    title: 'King Up Your Life',
    text: 'Workshop',
    location: 'Roxy Birsfelden',
    link: 'https://www.gaybasel.org/events/11475/king-up-your-life',
  },
  {
    date: '30.05.2019',
    title: 'You Are A Weapon!',
    text: 'Aufführung',
    location: 'Performing Arts Festival Berlin',
    link: 'https://performingarts-festival.de/de/2019/programm/you-are-weapon',
  },
  {
    date: '05.05.2019',
    link:
      'http://www.lichthof-theater.de/event-reader/events/stadttheater2.html',
    title: 'fuerGLAMOURsorgen',
    location: 'Lichthof Theater Hamburg',
  },
  {
    date: '04.05.2019',
    link:
      'http://www.lichthof-theater.de/event-reader/events/stadttheater2.html',
    title: 'fuerGLAMOURsorgen',
    location: 'Lichthof Theater Hamburg',
  },
  {
    date: '03.05.2019',
    link:
      'http://www.lichthof-theater.de/event-reader/events/stadttheater2.html',
    title: 'fuerGLAMOURsorgen',
    location: 'Lichthof Theater Hamburg',
  },
  {
    date: '22.03.2019',
    link:
      ' https://www.frauenmaerz.de/?fbclid=IwAR2t3PJyvQ9Uuzn4HRsHp6DI95wRMHYQ1pDDATIDixpXCrRZ7veviBCNuqE',
    title: 'Manifest für einen feministischen Führungsstil',
    text: 'Workshop',
    location: 'Frauenmärz Berlin',
  },
  {
    date: '09.03.2018',
    link: 'https://www.theater-oberhausen.de/programm/stuecke.php?SID=722',
    title: 'ANGREIFEN!',
    text: 'Workshop Feministisches Minifestival',
    location: 'Theater Oberhausen',
  },
  {
    date: '25.01.2019',
    link:
      'https://www.kampnagel.de/de/programm/prozessual-erzeugte-texte-im-gegenwartstheater/?datum=&id_datum=7294',
    title: 'YOU ARE A WEAPON!',
    text: 'Vortrag TOGETHERTEXT',
    location: 'Kampnagel',
  },
  {
    date: '16.12.2018',
    link: 'https://theaterdiscounter.de/stuecke/you-are-a-weapon',
    title: 'You Are A Weapon!',
    text: 'Aufführung',
    location: 'Theaterdiscounter Berlin',
  },
  {
    date: '15.12.2018',
    link: 'https://theaterdiscounter.de/stuecke/you-are-a-weapon',
    title: 'You Are A Weapon!',
    text: 'Aufführung',
    location: 'Theaterdiscounter Berlin',
  },
  {
    date: '14.12.2018',
    link: 'https://theaterdiscounter.de/stuecke/you-are-a-weapon',
    title: 'You Are A Weapon!',
    text: 'Premiere Theaterdiscounter Berlin',
    location: 'Theaterdiscounter Berlin',
  },
  {
    date: '06.09.2018',
    link:
      'https://www.lichthof-theater.de/event-reader/events/you-are-a-weapon.html',
    title: 'You Are A Weapon!',
    text: 'Hamburg Showing',
    location: 'Lichthof Theater Hamburg',
  },
  {
    date: '18.08.2018',
    link: 'http://www.kuenstlerhaus-lukas.de/?Veranstaltungen',
    title: 'You Are A Weapon!',
    text: 'Showing',
    location: 'Künstlerhaus Lukas',
  },
  {
    date: '08.03.2018',
    link: 'http://www.theater-oberhausen.de/programm/extras.php?SID=626',
    title: 'MANIFEST FÜR EINEN FEMINISTISCHEN FÜHRUNGSSTIL',
    text: 'Workshop',
    location: 'Theater Oberhausen',
  },
  {
    date: '20.01.2018',
    link: 'https://performancesvonweiblichkeit.wordpress.com/programm-2017',
    title: 'Performances von [weiblichkeit]',
    text: 'Vortrag',
    location: 'Universität der Künste Berlin',
  },
  {
    date: '08.06.2018',
    title: 'Lust',
    link: 'http://www.berlin-diagonale.de/2018/',
    text: 'Präsentation',
    location: 'PAF - Berlin Diaognale',
  },
  {
    date: '18.03.2017',
    time: '20h',
    title: 'Lust',
    location: 'Theaterdiscounter Berlin',
    text: '',
    link: 'https://theaterdiscounter.de/stuecke/lust',
  },
  {
    date: '17.03.2017',
    time: '20h',
    title: 'Lust',
    location: 'Theaterdiscounter Berlin',
    text: '+ Peepshow-Installation ab 19h (Alisa Tretau)',
    link: 'https://theaterdiscounter.de/stuecke/lust',
  },
  {
    date: '17.03.2017',
    time: '12-16h',
    title: 'Lust',
    location: 'Workshop im Tatwerk Berlin',
    text: '',
    link: 'http://www.tatwerk-berlin.de/de/programm/workshops/237-lust',
  },
  {
    date: '16.03.2017',
    time: '20h',
    title: 'Lust',
    location: 'Theaterdiscounter Berlin',
    text: '',
    link: 'https://theaterdiscounter.de/stuecke/lust',
  },
  {
    date: '12.03.2017',
    time: '19.30h',
    title: 'Lust',
    location: 'Lichthof Theater Hamburg',
    text: '',
    link: 'http://www.lichthof-theater.de/event-reader/events/lust-478.html',
  },
  {
    date: '11.03.2017',
    time: '20.15h',
    title: 'Lust',
    location: 'Lichthof Theater Hamburg',
    text: '',
    link: 'http://www.lichthof-theater.de/event-reader/events/lust-478.html',
  },
  {
    date: '09.03.2017',
    time: '21h',
    title: 'Lust',
    location: 'Pavillon Hannover',
    text: "+ Doppelvorstellung mit 'Männer fressen' ab 19h",
    link: 'http://pavillon-hannover.de/programm/veranstaltung/?nr=22243',
  },
  {
    date: '09.03.2017',
    time: '11-16h',
    title: 'Lust',
    location: 'Workshop TuT - Schule für Tanz, Clown und Theater',
    text: '',
    link: 'http://www.das-tut.de/de/programm/2017/03/09/Lust-1982',
  },
  {
    date: '08.03.2017',
    time: '21h',
    title: 'Lust',
    location: 'Pavillon Hannover',
    text: "+ Doppelvorstellung mit 'Männer fressen' ab 19h",
    link: 'http://pavillon-hannover.de/programm/veranstaltung/?nr=22231',
  },
];

const DATE_FORMAT = 'DD-MM-YYYY';

export default dates
  .sort((a, b) => {
    const dateA = moment(a.date, DATE_FORMAT);
    const dateB = moment(b.date, DATE_FORMAT);
    return dateB.toDate() - dateA.toDate();
  })
  .reduce(
    (acc, d) => {
      const now = moment.now();
      const date = moment(d.date, DATE_FORMAT);
      if (date.isBefore(now)) {
        acc.past.push(d);
      } else {
        acc.future.push(d);
      }
      return acc;
    },
    { past: [], future: [] },
  );