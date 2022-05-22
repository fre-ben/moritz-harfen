import * as React from "react";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar/Navbar";
import ImageSlider from "../../components/imageslider/ImageSlider";
import { ReactImageGalleryItem } from "react-image-gallery";
import { Helmet } from "react-helmet";
import { useIntl } from "gatsby-plugin-react-intl";

import wyda1 from "../../images/harfen/wyda/wyda1.jpg";
import wyda2 from "../../images/harfen/wyda/wyda2.jpg";
import wyda3 from "../../images/harfen/wyda/wyda3.jpg";
import wyda4 from "../../images/harfen/wyda/wyda4.jpg";

function Wyda() {
  const intl = useIntl();

  const wydaImages: ReactImageGalleryItem[] = [
    {
      original: wyda1,
      originalClass: "cursor-default",
    },
    {
      original: wyda2,
      originalClass: "cursor-default",
    },
    {
      original: wyda3,
      originalClass: "cursor-default",
    },
    {
      original: wyda4,
      originalClass: "cursor-default",
    },
  ];

  const headline = (
    <div className="grid grid-flow-row gap-y-2 md:gap-y-0 md:grid-flow-col md:justify-start md:gap-x-3">
      <span>wyda</span>
      <span>{intl.formatMessage({ id: "wyda.headline" })}</span>
    </div>
  );

  return (
    <Layout>
      <Helmet
        title={intl.formatMessage({ id: "wyda.meta.title" })}
        meta={[
          {
            name: "description",
            content: intl.formatMessage({ id: "wyda.meta.content" }),
          },
        ]}
        htmlAttributes={{ lang: intl.locale || "de" }}
      />
      <Navbar />
      <Content className="lg:grid-flow-col" flow="col" headline={headline}>
        <div className="lg:pl-20 sm:pl-0">
          <ImageSlider images={wydaImages} />
        </div>
        <div className="md:w-10/12 lg:w-10/12">
          <p
            className="mb-5 w-11/12 text-lg"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "wyda.text" }),
            }}
          />
          <table className="text-lg">
            <tr>
              <td>{intl.formatMessage({ id: "harfen.saiten" })}</td>
              <td className="pl-3">34 (a&lsquo;&lsquo;&lsquo;-C)</td>
            </tr>
            <tr>
              <td>{intl.formatMessage({ id: "harfen.höhe" })}</td>
              <td className="pl-3">
                {intl.formatMessage({ id: "harfen.circa" })} 118cm
              </td>
            </tr>
            <tr>
              <td>{intl.formatMessage({ id: "harfen.gewicht" })}</td>
              <td className="pl-3">
                {intl.formatMessage({ id: "harfen.circa" })} 7 kg
              </td>
            </tr>
          </table>
        </div>
      </Content>
    </Layout>
  );
}

export default Wyda;
