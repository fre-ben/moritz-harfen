import { Link } from "gatsby";
import * as React from "react";

export type ButtonLinkProps = {
  destination: string;
  label: string;
  primary: boolean;
};

function ButtonLink({ destination, label, primary }: ButtonLinkProps) {
  const primaryStyle =
    "border-4 border-highlight border-opacity-60 rounded-lg px-4 py-1 hover:border-opacity-100 transition ease-in-out duration-300";

  const secondaryStyle =
    "border-4 border-black border-opacity-70 rounded-lg bg-black text-white bg-opacity-70 px-4 py-1 hover:bg-opacity-100 transition ease-in-out duration-300";

  return (
    <Link
      className={primary ? primaryStyle : secondaryStyle}
      to={`/${destination}`}
    >
      {label}
    </Link>
  );
}

export default ButtonLink;
