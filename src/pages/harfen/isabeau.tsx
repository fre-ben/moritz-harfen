import * as React from "react";
import { Helmet } from "react-helmet";
import { ReactImageGalleryItem } from "react-image-gallery";
import Content from "../../components/Content";
import ImageSlider from "../../components/imageslider/ImageSlider";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar/Navbar";
import { useIntl } from "gatsby-plugin-react-intl";

import isabeau1 from "../../images/harfen/isabeau/Export-0102.jpg";
import isabeau2 from "../../images/harfen/isabeau/Export-0105.jpg";
import isabeau3 from "../../images/harfen/isabeau/Export-0124.jpg";
import isabeau4 from "../../images/harfen/isabeau/Export-0184.jpg";

function Isabeau() {
  const intl = useIntl();

  const isabeauImages: ReactImageGalleryItem[] = [
    {
      original: isabeau1,
      originalClass: "cursor-default",
    },
    {
      original: isabeau2,
      originalClass: "cursor-default",
    },
    {
      original: isabeau3,
      originalClass: "cursor-default",
    },
    {
      original: isabeau4,
      originalClass: "cursor-default",
    },
  ];

  const headline = (
    <div className="grid grid-flow-row gap-y-2 md:gap-y-0 md:grid-flow-col md:justify-start md:gap-x-3">
      <span>isabeau</span>
      <span>{intl.formatMessage({ id: "isabeau.headline" })}</span>
    </div>
  );

  return (
    <Layout>
      <Helmet
        title={intl.formatMessage({ id: "isabeau.meta.title" })}
        meta={[
          {
            name: "description",
            content: intl.formatMessage({ id: "isabeau.meta.content" }),
          },
        ]}
        htmlAttributes={{ lang: intl.locale || "de" }}
      />
      <Navbar />
      <Content className="lg:grid-flow-col" flow="col" headline={headline}>
        <div className="lg:pl-20 sm:pl-0">
          <ImageSlider images={isabeauImages} />
        </div>
        <div className="md:w-10/12 lg:w-10/12">
          <p className="mb-5 lg:w-9/12 text-lg">
            {intl.formatMessage({ id: "isabeau.text" })}
          </p>
          <table className="text-lg">
            <tr>
              <td>{intl.formatMessage({ id: "harfen.saiten" })}</td>
              <td className="pl-3">29 (a&lsquo;&lsquo;&lsquo;-A)</td>
            </tr>
            <tr>
              <td>{intl.formatMessage({ id: "harfen.höhe" })}</td>
              <td className="pl-3">
                {intl.formatMessage({ id: "harfen.circa" })} 92cm
              </td>
            </tr>
            <tr>
              <td>{intl.formatMessage({ id: "harfen.gewicht" })}</td>
              <td className="pl-3">
                {intl.formatMessage({ id: "harfen.circa" })} 4,5 kg
              </td>
            </tr>
            <tr>
              <td>{intl.formatMessage({ id: "harfen.preis" })}</td>
              <td className="pl-3">
                {intl.formatMessage({ id: "isabeau.preis" })}
              </td>
            </tr>
          </table>
        </div>
      </Content>
    </Layout>
  );
}

export default Isabeau;
