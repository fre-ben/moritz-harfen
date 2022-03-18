import * as React from "react";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar/Navbar";
import ImageSlider from "../../components/imageslider/ImageSlider";
import { ReactImageGalleryItem } from "react-image-gallery";
import { Helmet } from "react-helmet";

import wyda1 from "../../images/harfen/wyda/wyda1.jpg";
import wyda2 from "../../images/harfen/wyda/wyda2.jpg";
import wyda3 from "../../images/harfen/wyda/wyda3.jpg";
import wyda4 from "../../images/harfen/wyda/wyda4.jpg";

function Wyda() {
  const wydaImages: ReactImageGalleryItem[] = [
    {
      original: wyda1,
      originalClass: "cursor-default",
    },
    {
      original: wyda2,
      originalClass: "cursor-default",
    },
    {
      original: wyda3,
      originalClass: "cursor-default",
    },
    {
      original: wyda4,
      originalClass: "cursor-default",
    },
  ];

  const headline = (
    <div className="grid grid-flow-row gap-y-2 md:gap-y-0 md:grid-flow-col md:justify-start md:gap-x-3">
      <span>wyda</span>
      <span>(34 Saiten)</span>
    </div>
  );

  return (
    <Layout>
      <Helmet
        title="wyda (34 Saiten) | moritz harfen"
        meta={[
          {
            name: "description",
            content:
              "Übersicht, Fotos und Informationen zu der Harfe Wyda (34 Saiten) von der Harfenbauwerkstatt Moritz Dortmund",
          },
        ]}
        htmlAttributes={{ lang: "de" }}
      />
      <Navbar />
      <Content className="lg:grid-flow-col" flow="col" headline={headline}>
        <div className="lg:pl-20 sm:pl-0">
          <ImageSlider images={wydaImages} />
        </div>
        <div className="md:w-10/12 lg:w-10/12">
          <p className="mb-5 w-11/12 text-lg">
            Die Mittlere von Albrecht Nüchters Harfen:
            <br />
            Voller Klang und großer Saitenumfang in einer handlicheren Größe.
          </p>
          <table className="text-lg">
            <tr>
              <td>Saiten:</td>
              <td className="pl-3">34 (a&lsquo;&lsquo;&lsquo;-C)</td>
            </tr>
            <tr>
              <td>Höhe:</td>
              <td className="pl-3">ca. 118cm</td>
            </tr>
            <tr>
              <td>Gewicht:</td>
              <td className="pl-3">ca. 7 kg</td>
            </tr>
          </table>
        </div>
      </Content>
    </Layout>
  );
}

export default Wyda;
