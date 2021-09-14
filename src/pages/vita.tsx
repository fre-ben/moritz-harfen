import * as React from "react";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Navbar from "../components/navbar/Navbar";

function Vita() {
  return (
    <Layout>
      <Navbar />
      <Content flow="row" headline="vita">
        <p>Placeholder</p>
      </Content>
    </Layout>
  );
}

export default Vita;
