import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-react-intl";
import * as React from "react";
import { Helmet } from "react-helmet";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Navbar from "../components/navbar/Navbar";

function Werkstatt() {
  const intl = useIntl();

  return (
    <Layout>
      <Helmet
        title={intl.formatMessage({ id: "werkstatt.meta.title" })}
        meta={[
          {
            name: "description",
            content: intl.formatMessage({ id: "werkstatt.meta.content" }),
          },
        ]}
        htmlAttributes={{ lang: intl.locale || "de" }}
      />
      <Navbar />
      <Content
        flow="row"
        headline={intl.formatMessage({ id: "werkstatt.headline" })}
      >
        <section className="lg:pl-20 md:w-11/12 lg:w-9/12 grid grid-flow-row gap-y-5">
          <div className="grid grid-flow-row sm:grid-flow-col gap-y-3 sm:gap-y-0 sm:gap-x-5 items-center">
            <StaticImage
              src="../images/werkstatt/Werkstatt_1.jpg"
              alt={intl.formatMessage({ id: "werkstatt.image_alt_1" })}
              placeholder="blurred"
              width={400}
              quality={100}
            />
            <p>{intl.formatMessage({ id: "werkstatt.text_1" })}</p>
          </div>
          <div className="grid grid-flow-row sm:grid-flow-col gap-y-3 sm:gap-y-0 sm:gap-x-5 items-center">
            <StaticImage
              src="../images/werkstatt/Aalbrecht.jpg"
              alt={intl.formatMessage({ id: "werkstatt.image_alt_2" })}
              placeholder="blurred"
              width={200}
              quality={100}
              className="order-1 sm:order-2"
            />
            <p className="order-2 sm:order-1">
              {intl.formatMessage({ id: "werkstatt.text_2" })}
            </p>
          </div>
          <div className="grid grid-flow-row sm:grid-flow-col gap-y-3 sm:gap-y-0 sm:gap-x-5 items-center">
            <StaticImage
              src="../images/werkstatt/Werkstatt_2_neu.jpg"
              alt={intl.formatMessage({ id: "werkstatt.image_alt_3" })}
              placeholder="blurred"
              width={400}
              quality={100}
            />
            <p>{intl.formatMessage({ id: "werkstatt.text_3" })}</p>
          </div>
        </section>
      </Content>
    </Layout>
  );
}

export default Werkstatt;
