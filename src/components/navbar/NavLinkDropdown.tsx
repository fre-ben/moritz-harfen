import { Link } from "gatsby";
import * as React from "react";
import { useState } from "react";

type NavLinkProps = {
  text: string;
  link: string;
};

const NavLinkDropdown = ({ text, link }: NavLinkProps) => {
  const [showDropDown, setshowDropDown] = useState(false);

  //DropdownMenu Needs to get data from strapi?
  const dropDownMenu = (
    <div className="absolute bg-background ml-7">
      <p className="text-lg mx-2 border-b border-opacity-0 border-black hover:border-opacity-100">
        Fiona
      </p>
      <p className="text-lg mx-2 border-b border-opacity-0 border-black hover:border-opacity-100">
        Irwin
      </p>
      <p className="text-lg mx-2 border-b border-opacity-0 border-black hover:border-opacity-100">
        Test
      </p>
    </div>
  );

  return (
    <div
      onMouseEnter={() => setshowDropDown(!showDropDown)}
      onMouseLeave={() => setshowDropDown(!showDropDown)}
      className="inline"
    >
      <p className="inline text-xl mx-7">
        <Link to={link}>{text}</Link>
      </p>
      {showDropDown ? dropDownMenu : null}
    </div>
  );
};

export default NavLinkDropdown;
