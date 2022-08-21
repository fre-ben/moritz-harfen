import * as React from "react";
import { Helmet } from "react-helmet";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar/Navbar";
import ImageSlider from "../../components/imageslider/ImageSlider";
import { ReactImageGalleryItem } from "react-image-gallery";
import { useIntl } from "gatsby-plugin-react-intl";

import fiona1 from "../../images/harfen/fiona/fiona-1.jpg";
import fiona2 from "../../images/harfen/fiona/fiona-2.jpg";
import fiona3 from "../../images/harfen/fiona/fiona-3.jpg";
import fiona4 from "../../images/harfen/fiona/fiona-4.jpg";

function Fiona() {
  const intl = useIntl();

  const fionaImages: ReactImageGalleryItem[] = [
    {
      original: fiona1,
      originalClass: "cursor-default",
    },
    {
      original: fiona2,
      originalClass: "cursor-default",
    },
    {
      original: fiona3,
      originalClass: "cursor-default",
    },
    {
      original: fiona4,
      originalClass: "cursor-default",
    },
  ];

  const headline = (
    <div className="grid grid-flow-row gap-y-2 md:gap-y-0 md:grid-flow-col md:justify-start md:gap-x-3">
      <span>fiona</span>
      <span>{intl.formatMessage({ id: "fiona.headline" })}</span>
    </div>
  );

  return (
    <Layout>
      <Helmet
        title={intl.formatMessage({ id: "fiona.meta.title" })}
        meta={[
          {
            name: "description",
            content: intl.formatMessage({ id: "fiona.meta.content" }),
          },
        ]}
        htmlAttributes={{ lang: intl.locale || "de" }}
      />
      <Navbar />
      <Content className="lg:grid-flow-col" flow="col" headline={headline}>
        <div className="lg:pl-20 sm:pl-0">
          <ImageSlider images={fionaImages} />
        </div>
        <div className="md:w-10/12 lg:w-10/12">
          <p
            className="mb-5 lg:w-9/12 text-lg"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "fiona.text" }),
            }}
          />
          <table className="text-lg">
            <tr>
              <td>{intl.formatMessage({ id: "harfen.saiten" })}</td>
              <td className="pl-3">36 (a&lsquo;&lsquo;&lsquo;-A1)</td>
            </tr>
            <tr>
              <td>{intl.formatMessage({ id: "harfen.höhe" })}</td>
              <td className="pl-3">
                {intl.formatMessage({ id: "harfen.circa" })} 140cm
              </td>
            </tr>
            <tr>
              <td>{intl.formatMessage({ id: "harfen.gewicht" })}</td>
              <td className="pl-3">
                {intl.formatMessage({ id: "harfen.circa" })} 10 kg
              </td>
            </tr>
            <tr>
              <td>{intl.formatMessage({ id: "harfen.preis" })}</td>
              <td className="pl-3">
                {intl.formatMessage({ id: "fiona.preis" })}
              </td>
            </tr>
          </table>
        </div>
      </Content>
    </Layout>
  );
}

export default Fiona;
