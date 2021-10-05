import * as React from "react";
import { Helmet } from "react-helmet";
import { ReactImageGalleryItem } from "react-image-gallery";
import ButtonLink from "../../components/button/ButtonLink";
import Content from "../../components/Content";
import ImageSlider from "../../components/imageslider/ImageSlider";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar/Navbar";
import harps1 from "../../images/harfen/harps1.jpg";
import harps2 from "../../images/harfen/harps2.jpg";
import harps3 from "../../images/harfen/harps3.jpg";
import harps4 from "../../images/harfen/harps4.jpg";
import harps7 from "../../images/harfen/harps7.jpg";
import harps8 from "../../images/harfen/harps8.jpg";

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
      original: harps7,
      originalClass: "cursor-default",
    },
    {
      original: harps8,
      originalClass: "cursor-default",
    },
  ];

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
      />
      <Navbar />
      <Content className="lg:grid-flow-col" flow="col" headline="harfen">
        <div className="lg:pl-20 md:w-7/12 lg:w-9/12">
          <p className="mb-5 w-11/12">
            In dieser Werkstatt entstehen handgefertigte Harfen aus
            ausgewählten, regionalen Hölzern. Sorgfältige Verarbeitung und
            langjährige Erfahrung garantieren höchste Spielfreude – von der
            großen 36-saitigen Harfe bis zur kleinen 29-saitigen.
          </p>
          <div className="grid grid-flow-col gap-x-2 place-items-start w-10/12">
            <ButtonLink
              destination="harfen/fiona"
              label="Fiona (36 Saiten)"
              primary={true}
            />
            <ButtonLink
              destination="harfen/wyda"
              label="Wyda (34 Saiten)"
              primary={true}
            />
            <ButtonLink
              destination="harfen/isabeau"
              label="Isabeau (29 Saiten)"
              primary={true}
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
