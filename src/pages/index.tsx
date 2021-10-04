import * as React from "react";
import Navbar from "../components/navbar/Navbar";
import Layout from "../components/Layout";
import ButtonLink from "../components/button/ButtonLink";
import Content from "../components/Content";
import { StaticImage } from "gatsby-plugin-image";
import LeaderDisclaimer from "../components/leaderDisclaimer/LeaderDisclaimer";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Startseite/Landingpage von der Harfenbauwerkstatt Moritz Dortmund"
        />
        <title>moritz harfen</title>
      </Helmet>
      <Navbar />
      <Content flow="row" headline="">
        <StaticImage
          src="../images/old_logo.jpg"
          alt="placeholder image"
          placeholder="blurred"
          layout="fixed"
          className="rounded-xl mx-5 lg:mx-0"
        />
        <div className="grid px-5 justify-items-start sm:justify-items-center border-highlight border-b border-opacity-50 pb-20">
          <p className="text-xl md:text-3xl mb-5 w-full">
            Willkommen auf der Seite der Harfenbauwerkstatt Moritz Dortmund
            <br />– ehemals <strong>„Atelier für keltische Harfen“</strong> von
            Albrecht Nüchter.
          </p>
          <div className="grid grid-flow-col auto-cols-min place-items-center gap-x-20">
            <ButtonLink destination="harfen" label="Harfen" primary={true} />
            <ButtonLink destination="kontakt" label="Kontakt" primary={true} />
          </div>
        </div>
        <LeaderDisclaimer />
      </Content>
    </Layout>
  );
};

export default IndexPage;
