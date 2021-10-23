import * as React from "react";
import Navbar from "../components/navbar/Navbar";
import Layout from "../components/Layout";
import ButtonLink from "../components/button/ButtonLink";
import Content from "../components/Content";
import { Helmet } from "react-helmet";
import ImageSlider from "../components/imageslider/ImageSlider";
import { ReactImageGalleryItem } from "react-image-gallery";
import leihharfen from "../images/harfen/leihharfen.jpg";

const Leihharfen = () => {
  const leihharfenImages: ReactImageGalleryItem[] = [
    {
      original: leihharfen,
      originalClass: "cursor-default",
    },
  ];

  return (
    <Layout>
      <Helmet
        title="leihharfen | moritz harfen"
        meta={[
          {
            name: "description",
            content:
              "Leihharfen service informationen von der Harfenbauwerkstatt Moritz Dortmund",
          },
        ]}
        htmlAttributes={{ lang: "de" }}
      />
      <Navbar />
      <Content flow="col" headline="leihharfen">
        <div className="lg:pl-20 md:w-11/12 lg:w-10/12 order-2 lg:order-1">
          <p className="mb-5 w-11/12">
            Sie möchten eine Harfe leihen? Bei uns finden Sie eine große Auswahl
            an Harfen in den unterschiedlichsten Größen und Ausführungen. <br />
            Für den Einstieg ins Harfenspiel, einen Spielkurs oder einfach zum
            Ausprobieren - für jede Gelegenheit das passende Instrument.
          </p>
          <p className="mb-10">Anfragen bitte telefonisch oder per E-Mail.</p>
          <ButtonLink destination="kontakt" label="Kontakt" primary={true} />
        </div>
        <div className="lg:pr-20 sm:pl-0 order-1 lg:order-2">
          <ImageSlider images={leihharfenImages} />
        </div>
      </Content>
    </Layout>
  );
};

export default Leihharfen;
