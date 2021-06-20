import * as React from "react";
import Logo from "../components/navbar/Logo";
import NavLink from "../components/navbar/NavLink";
import NavLinkDropdown from "../components/navbar/NavLinkDropdown";
import LanguageSelector from "../components/navbar/LanguageSelector";

const IndexPage = () => {
  return (
    <>
      <Logo size="4xl" />
      <NavLinkDropdown text="Harfen" link="/" />
      <NavLink text="Tolle Sachen" link="/" />
      <NavLink text="Werkstatt" link="/" />
      <NavLink text="Zubehör" link="/" />
      <LanguageSelector />

      <p className="font-bold text-2xl block my-4">
        Test Das ist ein toller Text, der hoffentlich richtig dargestellt wird
      </p>
    </>
  );
};

export default IndexPage;
