import * as React from "react";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Navbar from "../components/navbar/Navbar";

function Kontakt() {
  return (
    <Layout>
      <Navbar />
      <Content flow="row" headline="kontakt">
        <div className="lg:pl-20 md:w-7/12 lg:w-9/12">
          <div className="grid grid-flow-row md:grid-flow-col md:gap-x-20">
            <p className="mb-5 md:mb-0 whitespace-nowrap">
              Harfenbau
              <br />
              Moritz Dortmund
              <br />
              Birkenstraße 5<br />
              36166 Haunetal - Kruspis
            </p>
            <p className="whitespace-nowrap">
              Telefon: 06673 918 919
              <br />
              E-Mail:{" "}
              <a
                href="mailto:moritz-harfen@posteo.de"
                className="text-highlight text-opacity-80 hover:text-opacity-100 transition-all"
              >
                moritz-harfen@posteo.de
              </a>
            </p>
          </div>
          <p className="mt-5">Termine nur nach Vereinbarung!</p>
          <div className="mt-5">
            <h3 className="text-lg font-bold">Anfahrt</h3>
            <p>
              Nächstgelegene Bahnhöfe: Neukirchen (Haunetal) oder Bad Hersfeld
              <br />
              Buslinien: 385 von Neukirchen nach Kruspis oder Linie 365 von Bad
              Hersfeld nach Kruspis.
              <br />
              Mit dem Auto: A7 Abfahrt Niederaula (89) oder über die B27 (bis
              Neukirchen)
            </p>
          </div>
          <div className="w-40 mt-10 pt-10 border-t-2 border-highlight"></div>
          <div className="w-80 sm:w-auto">
            <p>
              <strong>
                <big>Datenschutzerklärung</big>
              </strong>
            </p>
            <p>
              <strong>Allgemeiner Hinweis und Pflichtinformationen</strong>
            </p>
            <p>
              <strong>Benennung der verantwortlichen Stelle</strong>
            </p>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <p>
              <span id="s3-t-firma">Moritz Harfen</span>
              <br></br>
              <span id="s3-t-ansprechpartner">Moritz Dortmund</span>
              <br></br>
              <span id="s3-t-strasse">Birkenstraße 5</span>
              <br></br>
              <span id="s3-t-plz">36166 </span>
              <span id="s3-t-ort">Haunetal - Kruspis</span>
            </p>
            <p>
              Die verantwortliche Stelle entscheidet allein oder gemeinsam mit
              anderen über die Zwecke und Mittel der Verarbeitung von
              personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
            </p>
            <p>
              <strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong>
            </p>
            <p>
              Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
              Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten
              Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
              formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>
            <p>
              <strong>
                Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
              </strong>
            </p>
            <p>
              Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen
              Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde
              zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher
              Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in
              dem sich der Sitz unseres Unternehmens befindet. Der folgende Link
              stellt eine Liste der Datenschutzbeauftragten sowie deren
              Kontaktdaten bereit:{" "}
              <a
                href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                target="_blank"
                rel="noreferrer"
                className="text-highlight"
              >
                Link
              </a>
              .
            </p>
            <p>
              <strong>Recht auf Datenübertragbarkeit</strong>
            </p>
            <p>
              Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
              Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern
              Sie die direkte Übertragung der Daten an einen anderen
              Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
              machbar ist.
            </p>
            <p>
              <strong>
                Recht auf Auskunft, Berichtigung, Sperrung, Löschung
              </strong>
            </p>
            <p>
              Sie haben jederzeit im Rahmen der geltenden gesetzlichen
              Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, Herkunft der Daten, deren
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung, Sperrung oder Löschung dieser Daten.
              Diesbezüglich und auch zu weiteren Fragen zum Thema
              personenbezogene Daten können Sie sich jederzeit über die im
              Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.
            </p>
            <p>
              <strong>SSL- bzw. TLS-Verschlüsselung</strong>
            </p>
            <p>
              Aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden,
              nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind
              Daten, die Sie über diese Website übermitteln, für Dritte nicht
              mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der
              „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der
              Browserzeile.
            </p>
            <p>
              <strong>Server-Log-Dateien</strong>
            </p>
            <p>
              In Server-Log-Dateien erhebt und speichert der Provider der
              Website automatisch Informationen, die Ihr Browser automatisch an
              uns übermittelt. Dies sind:
            </p>
            <ul>
              <li>Besuchte Seite auf unserer Domain</li>
              <li>Datum und Uhrzeit der Serveranfrage</li>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Es findet keine Zusammenführung dieser Daten mit anderen
              Datenquellen statt. Grundlage der Datenverarbeitung bildet Art. 6
              Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung
              eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
            </p>
            <p>
              <small>
                Quelle: Datenschutz-Konfigurator von{" "}
                <a
                  href="http://www.mein-datenschutzbeauftragter.de"
                  target="_blank"
                  rel="noreferrer"
                  className="text-highlight"
                >
                  mein-datenschutzbeauftragter.de
                </a>
              </small>
            </p>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Kontakt;
