import * as React from "react";
import { Helmet } from "react-helmet";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar/Navbar";

function Isabeau() {
  const headline = (
    <div className="grid grid-flow-row gap-y-2 md:gap-y-0 md:grid-flow-col md:justify-start md:gap-x-3">
      <span>isabeau</span>
      <span>(29 Saiten)</span>
    </div>
  );

  return (
    <Layout>
      <Helmet
        title="isabeau (29 Saiten) | moritz harfen"
        meta={[
          {
            name: "description",
            content:
              "Übersicht, Fotos und Informationen zu der Harfe Isabeau (29 Saiten) von der Harfenbauwerkstatt Moritz Dortmund",
          },
        ]}
        htmlAttributes={{ lang: "de" }}
      />
      <Navbar />
      <Content className="lg:grid-flow-col" flow="col" headline={headline}>
        <p>Fotos der Harfe folgen bald.</p>
        <div className="md:w-10/12 lg:w-10/12">
          <p className="mb-5 lg:w-9/12 text-lg">
            Die kleine Harfe - ideal für Einsteiger:innen, für unterwegs und
            alle, die ein handliches Instrument suchen.
          </p>
          <table className="text-lg">
            <tr>
              <td>Saiten:</td>
              <td className="pl-3">29 (a&lsquo;&lsquo;&lsquo;-A)</td>
            </tr>
            <tr>
              <td>Höhe:</td>
              <td className="pl-3">ca. 92cm</td>
            </tr>
            <tr>
              <td>Gewicht:</td>
              <td className="pl-3">ca. 4,5 kg</td>
            </tr>
          </table>
        </div>
      </Content>
    </Layout>
  );
}

export default Isabeau;
