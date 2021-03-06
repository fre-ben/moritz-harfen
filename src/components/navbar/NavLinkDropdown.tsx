import { Link, useIntl } from "gatsby-plugin-react-intl";
import * as React from "react";
import { useState } from "react";

type NavLinkProps = {
  text: string;
  link: string;
};

const NavLinkDropdown = ({ text, link }: NavLinkProps) => {
  const intl = useIntl();

  const [showDropDown, setshowDropDown] = useState(false);

  const menuItemStyle =
    "text-lg mx-2 border-b-2 border-opacity-0 border-highlight hover:border-opacity-100 cursor-pointer transition ease-in-out duration-300";

  //DropdownMenu Needs to get data from strapi?
  const dropDownMenu = (
    <div className="absolute bg-background md:ml-2 lg:ml-7 pb-3">
      <p className={menuItemStyle}>
        <Link to="/harfen/fiona">
          {intl.formatMessage({ id: "navigation.fiona" })}
        </Link>
      </p>
      <p className={menuItemStyle}>
        <Link to="/harfen/wyda">
          {intl.formatMessage({ id: "navigation.wyda" })}
        </Link>
      </p>
      <p className={menuItemStyle}>
        <Link to="/harfen/isabeau">
          {intl.formatMessage({ id: "navigation.isabeau" })}
        </Link>
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
