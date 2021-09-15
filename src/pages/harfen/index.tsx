import * as React from "react";
import ButtonLink from "../../components/button/ButtonLink";
import Content from "../../components/Content";
import Layout from "../../components/Layout";
import Navbar from "../../components/navbar/Navbar";

function Harfen() {
  return (
    <Layout>
      <Navbar />
      {/* Seite braucht einen Infotext zu den Harfen, eventuell image gallery mit allen Harfen und 3 Buttons die jeweils zu den Harfen verlinken */}
      <Content className="lg:grid-flow-col" flow="col" headline="harfen">
        <div className="lg:pl-20 md:w-7/12 lg:w-9/12">
          <p className="mb-5 w-11/12">
            In dieser Werkstatt entstehen handgefertigte Harfen aus
            ausgewählten, regionalen Hölzern. Hier muss noch mehr Text hin, weil
            Google will das so.
          </p>
          <p className="mb-10">Schauen Sie nur - tolle Harfen!</p>
          <div className="grid grid-flow-col place-items-start">
            <ButtonLink
              destination="harfen/fiona"
              label="Fiona"
              primary={true}
            />
            <ButtonLink destination="harfen/wyda" label="Wyda" primary={true} />
            <ButtonLink
              destination="harfen/isabeu"
              label="Isabeu"
              primary={true}
            />
          </div>
        </div>
        <div className="pr-10">Platzhalter image gallery</div>
      </Content>
    </Layout>
  );
}

export default Harfen;
