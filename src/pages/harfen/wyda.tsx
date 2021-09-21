import * as React from "react";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar/Navbar";
import ImageSlider from "../../components/imageslider/ImageSlider";

function Wyda() {
  return (
    <Layout>
      <Navbar />
      <Content className="lg:grid-flow-col" flow="col" headline="wyda">
        <div className="lg:pl-20 sm:pl-0">
          <ImageSlider images={null} />
        </div>
        <div className="md:w-7/12 lg:w-9/12">
          <p className="mb-5 w-11/12">
            Die Mittlere von Albrecht Nüchters Harfen:
            <br />
            Voller Klang und großer Saitenumfang in einer handlicheren Größe.
          </p>
          <table>
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
