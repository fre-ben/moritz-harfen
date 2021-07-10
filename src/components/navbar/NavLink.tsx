import { Link } from "gatsby";
import * as React from "react";

type NavLinkProps = {
  text: string;
  link: string;
};

const NavLink = ({ text, link }: NavLinkProps) => {
  return (
    <p className="inline text-xl md:mx-2 lg:mx-7 border-b border-opacity-0 border-black hover:border-opacity-100">
      <Link to={link}>{text}</Link>
    </p>
  );
};

export default NavLink;
