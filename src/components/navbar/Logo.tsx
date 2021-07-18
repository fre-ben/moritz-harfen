import { Link } from "gatsby";
import * as React from "react";

type LogoProps = {
  mr: string;
};

const Logo = ({ mr }: LogoProps) => {
  return (
    <Link
      className={`text-4xl md:mx-4 lg:mx-7 sm:mr-${mr} whitespace-nowrap`}
      to="/"
    >
      moritz harfen
    </Link>
  );
};

export default Logo;
