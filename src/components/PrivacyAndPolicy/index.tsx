import React from "react";
import Style from "./privacyAndPolicy.module.scss";
// import { useSelector } from "react-redux";

interface PrivacyAndPolicyProps {
  setIsPrivacyAndPolicyModalOpen: (isOpen: boolean) => void;
  isPrivacyAndPolicyModalOpen: boolean;
}

const PrivacyAndPolicyModal: React.FC<PrivacyAndPolicyProps> = ({
  setIsPrivacyAndPolicyModalOpen,
  isPrivacyAndPolicyModalOpen,
}) => {
  // const language = useSelector((state: any) => state.language.value);

  return (
    <div
      className={`${Style.contactUsModal} ${
        isPrivacyAndPolicyModalOpen ? Style.active : ""
      }`}
      onClick={() => setIsPrivacyAndPolicyModalOpen(false)}
    >
      <div
        className={Style.center_content}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={Style.crossIcon}
          onClick={() => setIsPrivacyAndPolicyModalOpen(false)}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.70743 1.50906C9.79028 1.42911 9.85638 1.33347 9.90187 1.2277C9.94736 1.12194 9.97134 1.00817 9.97239 0.893043C9.97344 0.777915 9.95156 0.663729 9.90801 0.557149C9.86447 0.450569 9.80013 0.353729 9.71876 0.272279C9.63739 0.190829 9.54061 0.126401 9.43407 0.0827537C9.32753 0.0391063 9.21336 0.0171143 9.09823 0.01806C8.98311 0.0190058 8.86932 0.0428707 8.76351 0.0882625C8.6577 0.133654 8.56199 0.199664 8.48197 0.282439L5.00675 3.75651L1.53268 0.282439C1.4533 0.19725 1.35758 0.128923 1.25122 0.0815321C1.14486 0.0341415 1.03004 0.0086588 0.913618 0.00660467C0.797195 0.00455053 0.681553 0.0259671 0.573587 0.0695761C0.465621 0.113185 0.367545 0.178094 0.28521 0.260429C0.202874 0.342765 0.137966 0.44084 0.0943564 0.548806C0.0507473 0.656772 0.0293308 0.772416 0.0313849 0.888838C0.0334391 1.00526 0.0589217 1.12007 0.106312 1.22643C0.153703 1.3328 0.222031 1.42852 0.30722 1.5079L3.77897 4.98312L0.304908 8.45719C0.151748 8.62156 0.0683666 8.83896 0.0723299 9.06359C0.0762933 9.28822 0.167292 9.50254 0.326155 9.6614C0.485017 9.82027 0.69934 9.91126 0.92397 9.91523C1.1486 9.91919 1.366 9.83581 1.53037 9.68265L5.00675 6.20858L8.48081 9.68381C8.64518 9.83697 8.86258 9.92035 9.08721 9.91638C9.31184 9.91242 9.52617 9.82142 9.68503 9.66256C9.84389 9.5037 9.93489 9.28937 9.93885 9.06474C9.94281 8.84011 9.85944 8.62271 9.70628 8.45834L6.23452 4.98312L9.70743 1.50906Z"
              fill="#1E1E1E"
            />
          </svg>
        </div>

        <span className={Style.modalTitle} role="heading" aria-level={2}>
          Privacy Policy
        </span>

        <div className={Style.info}>
          <div className={Style.mainHeading}>
            <svg
              width="51"
              height="38"
              viewBox="0 0 51 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="32.385"
                y="-6.10352e-05"
                width="17.9003"
                height="36.0688"
                rx="2.64855"
                transform="rotate(4.57592 32.385 -6.10352e-05)"
                fill="#F95231"
              />
              <rect
                x="14.5555"
                y="0.903137"
                width="11.4628"
                height="35.6781"
                rx="2.64855"
                transform="rotate(4.57592 14.5555 0.903137)"
                fill="#FF8E77"
              />
              <rect
                x="3.82544"
                y="1.01956"
                width="4.98612"
                height="35.694"
                rx="2.49306"
                transform="rotate(4.57592 3.82544 1.01956)"
                fill="#FFBBAE"
              />
            </svg>
            <h2 className={Style.heading}>Datenschutzerklärung</h2>
            <svg
              width="52"
              height="38"
              viewBox="0 0 52 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3.42749"
                y="-3.05176e-05"
                width="17.9003"
                height="36.0688"
                rx="2.64855"
                transform="rotate(4.57592 3.42749 -3.05176e-05)"
                fill="#F95231"
              />
              <rect
                x="27.7705"
                y="-6.10352e-05"
                width="11.4628"
                height="35.6781"
                rx="2.64855"
                transform="rotate(4.57592 27.7705 -6.10352e-05)"
                fill="#FF8E77"
              />
              <rect
                x="46.0522"
                y="-6.10352e-05"
                width="4.98612"
                height="35.694"
                rx="2.49306"
                transform="rotate(4.57592 46.0522 -6.10352e-05)"
                fill="#FFBBAE"
              />
            </svg>
          </div>

          <ul>
            <li>
              <h2>1. Cookie-Hinweis</h2>
              <p>
                Cookies sind Textdateien, die automatisch bei dem Aufruf einer
                Webseite lokal im Browser des Besuchers abgelegt werden. Diese
                Website setzt Cookies ein, um das Angebot nutzerfreundlich und
                funktionaler zu gestalten. Dank dieser Dateien ist es
                beispielsweise möglich, auf individuelle Interessen abgestimmte
                Informationen auf einer Seite anzuzeigen. Auch
                Sicherheitsrelevante Funktionen zum Schutz Ihrer Privatsphäre
                werden durch den Einsatz von Cookies ermöglicht. Der
                ausschließliche Zweck besteht also darin, unser Angebot Ihren
                Kundenwünschen bestmöglich anzupassen und die Seiten-Nutzung so
                komfortabel wie möglich zu gestalten. Mit Anwendung der DSGVO
                2018 sind Webmaster dazu verpflichtet, der unter
                https://eu-datenschutz.org/ veröffentlichten Grundverordnung
                Folge zu leisten und seine Nutzer entsprechend über die
                Erfassung und Auswertung von Daten in Kenntnis zu setzen. Die
                Rechtmäßigkeit der Verarbeitung ist in Kapitel 2, Artikel 6 der
                DSGVO begründet.
              </p>
            </li>

            <li>
              <h2>2. Google Analytics</h2>
              <p>
                Dieses Angebot nutzt ebenfalls den Webanalysedienst Google
                Analytics, ein Programm der Google Inc. ("Google, USA"). Die
                durch das Tracking erfassten Informationen zu Ihrer Nutzung
                dieser Website werden auf einem Server von Google in den USA
                gespeichert. Durch eine sogenannte IP-Anonymisierung wird Ihre
                IP-Adresse von Google innerhalb von Mitgliedstaaten der
                Europäischen Union oder in anderen Vertragsstaaten des Abkommens
                über den Europäischen Wirtschaftsraum zuvor gekürzt. Somit ist
                der Standort Ihres Browsers lediglich regional zuortbar, nicht
                aber ihrer Person. Google kann Besucherverhalten auswerten, um
                Reports über die Websiteaktivitäten zusammenzustellen. Auch
                weitere mit der Websitenutzung und der Internetnutzung
                verbundene Dienstleistungen können so gegenüber dem
                Websitebetreiber erbracht werden.
              </p>
            </li>

            <li>
              <h2>3. Kontaktaufnahme und Rechtsgrundlage der Verarbeitung</h2>
              <p>
                Die Nutzung unserer Webseite ist in der Regel ohne eine Angabe
                personenbezogener Daten möglich. Wenn Sie mit uns in Kontakt
                treten z. B. per E-Mail, verarbeiten wir Ihre Angaben zur
                Bearbeitung der Anfrage sowie für den Fall, dass Anschlussfragen
                entstehen. Ist die Verarbeitung personenbezogener Daten zur
                Erfüllung eines Vertrags erforderlich, wie dies beispielsweise
                bei Verarbeitungsvorgängen der Fall ist, die für eine Lieferung
                von Waren oder die Erbringung einer sonstigen Leistung oder
                Gegenleistung notwendig sind, so beruht die Verarbeitung auf
                Art. 6 Abs. 1 S. 1 b) DSGVO. Gleiches gilt für solche
                Verarbeitungsvorgänge die zur Durchführung vorvertraglicher
                Maßnahmen erforderlich sind, etwa in Fällen von Anfragen zur
                unseren Produkten oder Leistungen. Unterliegt unser Unternehmen
                einer rechtlichen Verpflichtung durch welche eine Verarbeitung
                von personenbezogenen Daten erforderlich wird, wie
                beispielsweise zur Erfüllung steuerlicher Pflichten, so basiert
                die Verarbeitung auf Art. 6 Abs. 1 S. 1 c) DSGVO. Weitere
                personenbezogene Daten verarbeiten wir nur, wenn Sie dazu
                einwilligen (Art. 6 Abs. 1 S. 1 a) DSGVO) oder wir ein
                berechtigtes Interesse an der Verarbeitung Ihrer Daten haben
                (Art. 6 Abs. 1 S. 1 f) DSGVO). Ein berechtigtes Interesse liegt
                z. B. darin, auf Ihre E-Mail zu antworten.
              </p>
            </li>

            <li>
              <h2>4. Rechte der Nutzer</h2>
              <p>
                Nutzer haben das Recht, auf Antrag unentgeltlich Auskunft zu
                erhalten über die personenbezogenen Daten, die von uns über sie
                gespeichert wurden. Zusätzlich haben die Nutzer das Recht auf
                Berichtigung unrichtiger Daten, Einschränkung der Verarbeitung
                und Löschung ihrer personenbezogenen Daten, sofern zutreffend,
                Ihre Rechte auf Datenportabilität geltend zu machen und im Fall
                der Annahme einer unrechtmäßigen Datenverarbeitung, eine
                Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.
                Ebenso können Nutzer Einwilligungen, grundsätzlich mit
                Auswirkung für die Zukunft, widerrufen.
              </p>
            </li>

            <li>
              <h2>5. Löschung von Daten</h2>
              <p>
                Die bei uns gespeicherten Daten werden gelöscht, sobald sie für
                ihre Zweckbestimmung nicht mehr erforderlich sind und der
                Löschung keine gesetzlichen Aufbewahrungspflichten
                entgegenstehen. Sofern die Daten der Nutzer nicht gelöscht
                werden, weil sie für andere und gesetzlich zulässige Zwecke
                erforderlich sind, wird deren Verarbeitung eingeschränkt. D.h.
                die Daten werden gesperrt und nicht für andere Zwecke
                verarbeitet. Das gilt z.B. für Daten der Nutzer, die aus
                handels- oder steuerrechtlichen Gründen aufbewahrt werden
                müssen. Nach gesetzlichen Vorgaben erfolgt die Aufbewahrung für
                6 Jahre gemäß § 257 Abs. 1 HGB (Handelsbücher, Inventare,
                Eröffnungsbilanzen, Jahresabschlüsse, Handelsbriefe,
                Buchungsbelege, etc.) sowie für 10 Jahre gemäß § 147 Abs. 1 AO
                (Bücher, Aufzeichnungen, Lageberichte, Buchungsbelege, Handels-
                und Geschäftsbriefe, Für Besteuerung relevante Unterlagen,
                etc.).
              </p>
            </li>

            <li>
              <h2>6. Bestehen einer automatisierten Entscheidungsfindung</h2>
              <p>
                Als verantwortungsbewusstes Unternehmen verzichten wir auf eine
                automatische Entscheidungsfindung oder ein Profiling.
              </p>
            </li>

            <li>
              <h2>7. Haftungsausschluss und Haftung für Links</h2>
              <p>
                Die Inhalte dieser Website wurden sorgfältig geprüft und nach
                bestem Wissen erstellt. Jedoch wird für die hier dargebotenen
                Informationen kein Anspruch auf Vollständigkeit, Aktualität,
                Qualität und Richtigkeit erhoben. Es kann keine Verantwortung
                für Schäden übernommen werden, die durch das Vertrauen auf die
                Inhalte dieser Website oder deren Gebrauch entstehen. Verweise
                und Links zu Webseiten Dritter liegen außerhalb unseres
                Verantwortungsbereichs Es wird jegliche Verantwortung für solche
                Webseiten abgelehnt. Der Zugriff und die Nutzung solcher
                Webseiten erfolgen in Verantwortung des Nutzers oder der
                Nutzerin.
              </p>
            </li>

            <li>
              <h2>8. Urheberrechtshinweise</h2>
              <p>
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
                oder anderen Dateien auf der Website gehören ausschließlich der
                HM-PROFI GmbH & Co. KG oder den speziell genannten
                Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die
                schriftliche Zustimmung der Urheberrechtsträger im Voraus
                einzuholen.
              </p>
            </li>

            <li>
              <h2>9. Änderung der Datenschutzbestimmungen</h2>
              <p>
                Unsere Datenschutzerklärung kann in unregelmäßigen Abständen
                angepasst werden, damit sie den aktuellen rechtlichen
                Anforderungen entsprechen oder um Änderungen unserer
                Dienstleistungen umzusetzen, z. B. bei der Einfügung neuer
                Angebote. Für Ihren nächsten Besuch gilt dann automatisch die
                neue Datenschutzerklärung.
              </p>
            </li>
          </ul>
        </div>

        <div className={Style.shapes01}></div>
        <div className={Style.shapes02}></div>
      </div>
    </div>
  );
};

export default PrivacyAndPolicyModal;
