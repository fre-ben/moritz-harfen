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
      <Content className="lg:grid-flow-col" flow="col" headline="Harfen">
        <div className="lg:pl-20 md:w-7/12 lg:w-9/12">
          <p className="mb-5 w-11/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
