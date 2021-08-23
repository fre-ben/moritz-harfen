import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar/Navbar";
import "../../css/custom.css";

function Harfen() {
  return (
    <Layout>
      <Navbar />
      <Content flow="row">
        <h1 className="text-5xl font-medium justify-self-start">Harfen</h1>
        <section className="grid grid-flow-col gap-x-5">
          <StaticImage
            className="harfenImage"
            src="../../images/harfen/fiona1.jpg"
            alt="Harfe Modell: Fiona"
            placeholder="blurred"
            width={400}
            height={500}
            onMouseEnter={() => null}
          />
          <StaticImage
            className="harfenImage"
            src="../../images/harfen/wyda1.jpg"
            alt="Harfe Modell: Fiona"
            placeholder="blurred"
            width={400}
            height={500}
          />
          <StaticImage
            className="harfenImage"
            src="../../images/harfen/isabeau1.jpg"
            alt="Harfe Modell: Fiona"
            placeholder="blurred"
            width={400}
            height={500}
          />
        </section>
      </Content>
    </Layout>
  );
}

export default Harfen;
