import * as React from "react";
import Navbar from "../components/navbar/Navbar";
import Layout from "../components/Layout";
import ButtonLink from "../components/button/ButtonLink";
import Content from "../components/Content";
import LeaderDisclaimer from "../components/leaderDisclaimer/LeaderDisclaimer";
import { Helmet } from "react-helmet";
import newLogo from "../images/new_logo.svg";
import { useIntl } from "gatsby-plugin-react-intl";
import Facebook from "../components/social/Facebook";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  const intl = useIntl();

  return (
    <Layout>
      <Helmet
        title="moritz harfen"
        meta={[
          {
            name: "description",
            content: intl.formatMessage({ id: "index.meta.content" }),
          },
        ]}
        htmlAttributes={{ lang: intl.locale || "de" }}
      />
      <Navbar />
      <Content flow="row" headline="">
        <StaticImage
          src="../images/index/header.jpg"
          alt=""
          layout="constrained"
          height={450}
          className="w-full rounded-lg"
          formats={["webp"]}
        />
        {/* <div
          className="pb-4 pt-4 lg:pb-8 lg:pt-8 w-full rounded-md"
          style={{
            backgroundImage: `linear-gradient(rgba(230, 230, 230, 0.8), rgba(230, 230, 230, 0.8)), url(${newLogo})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        > */}
        <p
          className="text-xl md:text-3xl mb-5 w-full text-left sm:text-center"
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "index.welcome" }),
          }}
        ></p>
        <div className="grid grid-flow-col auto-cols-min place-content-center gap-x-16 sm:gap-x-20 lg:gap-x-40">
          <ButtonLink
            destination="harfen"
            label={intl.formatMessage({ id: "navigation.harfen" })}
            primary={true}
          />
          <ButtonLink
            destination="kontakt"
            label={intl.formatMessage({ id: "navigation.kontakt" })}
            primary={true}
          />
        </div>
        {/* </div> */}
        <Facebook />
        <LeaderDisclaimer />
      </Content>
    </Layout>
  );
};

export default IndexPage;
