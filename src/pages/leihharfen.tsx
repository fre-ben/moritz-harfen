import * as React from "react";
import Navbar from "../components/navbar/Navbar";
import Layout from "../components/Layout";
import ButtonLink from "../components/button/ButtonLink";
import Content from "../components/Content";
// import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

const Leihharfen = () => {
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
      />
      <Navbar />
      <Content flow="col" headline="leihharfen">
        <div className="lg:pl-20 md:w-7/12 lg:w-9/12">
          <p className="mb-5 w-11/12">
            Sie möchten eine Harfe leihen? Bei uns finden Sie eine große Auswahl
            an Harfen in den unterschiedlichsten Größen und Ausführungen. <br />
            Für den Einstieg ins Harfenspiel, einen Spielkurs oder einfach zum
            Ausprobieren - für jede Gelegenheit das passende Instrument.
          </p>
          <p className="mb-10">Anfragen bitte telefonisch oder per E-Mail.</p>
          <ButtonLink destination="kontakt" label="Kontakt" primary={true} />
        </div>
        <div className="pr-10">
          {/* no image available at the moment */}
          {/* <StaticImage
            src="../images/placeholder_dude.jpg"
            alt="placeholder image"
            placeholder="blurred"
            width={400}
            height={500}
          /> */}
        </div>
      </Content>
    </Layout>
  );
};

export default Leihharfen;
