import * as React from "react";
import { Helmet } from "react-helmet";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Legal from "../components/legal/Legal";
import Navbar from "../components/navbar/Navbar";

function Kontakt() {
  return (
    <Layout>
      <Helmet
        title="kontakt | moritz harfen"
        meta={[
          {
            name: "description",
            content:
              "Kontaktinformationen und Impressum von der Harfenbauwerkstatt Moritz Dortmund",
          },
        ]}
        htmlAttributes={{ lang: "de" }}
      />
      <Navbar />
      <Content flow="row" headline="kontakt">
        <div className="lg:pl-20 md:w-7/12 lg:w-9/12">
          <div className="grid grid-flow-row md:grid-flow-col md:gap-x-20">
            <div className="grid mb-5 md:mb-0 whitespace-nowrap justify-items-center justify-start">
              <div className="grid grid-flow-col gap-x-12 mb-2">
                <p>
                  Harfenbau
                  <br />
                  Moritz Dortmund
                  <br />
                </p>
                <p>
                  Leihharfen
                  <br />
                  Claudia Uecker
                  <br />
                </p>
              </div>
              Birkenstraße 5<br />
              36166 Haunetal - Kruspis
            </div>
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
          <Legal />
          <p className="mt-10 text-sm text-center">
            Webseite erstellt von{" "}
            <a
              href="https://github.com/fre-ben"
              target="_blank"
              rel="noreferrer"
              className="text-highlight text-opacity-80 hover:text-opacity-100 transition-all"
            >
              fre-ben
            </a>
          </p>
        </div>
      </Content>
    </Layout>
  );
}

export default Kontakt;
