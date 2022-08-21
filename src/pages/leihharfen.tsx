import * as React from "react";
import Navbar from "../components/navbar/Navbar";
import Layout from "../components/Layout";
import ButtonLink from "../components/button/ButtonLink";
import Content from "../components/Content";
import { Helmet } from "react-helmet";
import ImageSlider from "../components/imageslider/ImageSlider";
import { ReactImageGalleryItem } from "react-image-gallery";
import leihharfen from "../images/harfen/leihharfen.jpg";
import { useIntl } from "gatsby-plugin-react-intl";

const Leihharfen = () => {
  const intl = useIntl();

  const leihharfenImages: ReactImageGalleryItem[] = [
    {
      original: leihharfen,
      originalClass: "cursor-default",
    },
  ];

  return (
    <Layout>
      <Helmet
        title={intl.formatMessage({ id: "leihharfen.meta.title" })}
        meta={[
          {
            name: "description",
            content: intl.formatMessage({ id: "leihharfen.meta.content" }),
          },
        ]}
        htmlAttributes={{ lang: intl.locale || "de" }}
      >
        <link rel="canonical" href="https://www.moritz-harfen.de/leihharfen" />
      </Helmet>
      <Navbar />
      <Content
        flow="col"
        headline={intl.formatMessage({ id: "leihharfen.headline" })}
      >
        <div className="lg:pl-20 md:w-11/12 lg:w-10/12 order-2 lg:order-1">
          <p
            className="mb-5 w-11/12"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "leihharfen.leihen" }),
            }}
          />
          <p className="mb-10">
            {intl.formatMessage({ id: "leihharfen.anfragen" })}
          </p>
          <ButtonLink
            destination="kontakt"
            label={intl.formatMessage({ id: "leihharfen.kontakt" })}
            primary={true}
          />
        </div>
        <div className="lg:pr-20 sm:pl-0 order-1 lg:order-2">
          <ImageSlider images={leihharfenImages} />
        </div>
      </Content>
    </Layout>
  );
};

export default Leihharfen;
