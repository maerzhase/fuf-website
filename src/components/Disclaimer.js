import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Anchor } from './Link';
import Overlay from './Overlay';

const useStyles = makeStyles(theme => ({}));

const Disclaimer = props => {
  const classes = useStyles(props);
  return (
    <Overlay isOpen={props.isOpen}>
      <Typography variant="h2" gutterBottom>
        Datenschutzerklärung
      </Typography>
      <Typography variant="h4" gutterBottom>
        SSL-Verschlüsselung
      </Typography>
      <Typography variant="body1" gutterBottom>
        Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden
        wir dem aktuellen Stand der Technik entsprechende
        Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Löschung bzw. Sperrung der Daten
      </Typography>
      <Typography variant="body1" gutterBottom>
        Wir halten uns an die Grundsätze der Datenvermeidung und
        Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher nur
        so lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich
        ist oder wie es die vom Gesetzgeber vorgesehenen vielfältigen
        Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw.
        Ablauf dieser Fristen werden die entsprechenden Daten routinemäßig und
        entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Verwendung von Scriptbibliotheken (Google Webfonts)
      </Typography>
      <Typography variant="body1" gutterBottom>
        Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend
        darzustellen, verwenden wir auf dieser Website Scriptbibliotheken und
        Schriftbibliotheken wie z. B. Google Webfonts (
        <Anchor href="http://www.google.com/webfonts/">
          https://www.google.com/webfonts/
        </Anchor>
        ). Google Webfonts werden zur Vermeidung mehrfachen Ladens in den Cache
        Ihres Browsers übertragen. Falls der Browser die Google Webfonts nicht
        unterstützt oder den Zugriff unterbindet, werden Inhalte in einer
        Standardschrift angezeigt.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst
        automatisch eine Verbindung zum Betreiber der Bibliothek aus. Dabei ist
        es theoretisch möglich – aktuell allerdings auch unklar ob und ggf. zu
        welchen Zwecken – dass Betreiber entsprechender Bibliotheken Daten
        erheben.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie
        hier:
        <Anchor href="https://www.google.com/policies/privacy/">
          https://www.google.com/policies/privacy/
        </Anchor>
      </Typography>
      <Typography variant="h4" gutterBottom>
        Ihre Rechte auf Auskunft, Berichtigung, Sperre, Löschung und Widerspruch
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten
        personenbezogenen Daten zu erhalten. Ebenso haben Sie das Recht auf
        Berichtigung, Sperrung oder, abgesehen von der vorgeschriebenen
        Datenspeicherung zur Geschäftsabwicklung, Löschung Ihrer
        personenbezogenen Daten. Bitte wenden Sie sich dazu an unseren
        Datenschutzbeauftragten. Die Kontaktdaten finden Sie ganz unten.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Damit eine Sperre von Daten jederzeit berücksichtigt werden kann, müssen
        diese Daten zu Kontrollzwecken in einer Sperrdatei vorgehalten werden.
        Sie können auch die Löschung der Daten verlangen, soweit keine
        gesetzliche Archivierungsverpflichtung besteht. Soweit eine solche
        Verpflichtung besteht, sperren wir Ihre Daten auf Wunsch.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sie können Änderungen oder den Widerruf einer Einwilligung durch
        entsprechende Mitteilung an uns mit Wirkung für die Zukunft vornehmen.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Änderung unserer Datenschutzbestimmungen
      </Typography>
      <Typography variant="body1" gutterBottom>
        Wir behalten uns vor, diese Datenschutzerklärung gelegentlich
        anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen
        entspricht oder um Änderungen unserer Leistungen in der
        Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer
        Services. Für Ihren erneuten Besuch gilt dann die neue
        Datenschutzerklärung.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Fragen an den Datenschutzbeauftragten
      </Typography>
      <Typography variant="body1" gutterBottom>
        Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine
        E-Mail.
      </Typography>
    </Overlay>
  );
};

export default Disclaimer;
