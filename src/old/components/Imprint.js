import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { Anchor } from "./Link";
import Overlay from "./Overlay";

const useStyles = makeStyles((theme) => ({}));

const Imprint = (props) => {
  const classes = useStyles(props);
  return (
    <Overlay isOpen={props.isOpen}>
      <Typography variant="h2" gutterBottom>
        Impressum
      </Typography>
      <Typography variant="body1">Eva Kessler</Typography>
      <Typography variant="body1">Brandenburgische Straße, 72</Typography>
      <Typography variant="body1">10713 Berlin</Typography>
      <Typography variant="body1" gutterBottom>
        E-Mail:
        <Anchor href="mailto:kontakt@frauenundfiktion.de">
          kontakt@frauenundfiktion.de
        </Anchor>
      </Typography>
      <Typography variant="h3" gutterBottom>
        Disclaimer – rechtliche Hinweise
      </Typography>
      <Typography variant="h4" gutterBottom>
        § 1 Warnhinweis zu Inhalten
      </Typography>
      <Typography variant="body1" gutterBottom>
        Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit
        größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt
        jedoch keine Gewähr für die Richtigkeit und Aktualität der
        bereitgestellten kostenlosen und frei zugänglichen journalistischen
        Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die
        Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters
        wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen
        Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem
        Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des
        Anbieters.
      </Typography>
      <Typography variant="h4" gutterBottom>
        § 2 Externe Links
      </Typography>
      <Typography variant="body1" gutterBottom>
        Diese Website enthält Verknüpfungen zu Websites Dritter ("externe
        Links"). Diese Websites unterliegen der Haftung der jeweiligen
        Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen
        Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße
        bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der
        Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige
        Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von
        externen Links bedeutet nicht, dass sich der Anbieter die hinter dem
        Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige
        Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise
        auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen
        werden jedoch derartige externe Links unverzüglich gelöscht.
      </Typography>
      <Typography variant="h4" gutterBottom>
        § 3 Urheber- und Leistungsschutzrechte
      </Typography>
      <Typography variant="body1" gutterBottom>
        Die auf dieser Website veröffentlichten Inhalte unterliegen dem
        deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber-
        und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der
        vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen
        Rechteinhabers. Dies gilt insbesondere für Vervielfältigung,
        Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe
        von Inhalten in Datenbanken oder anderen elektronischen Medien und
        Systemen. Inhalte und Rechte Dritter sind dabei als solche
        gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe
        einzelner Inhalte oder kompletter Seiten ist nicht gestattet und
        strafbar. Lediglich die Herstellung von Kopien und Downloads für den
        persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Die Darstellung dieser Website in fremden Frames ist nur mit
        schriftlicher Erlaubnis zulässig.
      </Typography>
      <Typography variant="h4" gutterBottom>
        § 4 Besondere Nutzungsbedingungen
      </Typography>
      <Typography variant="body1">
        Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von
        den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle
        ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen
        Einzelfall die besonderen Nutzungsbedingungen.
      </Typography>
    </Overlay>
  );
};

export default Imprint;
