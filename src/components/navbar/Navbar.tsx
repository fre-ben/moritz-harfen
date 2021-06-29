import * as React from "react";
import Logo from "./Logo";
import NavLinkDropdown from "./NavLinkDropdown";
import NavLink from "./NavLink";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  return (
    <nav className="inline-flex items-center self-start sticky top-10">
      <Logo size="4xl" mr="40" />
      <NavLinkDropdown text="harfen" link="/" />
      <NavLink text="leihharfen" link="/" />
      <NavLink text="zubehör" link="/" />
      <NavLink text="werkstatt" link="/" />
      <NavLink text="vita" link="/" />
      <NavLink text="kontakt" link="/" />
      <LanguageSelector />
    </nav>
  );
};

export default Navbar;
