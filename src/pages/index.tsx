import * as React from "react";
import Navbar from "../components/navbar/Navbar";
import Layout from "../components/Layout";
import ButtonLink from "../components/button/ButtonLink";
import Content from "../components/Content";
import LeaderDisclaimer from "../components/leaderDisclaimer/LeaderDisclaimer";
import { Helmet } from "react-helmet";
import newLogo from "../images/new_logo.svg";
import Instagram from "../components/social/Instagram";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet
        title="moritz harfen"
        meta={[
          {
            name: "description",
            content:
              "Startseite/Landingpage von der Harfenbauwerkstatt Moritz Dortmund",
          },
        ]}
        htmlAttributes={{ lang: "de" }}
      />
      <Navbar />
      <Content flow="row" headline="">
        <div
          className="grid px-0 sm:px-5 justify-items-start sm:justify-items-center pb-16 pt-16 lg:pb-28 lg:pt-28"
          style={{
            backgroundImage: `linear-gradient(rgba(230, 230, 230, 0.8), rgba(230, 230, 230, 0.8)), url(${newLogo})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <p className="text-xl md:text-3xl mb-5 w-full text-left sm:text-center">
            Willkommen auf der Seite der Harfenbauwerkstatt Moritz Dortmund
            <br />– ehemals <strong>„Atelier für keltische Harfen“</strong> von
            Albrecht Nüchter.
          </p>
          <div className="grid grid-flow-col auto-cols-min place-items-center gap-x-20 lg:gap-x-40">
            <ButtonLink destination="harfen" label="Harfen" primary={true} />
            <ButtonLink destination="kontakt" label="Kontakt" primary={true} />
          </div>
        </div>
        <Instagram />
        <LeaderDisclaimer />
      </Content>
    </Layout>
  );
};

export default IndexPage;
