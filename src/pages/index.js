import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import Section from '../components/Section';
import Link from '../components/Link';
import Teaser from '../components/Teaser';
import Frau from '../components/Frau';
import Termine from '../components/Termine';

import dates from '../data/dates';

class IndexPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Section>
          <Typography variant="h1">
            <Link href="/frauen">FRAUEN</Link>
            &nbsp;und&nbsp;
            <Link href="/fiktion">FIKTION</Link>
            &nbsp;forschen in recherchebasierten Performances zu
            Gedankenexperimenten über Geschlechterrollen.
          </Typography>
        </Section>
        <Teaser
          title="Care 3.0"
          id={5}
          align="right"
          img="/static/care_title.png"
        />
        <Teaser
          title="Glamour"
          id={4}
          align="left"
          img="/static/glamour_title.png"
        />
        <Teaser
          title="You Are A Weapon!"
          id={3}
          align="right"
          img="/static/weapon_title.jpg"
        />
        <Teaser
          title="Lust"
          id={2}
          align="right"
          img="/static/lust_title2.png"
        />
        <Teaser
          title="Fiktion"
          id={1}
          align="left"
          img="/static/fiktion_title.jpg"
        />
        <Section centered id="frauen">
          <Typography variant="h4" gutterBottom>
            FRAUEN UND FIKTION sind
          </Typography>
          <Frau name="Felina Levits" profession="Kostümbildnerin" />
          <Frau name="Anja Kerschkewicz" profession="Szenografin/Regisseurin" />
          <Frau
            name="Eva Kessler"
            profession="Theaterwissenschaflterin/Schauspielerin"
          />
          <Frau
            name="Paula Reissig"
            profession="Kulturwissenschaftlerin/Medienkünstlerin"
          />
          <Typography variant="h4" gutterBottom>
            Kollaborateur*innen
          </Typography>
          <Frau name="L. Krüger" profession="Musik" />
          <Frau name="Jonas Mahari" />
          <Frau name="Marilyn Nova White" />
          <Frau name="Gregor Schuster" />
          <Frau
            name="Particia Carolin Mai"
            profession="Tänzerin/Choreografin"
          />
        </Section>
        <Termine title="Upcoming" dates={dates.future} />
        <Termine title="Termine" dates={dates.past} />
        <Section centered>
          <Typography variant="h1" gutterBottom>
            <Link href="mailto:kontakt@frauenundfiktion.de">
              kontakt@frauenundfiktion.de
            </Link>
          </Typography>
          <Typography variant="h1" gutterBottom>
            <Link
              href="https://www.facebook.com/frauenundfiktion/"
              target="_blank"
            >
              frauenundfiktion auf facebook
            </Link>
          </Typography>
        </Section>
        <Section centered>
          <img
            style={{ opacity: 0.5, transform: 'translate(10px, 0)' }}
            src="/static/fuf-logo.svg"
          />
          <Typography variant="body1" gutterBottom>
            <Link href="/impressum">Impressum</Link>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Link href="/datenschutz">Datenschutz</Link>
          </Typography>
        </Section>
      </React.Fragment>
    );
  }
}

export default IndexPage;
