import * as React from "react";
import { Helmet } from "react-helmet";
import { ReactImageGalleryItem } from "react-image-gallery";
import ButtonLink from "../../components/button/ButtonLink";
import Content from "../../components/Content";
import ImageSlider from "../../components/imageslider/ImageSlider";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar/Navbar";
import { useIntl } from "gatsby-plugin-react-intl";

import harps1 from "../../images/harfen/index/harfen-1.jpg";
import harps2 from "../../images/harfen/index/harfen-2.jpg";
import harps3 from "../../images/harfen/index/harfen-3.jpg";
import harps4 from "../../images/harfen/index/harfen-4.jpg";
import harps5 from "../../images/harfen/index/harfen-5.jpg";
import harps6 from "../../images/harfen/index/harfen-6.jpg";
import harps7 from "../../images/harfen/index/harfen-7.jpg";
import harps8 from "../../images/harfen/index/harfen-8.jpg";
import harps9 from "../../images/harfen/index/harfen-9.jpg";
import harps10 from "../../images/harfen/index/harfen-10.jpg";
import { shuffleArray } from "../../lib/helpers";

function Harfen() {
  const intl = useIntl();

  const harpImages: ReactImageGalleryItem[] = [
    {
      original: harps1,
      originalClass: "cursor-default",
    },
    {
      original: harps2,
      originalClass: "cursor-default",
    },
    {
      original: harps3,
      originalClass: "cursor-default",
    },
    {
      original: harps4,
      originalClass: "cursor-default",
    },
    {
      original: harps5,
      originalClass: "cursor-default",
    },
    {
      original: harps6,
      originalClass: "cursor-default",
    },
    {
      original: harps7,
      originalClass: "cursor-default",
    },
    {
      original: harps8,
      originalClass: "cursor-default",
    },
    {
      original: harps9,
      originalClass: "cursor-default",
    },
    {
      original: harps10,
      originalClass: "cursor-default",
    },
  ];

  // Shuffles harpImages on pageload
  shuffleArray(harpImages);

  return (
    <Layout>
      <Helmet
        title={intl.formatMessage({ id: "harfen.meta.title" })}
        meta={[
          {
            name: "description",
            content: intl.formatMessage({ id: "harfen.meta.content" }),
          },
        ]}
        htmlAttributes={{ lang: intl.locale || "de" }}
      />
      <Navbar />
      <Content
        className="lg:grid-flow-col"
        flow="col"
        headline={intl.formatMessage({ id: "harfen.headline" })}
      >
        <div className="lg:pl-20 md:w-7/12 lg:w-9/12">
          <p
            className="mb-5 w-11/12"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "harfen.text" }),
            }}
          />
          <div className="grid grid-flow-col gap-x-2 place-items-start w-10/12">
            <ButtonLink
              destination="harfen/fiona"
              label="Fiona"
              labelSecondary={intl.formatMessage({ id: "harfen.fiona" })}
              primary={true}
              doublespace={true}
            />
            <ButtonLink
              destination="harfen/wyda"
              label="Wyda"
              labelSecondary={intl.formatMessage({ id: "harfen.wyda" })}
              primary={true}
              doublespace={true}
            />
            <ButtonLink
              destination="harfen/isabeau"
              label="Isabeau"
              labelSecondary={intl.formatMessage({ id: "harfen.isabeau" })}
              primary={true}
              doublespace={true}
            />
          </div>
        </div>
        <div className="mr-0 lg:mr-10">
          <ImageSlider images={harpImages} />
        </div>
      </Content>
    </Layout>
  );
}

export default Harfen;
