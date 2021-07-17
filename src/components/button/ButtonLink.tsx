import { Link } from "gatsby";
import * as React from "react";

export type ButtonLinkProps = {
  destination: string;
  label: string;
  primary: boolean;
};

function ButtonLink({ destination, label, primary }: ButtonLinkProps) {
  const styles = {
    primary:
      "border-highlight hover:border-opacity-100 focus:border-opacity-100",
    secondary:
      "border-black bg-black text-white bg-opacity-70 hover:bg-opacity-100 focus:bg-opacity-100",
  };

  return (
    <Link
      className={`border-4 rounded-lg border-opacity-60 px-4 py-1 transition ease-in-out duration-300 ${
        primary ? styles.primary : styles.secondary
      }`}
      to={`/${destination}`}
    >
      {label}
    </Link>
  );
}

export default ButtonLink;
