import { Link } from "gatsby";
import * as React from "react";

type LogoProps = {
  size: string;
  mr: string;
};

const Logo = ({ size, mr }: LogoProps) => {
  return (
    <h1 className={`text-${size} md:mx-4 lg:mx-7 mr-${mr} whitespace-nowrap`}>
      <Link to="/">moritz harfen</Link>
    </h1>
  );
};

export default Logo;
