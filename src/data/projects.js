import { groupBy } from 'lodash';

export const allProjects = [
  {
    num: 6,
    link: 'savemenot',
    title: '(save me) not',
    text: [
      `Kennen Sie die Erzählung über das „Fräulein in Not“? Bestimmt! Denn sie ist überall: ob in der griechischen Mythologie, im Kino oder in Computerspielen. Eine schöne, junge Frau wird von einem Ungeheuer oder Bösewicht entführt und es bedarf eines männlichen Helden, um sie zu retten. Ob als Andromeda, Rapunzel, die weiße Frau aus King Kong, als Princess Peach oder Zelda – die Erzählung der hilflosen Frau ist tief verankert in unserer Gesellschaft. Und sie hat Auswirkungen auf unsere Selbstwahrnehmung und unser Handeln.(save me) not stellt sich mit Humor dem Mythos, dass Frauen das von Natur aus schwächere Geschlecht seien. Auf Basis von Interviews mit (Kampf-)Sportlerinnen, Selbstverteidigungslehrerinnen, Sozialarbeiterinnen und vielen anderen starken Frauen aus Oberhausen und ganz Deutschland, die Gewalt erlebt und bewältigt haben, entsteht eine Geschichte über wehrhaftes Handeln. Das „Fräulein in Not“ ist die Endgegnerin in einer feministischen Auseinandersetzung über Gewalt, Opfer- und Täterrollen, aus der eine Heldin hervorgeht. Rette mich nicht! Wir retten uns!`,
    ],
    caption: [
      `RECHERCHE, TEXT, REGIE, KOSTÜMBILD, VIDEO: Frauen und Fiktion`,
      `MIT: Shari Asha Crosson, Elisabeth Hoppe, Philipp Joy Reinhardt`,
      `BÜHNE: Luisa Wandschneider`,
      `MUSIK: Lina Krüger / Jonas Mahari`,
      `DRAMATURGIE: Hannah Saar`,
      `INTERVIEWPARTNER*INNEN: Safeyya Auf der Mauer, Aylin Caka, Carola Cremer, Sunny Graff, Sigrid Happ, Sandra Levits, Mária Nagy, Yehudit Yinhar, Anika Ziemba`,
      `In Koproduktion mit dem Theater Oberhausen`,
      `Gefördert durch Fonds darstellende Künste, Kunststiftung NRW`,
    ],
    gallery: [
      ['embed', 'https://player.vimeo.com/video/403254335'],
      ['image', '/static/savemenot/01.jpg'],
      ['image', '/static/savemenot/02.jpg'],
      ['image', '/static/savemenot/03.jpg'],
      ['image', '/static/savemenot/04.jpg'],
      ['image', '/static/savemenot/05.jpg'],
      ['image', '/static/savemenot/06.jpg'],
      ['image', '/static/savemenot/07.jpg'],
      ['image', '/static/savemenot/08.jpg'],
    ],
  },
  {
    num: 5,
    link: 'care',
    title: 'CARE 3.0',
    text: [
      `Frauen und Fiktion laden zu einem glamourösen Care-Contest ein. In einem Ballroom der besonderen Art treten fürsorgliche Figuren jenseits klarer Geschlechterrollen gegeneinander an. Sie battlen sich darin zu ernähren, sich zu kümmern, Geborgenheit zu geben, 'Nein' zu sagen, zuzuhören, geduldig zu sein. Wer ist der oder die ultimativ Sorgetragende? Auf der Basis von Interviews werden Erfahrungen von sorgetragenden Menschen verhandelt: Wer übernimmt hauptsächlich Sorgearbeit in unserer Gesellschaft? Welchen Stellenwert sollte sie einnehmen? Das Publikum ist aufgefordert ihre Favorit*innen anzufeuern. Es wird geputzt und getanzt, geboren, gestorben und gefeiert. We Care to Shine!`,
    ],
    caption: [
      `VON: Frauen und Fiktion (Anja Kerschkewicz, Felina Levits, Paula Reissig, Eva Kessler)`,
      `MIT: Florence Fausch, Ariclenes Garcia aka AriGato St.Laurent, Jonas Mahari, Lina Krüger, Arnis Levits, Laetitia Reymond, Gregor Schuster, Marilyn Nova White, Kathrin Brogli`,
      `Licht: Heini Weber / Technik: Andrea Ercolani`,
      `INTERVIEWPARTNER*INNEN: Lara Austermann (Psychologin), Lena Biermann (Hebamme), Cesar Bony (Altenpfleger), Christina Fiebig (Einzelfallbetreuerin), S. Frazer (persönlicher Assistent), Ariclenes Garcia aka AriGato St.Laurent (Vouging Tänzer & ehemals Mother eines Vouging Houses), Carolina Gut (Theaterpädagogin und Gymnasiallehrerin), Odette Hella’Grand (Dragqueen), Teresa Hoffmann (Studentin), Benedikt Hülsbusch (Gesundheits-und Krankenpfleger), Hubert Lutz-Manser (Berufsfachschullehrer Allgemeinbildung), Christiane Meier (www.sortiergut.de), Barbara Metelska (diplom. Lehrerin und Psychologin, im Moment Mitarbeiterin im Pflegebereich), Ruth Pala (dipl. Pflegefachfrau FH), Pauline Schindler (Hebamme), Ben Simon (Klassenassistent in einer Schule für körperlich und geistig beeinträchtigte Kinder und Jugendliche), Daniel Simon (Diplomierter Pflegefachmann, Berufsschullehrer im Gesundheitswesen), Liz Rech (Regisseurin), Anastasia Reichart (Erzieherin), Barbara Rettenmund (Berufsschullehrerin), Ursula Saile (examinierte Krankenschwester), Gregor Schuster (Regisseur), Maike Tödter (Kulturmanagerin), Andrea Zimmermann (Geschlechterforscherin)`,
      `In Koproduktion mit Treibstoff`,
      `Gefördert durch: Recherchestipendium Berliner Senatsverwaltung für Kultur und Europa`,
    ],
    gallery: [
      ['embed', 'https://player.vimeo.com/video/369328260'],
      ['image', '/static/care/01.jpg'],
      ['image', '/static/care/02.jpg'],
      ['image', '/static/care/03.jpg'],
      ['image', '/static/care/04.jpg'],
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
    gallery: [
      ['image', '/static/glamour/01.jpg'],
      ['image', '/static/glamour/02.jpg'],
      ['image', '/static/glamour/03.jpg'],
      ['image', '/static/glamour/04.jpg'],
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
      `Frauen und Fiktion porträtieren in YOU ARE A WEAPON! Angreiferinnen. Ihre schweißtreibende Auseinandersetzung basiert auf biografischen Interviews mit Expertinnen wie einer Selbstverteidigungs-Trainerin, einer Kneipenwirtin, einer Anti-Aggressionstrainerin, einer MMA-Kämpferin u.a.. Mit drei von ihnen und der Musikerin L. Krüger, verhandeln Frauen und Fiktion Perspektiven, die sich durch körperliches Empowerment ergeben. Sie berichten von Ohnmachtserlebnissen, Vorbildfiguren und Selbstermächtigung durch Training. Während sie die Gewalt tanzen, verwandelt sich die Bühne von einem unberechenbaren Schlachtfeld zu einem geschützten Trainingsraum. Durch Geschichten über wehrhaftes Handeln entstehen dabei alternative Bilder von Weiblichkeit.`,
    ],
    caption: [
      `Von und mit Frauen und Fiktion (Anja Kerschkewicz / Eva Kessler / Felina Levits / Paula Reissig ) / L. Krüger / Idalia Nwaimo / Birgit Schley / Lenza Severin // Musik L. Krüger // Bühne und Kostüme Felina Levits // Assistenz Florence Fausch // Licht/Technik Stephan Mäusel // Beratung Produktion Zwei Eulen // Outside Eye Helen Schröder / Anne Brammen Produktion Frauen und Fiktion // Koproduktion Theaterdiscounter Berlin`,
      `Gefördert durch Fonds Darstellende Künste / Hamburgische Kulturstiftung / Künstlerhaus Lukas`,
    ],
    gallery: [
      ['embed', 'https://player.vimeo.com/video/309847175'],
      ['image', '/static/weapon/01.jpg'],
      ['image', '/static/weapon/02.jpg'],
      ['image', '/static/weapon/03.jpg'],
      ['image', '/static/weapon/04.jpg'],
      ['image', '/static/weapon/05.jpg'],
      ['image', '/static/weapon/06.jpg'],
      ['image', '/static/weapon/07.jpg'],
      ['image', '/static/weapon/08.jpg'],
    ],
  },
  {
    num: 2,
    link: 'lust',
    title: 'LUST',
    subtitle:
      'EINE PERFORMANCE ÜBER SEXUELLE BIOGRAPHIEN UND EROTISCHE PHANTASIEN VON FRAUEN',
    text: [
      `Frauen und Fiktion überschreiten Schamgrenzen und geben der alltäglichen Lust eine Bühne.  Ob dark dirty talk, eine Sammlung der Sexuellen Identitäten oder Perlen perverser Sexphantasien - sie umarmen die Stereotypen und erweitern gemeinsam mit ihnen die erogenen Zonen. Von Foucault bis Tinder machen sie mehr als einen intellektuellen Striptease und füllen dabei euer Bildarchiv mit verqueerten Bildern der Lust. Ein Gespräch. Ein Tanz. Eine Einladung auf den spannenden Spielplatz der weiblichen Lust.`,
    ],
    caption: [
      `Performance Eva Kessler und Patricia Carolin Mai // Eine Arbeit von Frauen und Fiktion: Anja Kerschkewicz & Eva Kessler // Choreografie: Patricia Carolin Mai // Konzeptionelle Mitarbeit & mit Texten von: Elsa-Sophie Donata Jach // Bühne und Kostüme: Felina Levits // mit Musik von: plastiq // Technik und Licht: Sönke C. Herm // Dramaturgische Mitarbeit: Alisa Tretau // Beratung Produktion: Zwei Eulen`,
      `Gefördert durch die Kulturbehörde der Freien und Hansestadt Hamburg, die Rudolf Augstein Stiftung, die Hamburgische Kulturstiftung, die LICHTHOF Stiftung, die Gerda-Weiler-Stiftung und Gängeviertel e.V. `,
    ],
    gallery: [
      ['embed', 'https://player.vimeo.com/video/188169589'],
      ['image', '/static/lust/01.jpg', '© Paula Reissig'],
      ['image', '/static/lust/02.jpg', '© Paula Reissig'],
      ['image', '/static/lust/03.jpg', '© Paula Reissig'],
      ['image', '/static/lust/04.jpg', '© Paula Reissig'],
      ['image', '/static/lust/05.jpg', '© Paula Reissig'],
      ['image', '/static/lust/06.jpg', '© Paula Reissig'],
      ['image', '/static/lust/07.jpg', '© Paula Reissig'],
    ],
  },
  {
    num: 1,
    link: 'fiktion',
    title: 'FIKTION',
    subtitle: `2014 BRUTKASTEN GAUSSSTRASSE, ACKERSTADTPALAST BERLIN / 2015 HAUPTSACHE FREI FESTIVAL HAMBURG, Theatermaschine Giessen`,
    text: [
      `War sie tatsächlich so geboren, oder hatte sie ihren Schwanz bei einem Unfall verloren?  In Fiktion lockt uns die Vortragende mit Fragmenten aus Virginia Woolfs A Room Of One’s Own, einer Manx Katze und einem Augenzwinkern in ein Labyrinth aus literarischen Frauenbildern. Was ist dieses Eva? Frauen und Fiktion spielen mit gängigen Rollen-Klischees und lassen zwischen den Zeilen feministische Gedanken aufblitzen.`,
    ],
    caption: [`Von und Mit Anja Kerschkewicz und Eva Kessler`],
    gallery: [
      ['image', '/static/fiktion/01.jpg', '© Sebastian Pircher'],
      ['image', '/static/fiktion/02.jpg', '© Sebastian Pircher'],
    ],
  },
];

export const projectsByLink = link =>
  groupBy(allProjects, p => p.link)[link][0];
export const projectsById = id => groupBy(allProjects, p => p.num)[id][0];
