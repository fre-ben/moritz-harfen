import { Link } from "gatsby";
import * as React from "react";

type LogoProps = {
  mr: string;
  size: string;
  className: string;
};

const Logo = ({ mr, size, className }: LogoProps) => {
  return (
    <Link
      className={`text-${size}xl md:text-4xl md:mx-4 lg:mx-7 sm:mr-${mr} whitespace-nowrap ${className}`}
      to="/"
    >
      moritz harfen
    </Link>
  );
};

export default Logo;
