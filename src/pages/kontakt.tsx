import * as React from "react";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Navbar from "../components/navbar/Navbar";

function Vita() {
  return (
    <Layout>
      <Navbar />
      <Content flow="row" headline="Kontakt">
        <div className="lg:pl-20 md:w-7/12 lg:w-9/12">
          <div className="grid grid-flow-row md:grid-flow-col md:gap-x-20">
            <p className="mb-5 md:mb-0 whitespace-nowrap">
              Harfenbauwerkstatt
              <br />
              Moritz Dortmund
              <br />
              Birkenstraße 5<br />
              36166 Haunetal - Kruspis
            </p>
            <p className="whitespace-nowrap">
              Telefon: 06673 918 919
              <br />
              E-Mail: moritz-harfen@posteo.de
            </p>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Vita;
