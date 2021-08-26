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
          <div className="grid">
            <StaticImage
              className="relative harfenImage"
              src="../../images/harfen/fiona1.jpg"
              alt="Harfe Modell: Fiona"
              placeholder="blurred"
              width={400}
              height={500}
              onMouseEnter={() => null}
            />
            <p className="text-center mt-2 font-bold text-3xl text-highlight">
              Fiona
            </p>
            <p className="text-center font-bold text-lg">(36 Saiten)</p>
          </div>
          <div className="supertest grid place-items-center">
            <p className="mt-2 font-bold text-3xl text-highlight opacity-0 w-full h-full hover:opacity-100">
              Fiona
            </p>
          </div>
        </section>
      </Content>
    </Layout>
  );
}

export default Harfen;
