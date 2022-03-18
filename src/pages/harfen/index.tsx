import * as React from "react";
import { Helmet } from "react-helmet";
import { ReactImageGalleryItem } from "react-image-gallery";
import ButtonLink from "../../components/button/ButtonLink";
import Content from "../../components/Content";
import ImageSlider from "../../components/imageslider/ImageSlider";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar/Navbar";

import harps1 from "../../images/harfen/index/Export-1.jpg";
import harps2 from "../../images/harfen/index/Export-2.jpg";
import harps3 from "../../images/harfen/index/Export-3.jpg";
import harps4 from "../../images/harfen/index/Export-4.jpg";
import harps5 from "../../images/harfen/index/Export-5.jpg";
import harps6 from "../../images/harfen/index/Export-6.jpg";
import harps7 from "../../images/harfen/index/Export-7.jpg";
import harps8 from "../../images/harfen/index/Export-8.jpg";
import harps9 from "../../images/harfen/index/Export-9.jpg";
import { shuffleArray } from "../../lib/helpers";

function Harfen() {
  const harpImages: ReactImageGalleryItem[] = [
    {
      original: harps1,
      originalClass: "cursor-default",
    },
    {
      original: harps2,
      originalClass: "cursor-default",
    },
    {
      original: harps3,
      originalClass: "cursor-default",
    },
    {
      original: harps4,
      originalClass: "cursor-default",
    },
    {
      original: harps5,
      originalClass: "cursor-default",
    },
    {
      original: harps6,
      originalClass: "cursor-default",
    },
    {
      original: harps7,
      originalClass: "cursor-default",
    },
    {
      original: harps8,
      originalClass: "cursor-default",
    },
    {
      original: harps9,
      originalClass: "cursor-default",
    },
  ];

  // Shuffles harpImages on pageload
  shuffleArray(harpImages);

  return (
    <Layout>
      <Helmet
        title="harfen | moritz harfen"
        meta={[
          {
            name: "description",
            content:
              "Übersicht, Fotos und Informationen zu den Harfen von der Harfenbauwerkstatt Moritz Dortmund",
          },
        ]}
        htmlAttributes={{ lang: "de" }}
      />
      <Navbar />
      <Content className="lg:grid-flow-col" flow="col" headline="harfen">
        <div className="lg:pl-20 md:w-7/12 lg:w-9/12">
          <p className="mb-5 w-11/12">
            In dieser Werkstatt entstehen handgefertigte Harfen aus
            ausgewählten, regionalen Hölzern. Sorgfältige Verarbeitung und
            langjährige Erfahrung garantieren höchste Spielfreude – von der
            großen 36-saitigen Harfe bis zur kleinen 29-saitigen.
            <br />
            <br />
            Preise auf Anfrage.
          </p>
          <div className="grid grid-flow-col gap-x-2 place-items-start w-10/12">
            <ButtonLink
              destination="harfen/fiona"
              label="Fiona"
              labelSecondary="(36 Saiten)"
              primary={true}
              doublespace={true}
            />
            <ButtonLink
              destination="harfen/wyda"
              label="Wyda"
              labelSecondary="(34 Saiten)"
              primary={true}
              doublespace={true}
            />
            <ButtonLink
              destination="harfen/isabeau"
              label="Isabeau"
              labelSecondary="(29 Saiten)"
              primary={true}
              doublespace={true}
            />
          </div>
        </div>
        <div className="mr-0 lg:mr-10">
          <ImageSlider images={harpImages} />
        </div>
      </Content>
    </Layout>
  );
}

export default Harfen;
