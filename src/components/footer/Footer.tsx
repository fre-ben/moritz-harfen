import * as React from "react";
import { Link } from "gatsby";

function Footer() {
  return (
    <footer className="mt-20">
      <p className="border-t border-moritzGrey px-5 md:px-20 pt-1 font-light text-sm">
        © 2021 | Moritz Dortmund |{" "}
        <Link
          className="border-b-2 border-opacity-0 border-highlight hover:border-opacity-100 transition ease-in-out duration-300"
          to="/kontakt"
        >
          Impressum
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
