import * as React from "react";
import ImageSlider from "../components/imageslider/ImageSlider";
import { ReactImageGalleryItem } from "react-image-gallery";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/Content";
import Layout from "../components/Layout";
import saiten from "../images/zubehoer/Saiten.jpg";
import stimmschluessel from "../images/zubehoer/Stimmschluessel.jpg";
import taschen from "../images/zubehoer/Taschen.jpg";
import { Helmet } from "react-helmet";

function Zubehoer() {
  const zubehoerImages: ReactImageGalleryItem[] = [
    {
      original: saiten,
      originalClass: "cursor-default",
    },
    {
      original: stimmschluessel,
      originalClass: "cursor-default",
    },
    {
      original: taschen,
      originalClass: "cursor-default",
    },
  ];

  return (
    <Layout>
      <Helmet
        title="zubehör | moritz harfen"
        meta={[
          {
            name: "description",
            content:
              "Informationen zum Verkauf von Harfenzubehör von der Harfenbauwerkstatt Moritz Dortmund",
          },
        ]}
        htmlAttributes={{ lang: "de" }}
      />
      <Navbar />
      <Content className="lg:grid-flow-col" flow="col" headline="zubehör">
        <div className="lg:pl-20 sm:pl-0">
          <ImageSlider images={zubehoerImages} />
        </div>
        <div className="md:w-7/12 lg:w-10/12">
          <p className="mb-5 w-11/12 text-lg">
            Passend zu den Harfen gibt es bei uns hochwertige Transporttaschen,
            Saiten und Stimmschlüssel.
          </p>
          <p className="mb-5 w-11/12 text-lg">
            Bestellungen - vor allem von Saiten - <br />
            am besten per E-Mail (
            <a
              href="mailto:moritz-harfen@posteo.de"
              className="text-highlight text-opacity-80 hover:text-opacity-100 transition-all"
            >
              moritz-harfen@posteo.de
            </a>
            ).
          </p>
        </div>
      </Content>
    </Layout>
  );
}

export default Zubehoer;
