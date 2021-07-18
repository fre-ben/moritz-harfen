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
        <div>
          <h1 className="text-5xl mb-10">moritz harfen</h1>
          <p className="text-lg mb-5">
            Willkommen auf der Seite der Harfenbauwerkstatt Moritz Dortmund –
            <br />
            ehemals <strong>„Atelier für keltische Harfen“</strong> von Albrecht
            Nüchter.
          </p>
          <div className="grid grid-flow-col auto-cols-min place-items-center gap-x-20">
            <ButtonLink destination="Harfen" label="Harfen" primary={true} />
            <ButtonLink destination="Kontakt" label="Kontakt" primary={true} />
          </div>
        </div>
        <StaticImage
          src="../images/placeholder_dude.jpg"
          alt="placeholder image"
          placeholder="blurred"
          width={400}
          height={500}
        />
      </Content>
    </Layout>
  );
};

export default IndexPage;
