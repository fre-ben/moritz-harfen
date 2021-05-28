import * as React from "react";
import Logo from "../components/navbar/Logo";
import NavLink from "../components/navbar/NavLink";

const IndexPage = () => {
  return (
    <>
      <Logo size="4xl" />
      <NavLink text="Harfen" link="/" />
      <NavLink text="Werkstatt" link="/" />
      <NavLink text="Zubehör" link="/" />
      <p className="font-bold text-2xl block my-4">
        Test Das ist ein toller Text, der hoffentlich richtig dargestellt wird
      </p>
    </>
  );
};

export default IndexPage;
