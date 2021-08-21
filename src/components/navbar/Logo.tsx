import { Link } from "gatsby";
import * as React from "react";

type LogoProps = {
  mr: string;
  size: string;
};

const Logo = ({ mr, size }: LogoProps) => {
  return (
    <Link
      className={`text-${size}xl md:mx-4 lg:mx-7 sm:mr-${mr} whitespace-nowrap`}
      to="/"
    >
      moritz harfen
    </Link>
  );
};

export default Logo;
