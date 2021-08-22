import * as React from "react";
import Navbar from "../components/navbar/Navbar";
import Layout from "../components/Layout";
import ButtonLink from "../components/button/ButtonLink";
import Content from "../components/Content";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <Content>
        <div className="lg:pl-20 md:w-7/12 lg:w-9/12">
          <h1 className="text-5xl mb-10 font-medium">Leihharfen</h1>
          <p className="mb-5 w-11/12">
            Sie möchten eine Harfe leihen? Bei uns finden Sie eine große Auswahl
            an Harfen in den unterschiedlichsten Größen und Ausführungen. <br />
            Für den Einstieg ins Harfenspiel, einen Spielkurs oder einfach zum
            Ausprobieren - für jede Gelegenheit das passende Instrument.
          </p>
          <p className="mb-10">Anfragen bitte telefonisch oder per E-Mail.</p>
          <ButtonLink destination="Kontakt" label="Kontakt" primary={true} />
        </div>
        <div className="pr-10">
          <StaticImage
            src="../images/placeholder_dude.jpg"
            alt="placeholder image"
            placeholder="blurred"
            width={400}
            height={500}
          />
        </div>
      </Content>
    </Layout>
  );
};

export default IndexPage;
