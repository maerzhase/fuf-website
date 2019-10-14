import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Router, { withRouter } from 'next/router';
import Section from '../components/Section';
import Link, { Anchor } from '../components/Link';
import Teaser from '../components/Teaser';
import Frau from '../components/Frau';
import Termine from '../components/Termine';
import Project from '../components/Project';

import dates from '../data/dates';
import { projectsByLink } from '../data/projects';

class Main extends Component {
  get openProject() {
    const { router } = this.props;
    if (!router.query.projectId) return null;
    return router.query.projectId;
  }
  get projectData() {
    if (!this.openProject) return {};
    return projectsByLink(this.openProject);
  }
  get imageId() {
    const { router } = this.props;
    if (!router.query.imageId) return null;
    return router.query.imageId;
  }
  handleToggleGallery = () => {
    if (!!this.imageId) {
      Router.push(`/[projectId]`, `/${this.openProject}`);
    } else {
      Router.push(`/[projectId]/[imageId]`, `/${this.openProject}/0`);
    }
  };

  render() {
    console.log(this.openProject, this.imageId);
    return (
      <React.Fragment>
        <Section>
          <Typography variant="h1">
            <Link href="#frauen">FRAUEN</Link>
            &nbsp;und&nbsp;
            <Link href="#fiktion">FIKTION</Link>
            &nbsp;forschen in recherchebasierten Performances zu
            Gedankenexperimenten über Geschlechterrollen.
          </Typography>
        </Section>
        <Teaser
          id="care"
          title="Care 3.0"
          num={5}
          backgroundAlign="top right"
          img="/static/care_title.jpg"
        />
        <Teaser
          id="glamour"
          title="Glamour"
          num={4}
          backgroundAlign="top left"
          img="/static/glamour_title.jpg"
        />
        <Teaser
          id="weapon"
          title="You Are A Weapon!"
          num={3}
          backgroundAlign="bottom right"
          img="/static/weapon_title2.jpg"
        />
        <Teaser
          id="lust"
          title="Lust"
          num={2}
          backgroundAlign="bottom right"
          img="/static/lust_title2.jpg"
        />
        <Teaser
          id="fiktion"
          title="Fiktion"
          num={1}
          backgroundAlign="bottom left"
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
            gutterBottom
          />
          <Typography variant="h4" gutterBottom>
            Kollaborateur*innen
          </Typography>
          <Frau name="Lina Krüger" profession="Musikerin/Performerin" />
          <Frau name="Jonas Mahari" profession="Musiker/Performer" />
          <Frau
            name="Marilyn Nova White"
            profession="Hula Hoop Dancer/Drag King"
          />
          <Frau name="Gregor Schuster" profession="Regisseur/Performer" />
          <Frau
            name="Particia Carolin Mai"
            profession="Tänzerin/Choreografin"
          />
        </Section>
        <Termine title="Neue Termine" dates={dates.future} />
        <Termine title="Alte Termine" dates={dates.past} />
        <Section
          id="frauen"
          centered
          img="/static/kontakt_title.jpg"
          minHeight
          backgroundAlign="bottom right"
        >
          <Typography variant="h1" gutterBottom>
            <Anchor href="mailto:kontakt@frauenundfiktion.de">
              kontakt@frauenundfiktion.de
            </Anchor>
          </Typography>
          <Typography variant="h1" gutterBottom>
            <Anchor
              href="https://www.facebook.com/frauenundfiktion/"
              target="_blank"
            >
              frauenundfiktion auf facebook
            </Anchor>
          </Typography>
        </Section>
        <Section centered noMargin>
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
        <Project isOpen={!!this.openProject} isGalleryOpen={!!this.imageId} onOpenGallery={this.handleToggleGallery} {...this.projectData} />
      </React.Fragment>
    );
  }
}

export default withRouter(Main);
