import * as React from "react";
import { Helmet } from "react-helmet";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Legal from "../components/legal/Legal";
import Navbar from "../components/navbar/Navbar";
import { useIntl } from "gatsby-plugin-react-intl";

function Kontakt() {
  const intl = useIntl();

  return (
    <Layout>
      <Helmet
        title={intl.formatMessage({ id: "kontakt.meta.title" })}
        meta={[
          {
            name: "description",
            content: intl.formatMessage({ id: "kontakt.meta.content" }),
          },
        ]}
        htmlAttributes={{ lang: intl.locale || "de" }}
      />
      <Navbar />
      <Content
        flow="row"
        headline={intl.formatMessage({ id: "kontakt.headline" })}
      >
        <div className="lg:pl-20 md:w-7/12 lg:w-9/12">
          <div className="grid grid-flow-row md:grid-flow-col md:gap-x-20">
            <div className="grid mb-5 md:mb-0 whitespace-nowrap justify-items-center justify-start">
              <div className="grid grid-flow-col gap-x-12 mb-2">
                <p>
                  Harfenbau
                  <br />
                  Moritz Dortmund
                  <br />
                </p>
                <p>
                  Leihharfen
                  <br />
                  Claudia Uecker
                  <br />
                </p>
              </div>
              Birkenstraße 5<br />
              36166 Haunetal - Kruspis
            </div>
            <p className="whitespace-nowrap">
              {intl.formatMessage({ id: "kontakt.telefon" })}: 06673 918 919
              <br />
              E-Mail:{" "}
              <a
                href="mailto:moritz-harfen@posteo.de"
                className="text-highlight text-opacity-80 hover:text-opacity-100 transition-all"
              >
                moritz-harfen@posteo.de
              </a>
              <br />
              USt-ID: DE341449842
            </p>
          </div>
          <p className="mt-5">
            {intl.formatMessage({ id: "kontakt.termine" })}
          </p>
          <div className="mt-5">
            <h3 className="text-lg font-bold">
              {intl.formatMessage({ id: "kontakt.anfahrt_hl" })}
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "kontakt.anfahrt_text" }),
              }}
            />
          </div>
          <div className="w-40 mt-10 pt-10 border-t-2 border-highlight"></div>
          {/* TODO: Hier extra englische Legal komponente bauen und conditional rendern */}
          <Legal />
          <p className="mt-10 text-sm text-center">
            {intl.formatMessage({ id: "kontakt.webseite" })}{" "}
            <a
              href="https://github.com/fre-ben"
              target="_blank"
              rel="noreferrer"
              className="text-highlight text-opacity-80 hover:text-opacity-100 transition-all"
            >
              fre-ben
            </a>
          </p>
        </div>
      </Content>
    </Layout>
  );
}

export default Kontakt;
