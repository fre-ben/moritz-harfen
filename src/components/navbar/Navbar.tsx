import * as React from "react";
import Logo from "./Logo";
import NavLinkDropdown from "./NavLinkDropdown";
import NavLink from "./NavLink";
import BurgermenuButton from "../button/BurgermenuButton";

const Navbar = () => {
  const NavItems = () => {
    return (
      <>
        <NavLinkDropdown text="harfen" link="/" />
        <NavLink text="leihharfen" link="/" />
        <NavLink text="zubehör" link="/" />
        <NavLink text="werkstatt" link="/" />
        <NavLink text="vita" link="/" />
        <NavLink text="kontakt" link="/" />
      </>
    );
  };

  return (
    <nav className="inline-flex items-center sticky top-0 pt-10 z-50 bg-background w-full justify-center p-full">
      <div className="visible md:hidden w-full grid grid-flow-col items-center">
        <Logo mr="40" size="" />
        <BurgermenuButton />
        {/* Add Dropdown for NavLink Options, dropping down when clicking Burgermenu */}
      </div>
      <div className="hidden md:block">
        <Logo mr="40" size="4" />
        {NavItems()}
      </div>
    </nav>
  );
};

export default Navbar;
