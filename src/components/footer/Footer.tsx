import * as React from "react";
import { Link } from "gatsby";

function Footer() {
  return (
    <footer className="grid place-items-center mt-20 mb-5">
      <p className="border-t border-moritzGrey px-5 md:px-20 pt-1 font-light text-sm">
        © 2022 | Moritz Dortmund |{" "}
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
