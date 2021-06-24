import { Link } from "gatsby";
import * as React from "react";

type LogoProps = {
  size: string;
  mr: string;
};

const Logo = ({ size, mr }: LogoProps) => {
  return (
    <h1 className={`text-${size} mx-2 mr-${mr}`}>
      <Link to="/">moritz harfen</Link>
    </h1>
  );
};

export default Logo;
