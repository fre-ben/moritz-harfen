import * as React from "react";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Navbar from "../components/navbar/Navbar";

function Vita() {
  return (
    <Layout>
      <Navbar />
      <Content flow="row">
        <div className="lg:pl-20 md:w-7/12 lg:w-9/12">
          <h1 className="text-5xl mb-10 font-medium">Kontakt</h1>
          <p>Placeholder</p>
        </div>
      </Content>
    </Layout>
  );
}

export default Vita;
