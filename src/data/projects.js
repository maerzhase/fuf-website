import { groupBy } from 'lodash';

const projects = [
  {
    num: 5,
    link: 'care',
    title: 'CARE 3.0',
    text: [
      `Frauen und Fiktion laden zu einem glamourösen Care-Contest ein. In einem Ballroom der besonderen Art treten fürsorgliche Figuren jenseits klarer Geschlechterrollen gegeneinander an. Sie battlen sich darin zu ernähren, sich zu kümmern, Geborgenheit zu geben, 'Nein' zu sagen, zuzuhören, geduldig zu sein. Wer ist der oder die ultimativ Sorgetragende? Auf der Basis von Interviews werden Erfahrungen von sorgetragenden Menschen verhandelt: Wer übernimmt hauptsächlich Sorgearbeit in unserer Gesellschaft? Welchen Stellenwert sollte sie einnehmen? Das Publikum ist aufgefordert ihre Favorit*innen anzufeuern. Es wird geputzt und getanzt, geboren, gestorben und gefeiert. We Care to Shine!`
    ],
    caption: [
      `VON: Frauen und Fiktion (Anja Kerschkewicz, Felina Levits, Paula Reissig, Eva Kessler)`,
      `MIT: Florence Fausch, Ariclenes Garcia aka AriGato St.Laurent, Jonas Mahari, Lina Krüger, Arnis Levits, Laetitia Reymond, Gregor Schuster, Marilyn Nova White, Kathrin Brogli`,
      `Licht: Heini Weber / Technik: Andrea Ercolani`,
      `INTERVIEWPARTNER*INNEN: Lara Austermann (Psychologin), Lena Biermann (Hebamme), Cesar Bony (Altenpfleger), Christina Fiebig (Einzelfallbetreuerin), S. Frazer (persönlicher Assistent), Ariclenes Garcia aka AriGato St.Laurent (Vouging Tänzer & ehemals Mother eines Vouging Houses), Carolina Gut (Theaterpädagogin und Gymnasiallehrerin), Odette Hella’Grand (Dragqueen), Teresa Hoffmann (Studentin), Benedikt Hülsbusch (Gesundheits-und Krankenpfleger), Hubert Lutz-Manser (Berufsfachschullehrer Allgemeinbildung), Christiane Meier (www.sortiergut.de), Barbara Metelska (diplom. Lehrerin und Psychologin, im Moment Mitarbeiterin im Pflegebereich), Ruth Pala (dipl. Pflegefachfrau FH), Pauline Schindler (Hebamme), Ben Simon (Klassenassistent in einer Schule für körperlich und geistig beeinträchtigte Kinder und Jugendliche), Daniel Simon (Diplomierter Pflegefachmann, Berufsschullehrer im Gesundheitswesen), Liz Rech (Regisseurin), Anastasia Reichart (Erzieherin), Barbara Rettenmund (Berufsschullehrerin), Ursula Saile (examinierte Krankenschwester), Gregor Schuster (Regisseur), Maike Tödter (Kulturmanagerin), Andrea Zimmermann (Geschlechterforscherin)`,
      `In Koproduktion mit Treibstoff`,
      `Gefördert durch: Recherchestipendium Berliner Senatsverwaltung für Kultur und Europa`,
    ],
  },
  {
    num: 4,
    link: 'glamour',
    title: 'FUERGLAMOURSORGEN',
    text: [
      `Seid ihr bereit für den Frühjahrsputz? Wir misten mit euch aus. Trennt euch vom staubigen Klischee, dass Frauen bestimmte Arbeit leichter von der Hand geht. Kinder zur Welt bringen oder betreuen, alte und kranke Menschen pflegen: wie lustvoll, erfüllend und wertvoll diese Arbeit ist, erfahren wir von Menschen, die professionell Sorgearbeit leisten. Entlang ihrer Geschichten stellen wir die Vorstellung, dass Sorgearbeit stärker mit Frauen verknüpft ist in Frage und erfinden mit der Kunst des Drag unterschiedlichste Rollen. In einer Performance mit fürsorglichen Drag Kings und Queens, wird Sorgearbeit als Zentrum des Begehrens inszeniert; glamourös und humorvoll aufgeladen und gefeiert. We Care to Shine! We Are Glamour!`,
    ],
    caption: [
      `Von Frauen und Fiktion & Menschen in Sorge-Berufen / Mit: Robert Craven, Christina Geiger, Jonas Mahari, Anja Kerschkewicz, Arnis Levits, Felina Levits, Paula Reissig, Sahra Abbassi / Interviewpartner*innen: Lena Biermann, Cesar Bony, Christiane Meier (www.sortiergut.de), Anastasia Reichart`,
    ],
  },
  {
    num: 3,
    link: 'weapon',
    title: 'YOU ARE A WEAPON',
    pre: [
     `"Gewalt passiert im Schweigen. Gewalt funktioniert deswegen sehr gut, weil nicht darüber geredet wird. Und genausowenig wird über Geschichten gesprochen, in denen sich Menschen erfolgreich gegen Gewalt zur Wehr gesetzt haben."`,
     `"Wir bewegen uns in einem gewaltvollen System und ich möchte gerne, dass es diese Gewalt nicht mehr gibt. Und gleichzeitig merke ich: dass ich mit einer immerzu pädagogisch wertvollen pazifistischen Haltung nicht mehr weiter komme und mir zu gestatten auch mal gewalttätig zu sein, ein Bruch in diesem System ist - und das finde ich wichtig und richtig!"`,
    ],
    text: [
      `Frauen und Fiktion porträtieren in YOU ARE A WEAPON! Angreiferinnen. Ihre schweißtreibende Auseinandersetzung basiert auf biografischen Interviews mit Expertinnen wie einer Selbstverteidigungs-Trainerin, einer Kneipenwirtin, einer Anti-Aggressionstrainerin, einer MMA-Kämpferin u.a.. Mit drei von ihnen und der Musikerin L. Krüger, verhandeln Frauen und Fiktion Perspektiven, die sich durch körperliches Empowerment ergeben. Sie berichten von Ohnmachtserlebnissen, Vorbildfiguren und Selbstermächtigung durch Training. Während sie die Gewalt tanzen, verwandelt sich die Bühne von einem unberechenbaren Schlachtfeld zu einem geschützten Trainingsraum. Durch Geschichten über wehrhaftes Handeln entstehen dabei alternative Bilder von Weiblichkeit.`
    ],
    caption: [
      `Von und mit Frauen und Fiktion (Anja Kerschkewicz / Eva Kessler / Felina Levits / Paula Reissig ) / L. Krüger / Idalia Nwaimo / Birgit Schley / Lenza Severin // Musik L. Krüger // Bühne und Kostüme Felina Levits // Assistenz Florence Fausch // Licht/Technik Stephan Mäusel // Beratung Produktion Zwei Eulen // Outside Eye Helen Schröder / Anne Brammen Produktion Frauen und Fiktion // Koproduktion Theaterdiscounter Berlin`,
      `Gefördert durch Fonds Darstellende Künste / Hamburgische Kulturstiftung / Künstlerhaus Lukas`,
    ]
  },
  {
    num: 2,
    link: 'lust',
    title: 'LUST',
    subtitle: 'EINE PERFORMANCE ÜBER SEXUELLE BIOGRAPHIEN UND EROTISCHE PHANTASIEN VON FRAUEN',
    text: [
      `Frauen und Fiktion überschreiten Schamgrenzen und geben der alltäglichen Lust eine Bühne.  Ob dark dirty talk, eine Sammlung der Sexuellen Identitäten oder Perlen perverser Sexphantasien - sie umarmen die Stereotypen und erweitern gemeinsam mit ihnen die erogenen Zonen. Von Foucault bis Tinder machen sie mehr als einen intellektuellen Striptease und füllen dabei euer Bildarchiv mit verqueerten Bildern der Lust. Ein Gespräch. Ein Tanz. Eine Einladung auf den spannenden Spielplatz der weiblichen Lust.`,
    ],
    caption: [
      `Performance Eva Kessler und Patricia Carolin Mai // Eine Arbeit von Frauen und Fiktion: Anja Kerschkewicz & Eva Kessler // Choreografie: Patricia Carolin Mai // Konzeptionelle Mitarbeit & mit Texten von: Elsa-Sophie Donata Jach // Bühne und Kostüme: Felina Levits // mit Musik von: plastiq // Technik und Licht: Sönke C. Herm // Dramaturgische Mitarbeit: Alisa Tretau // Beratung Produktion: Zwei Eulen`,
      `Gefördert durch die Kulturbehörde der Freien und Hansestadt Hamburg, die Rudolf Augstein Stiftung, die Hamburgische Kulturstiftung, die LICHTHOF Stiftung, die Gerda-Weiler-Stiftung und Gängeviertel e.V. `,
    ],
  },
  {
    num: 1,
    link: 'fiktion',
    title: 'FIKTION',
    subtitle: `2014 BRUTKASTEN GAUSSSTRASSE, ACKERSTADTPALAST BERLIN / 2015 HAUPTSACHE FREI FESTIVAL HAMBURG, THEATERMASCHINE GIES`,
    text: [
      `War sie tatsächlich so geboren, oder hatte sie ihren Schwanz bei einem Unfall verloren? In Fiktion lockt uns die Vortragende mit Fragmenten aus Virginia Woolfs A Room Of One’s Own, einer Manx Katze und einem Augenzwinkern in ein Labyrinth aus literarischen Frauenbildern. Was ist dieses Eva? Frauen und Fiktion spielen mit gängigen Rollen-Klischees und lassen zwischen den Zeilen feministische Gedanken aufblitzen.`,
    ],
    caption: [
      `Von und Mit Anja Kerschkewicz und Eva Kessler`,
    ],
  },
];

export const projectsByLink = link => groupBy(projects, p => p.link)[link][0];
export const projectsById = id => groupBy(projects, p => p.num)[id][0];

