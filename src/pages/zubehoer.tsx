import * as React from "react";
import ImageSlider from "../components/imageslider/ImageSlider";
import { ReactImageGalleryItem } from "react-image-gallery";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/Content";
import Layout from "../components/Layout";
import saiten from "../images/zubehoer/Saiten.jpg";
import stimmschluessel from "../images/zubehoer/Stimmschluessel.jpg";
import taschen from "../images/zubehoer/Taschen.jpg";
import { Helmet } from "react-helmet";
import { useIntl } from "gatsby-plugin-react-intl";

function Zubehoer() {
  const intl = useIntl();

  const zubehoerImages: ReactImageGalleryItem[] = [
    {
      original: saiten,
      originalClass: "cursor-default",
    },
    {
      original: stimmschluessel,
      originalClass: "cursor-default",
    },
    {
      original: taschen,
      originalClass: "cursor-default",
    },
  ];

  return (
    <Layout>
      <Helmet
        title={intl.formatMessage({ id: "zubehör.meta.title" })}
        meta={[
          {
            name: "description",
            content: intl.formatMessage({ id: "zubehör.meta.content" }),
          },
        ]}
        htmlAttributes={{ lang: intl.locale || "de" }}
      />
      <Navbar />
      <Content
        className="lg:grid-flow-col"
        flow="col"
        headline={intl.formatMessage({ id: "zubehör.headline" })}
      >
        <div className="lg:pl-20 sm:pl-0">
          <ImageSlider images={zubehoerImages} />
        </div>
        <div className="md:w-11/12 lg:w-10/12">
          <p className="mb-5 w-11/12 text-lg">
            {intl.formatMessage({ id: "zubehör.text" })}
          </p>
          <p className="mb-5 w-11/12 text-lg">
            <span
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "zubehör.bestellung" }),
              }}
            />
            <span>
              (
              <a
                href="mailto:moritz-harfen@posteo.de"
                className="text-highlight text-opacity-80 hover:text-opacity-100 transition-all"
              >
                moritz-harfen@posteo.de
              </a>
              ).
            </span>
          </p>
        </div>
      </Content>
    </Layout>
  );
}

export default Zubehoer;
