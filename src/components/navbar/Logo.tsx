import { Link } from "gatsby";
import * as React from "react";

type LogoProps = {
  size: string;
  mr: string;
};

const Logo = ({ size, mr }: LogoProps) => {
  return (
    <Link to="/">
      <p
        className={`text-${size} md:mx-4 lg:mx-7 sm:mr-${mr} whitespace-nowrap`}
      >
        moritz harfen
      </p>
    </Link>
  );
};

export default Logo;
