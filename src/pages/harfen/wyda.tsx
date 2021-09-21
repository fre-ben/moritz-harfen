import * as React from "react";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar/Navbar";
import ImageSlider from "../../components/imageslider/ImageSlider";
import { ReactImageGalleryItem } from "react-image-gallery";
import wyda1 from "../../images/harfen/wyda1.jpg";
import wyda2 from "../../images/harfen/wyda2.jpg";
import wyda3 from "../../images/harfen/wyda3.jpg";
import wyda4 from "../../images/harfen/wyda4.jpg";

function Wyda() {
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

  return (
    <Layout>
      <Navbar />
      <Content
        className="lg:grid-flow-col"
        flow="col"
        headline="wyda (34 Saiten)"
      >
        <div className="lg:pl-20 sm:pl-0">
          <ImageSlider images={wydaImages} />
        </div>
        <div className="md:w-7/12 lg:w-10/12">
          <p className="mb-5 w-11/12 text-lg">
            Die Mittlere von Albrecht Nüchters Harfen:
            <br />
            Voller Klang und großer Saitenumfang in einer handlicheren Größe.
          </p>
          <table className="text-lg">
            <tr>
              <td>Saiten:</td>
              <td className="pl-3">34 (a&lsquo;&lsquo;&lsquo;-C)</td>
            </tr>
            <tr>
              <td>Höhe:</td>
              <td className="pl-3">ca. 118cm</td>
            </tr>
            <tr>
              <td>Gewicht:</td>
              <td className="pl-3">ca. 7 kg</td>
            </tr>
          </table>
        </div>
      </Content>
    </Layout>
  );
}

export default Wyda;
