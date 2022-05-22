import { Link } from "gatsby-plugin-react-intl";
import * as React from "react";

export type ButtonLinkProps = {
  destination: string;
  label: string;
  primary: boolean;
  doublespace?: boolean;
  labelSecondary?: string;
};

function ButtonLink({
  destination,
  label,
  primary,
  doublespace,
  labelSecondary,
}: ButtonLinkProps) {
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
      <span>{label}</span>
      {doublespace ? <p>{labelSecondary}</p> : null}
    </Link>
  );
}

export default ButtonLink;
