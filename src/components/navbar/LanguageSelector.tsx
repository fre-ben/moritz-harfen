import * as React from "react";
import { changeLocale } from "gatsby-plugin-react-intl";

//TODO: Add layout/styles for this (once Moritz has translations)
const LanguageSelector = () => {
  return (
    <div className="inline text-right whitespace-nowrap lg:mr-3 mt-5">
      <button onClick={() => changeLocale("de")}>deutsch</button> |{" "}
      <button onClick={() => changeLocale("en")}>english</button>
    </div>
  );
};

export default LanguageSelector;
