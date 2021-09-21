import { Link } from "gatsby";
import * as React from "react";
import { useState } from "react";

type NavLinkProps = {
  text: string;
  link: string;
};

const NavLinkDropdown = ({ text, link }: NavLinkProps) => {
  const [showDropDown, setshowDropDown] = useState(false);

  const menuItemStyle =
    "text-lg mx-2 border-b-2 border-opacity-0 border-highlight hover:border-opacity-100 cursor-pointer transition ease-in-out duration-300";

  //DropdownMenu Needs to get data from strapi?
  const dropDownMenu = (
    <div className="absolute bg-background md:ml-2 lg:ml-7 pb-3">
      <p className={menuItemStyle}>
        <Link to="/harfen/fiona">fiona (36 Saiten)</Link>
      </p>
      <p className={menuItemStyle}>
        <Link to="/harfen/wyda">wyda (34 Saiten)</Link>
      </p>
      <p className={menuItemStyle}>
        <Link to="/harfen/isabeau">isabeau (29 Saiten)</Link>
      </p>
    </div>
  );

  return (
    <div
      onMouseEnter={() => setshowDropDown(!showDropDown)}
      onMouseLeave={() => setshowDropDown(!showDropDown)}
      className="inline-block"
    >
      <p className="inline text-xl md:ml-2 lg:ml-7">
        <Link to={link}>{text}</Link>
      </p>
      {showDropDown ? dropDownMenu : null}
    </div>
  );
};

export default NavLinkDropdown;
