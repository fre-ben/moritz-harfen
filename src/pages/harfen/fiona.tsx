import * as React from "react";
import { Helmet } from "react-helmet";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar/Navbar";
import ImageSlider from "../../components/imageslider/ImageSlider";
import { ReactImageGalleryItem } from "react-image-gallery";

import fiona1 from "../../images/harfen/fiona/Export-1.jpg";
import fiona2 from "../../images/harfen/fiona/Export-2.jpg";
import fiona3 from "../../images/harfen/fiona/Export-0003.jpg";
import fiona4 from "../../images/harfen/fiona/Export-1163.jpg";

function Fiona() {
  const fionaImages: ReactImageGalleryItem[] = [
    {
      original: fiona1,
      originalClass: "cursor-default",
    },
    {
      original: fiona2,
      originalClass: "cursor-default",
    },
    {
      original: fiona3,
      originalClass: "cursor-default",
    },
    {
      original: fiona4,
      originalClass: "cursor-default",
    },
  ];

  const headline = (
    <div className="grid grid-flow-row gap-y-2 md:gap-y-0 md:grid-flow-col md:justify-start md:gap-x-3">
      <span>fiona</span>
      <span>(36 Saiten)</span>
    </div>
  );

  return (
    <Layout>
      <Helmet
        title="fiona (36 Saiten) | moritz harfen"
        meta={[
          {
            name: "description",
            content:
              "Übersicht, Fotos und Informationen zu der Harfe Fiona (36 Saiten) von der Harfenbauwerkstatt Moritz Dortmund",
          },
        ]}
        htmlAttributes={{ lang: "de" }}
      />
      <Navbar />
      <Content className="lg:grid-flow-col" flow="col" headline={headline}>
        <div className="lg:pl-20 sm:pl-0">
          <ImageSlider images={fionaImages} />
        </div>
        <div className="md:w-10/12 lg:w-10/12">
          <p className="mb-5 lg:w-9/12 text-lg">
            Mit 36 Saiten und einer Größe von etwa 140 cm ist das Modell
            &quot;Fiona&quot; das größte in der Reihe.
            <br />
            Voller Klang und große Tragweite machen es zu einem hervorragenden
            Konzertinstrument.
          </p>
          <table className="text-lg">
            <tr>
              <td>Saiten:</td>
              <td className="pl-3">36 (a&lsquo;&lsquo;&lsquo;-A1)</td>
            </tr>
            <tr>
              <td>Höhe:</td>
              <td className="pl-3">ca. 140cm</td>
            </tr>
            <tr>
              <td>Gewicht:</td>
              <td className="pl-3">ca. 10 kg</td>
            </tr>
          </table>
        </div>
      </Content>
    </Layout>
  );
}

export default Fiona;
