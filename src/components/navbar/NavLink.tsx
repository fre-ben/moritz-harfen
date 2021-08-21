import { Link } from "gatsby";
import * as React from "react";

type NavLinkProps = {
  text: string;
  link: string;
};

const NavLink = ({ text, link }: NavLinkProps) => {
  return (
    <p className="inline text-lg md:ml-2 lg:ml-7 border-b-2 border-opacity-0 border-highlight hover:border-opacity-100 transition ease-in-out duration-400">
      <Link to={`/${link}`}>{text}</Link>
    </p>
  );
};

export default NavLink;
