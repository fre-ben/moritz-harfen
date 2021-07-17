import * as React from "react";
import Navbar from "../components/navbar/Navbar";
import Layout from "../components/Layout";
import ButtonLink from "../components/button/ButtonLink";

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <h1>Hello World</h1>
      <ButtonLink destination="Test" label="Test" primary={true} />
      <ButtonLink destination="Kontakt" label="Kontakt" primary={false} />
    </Layout>
  );
};

export default IndexPage;
