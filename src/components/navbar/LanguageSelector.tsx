import * as React from "react";
import { changeLocale, useIntl } from "gatsby-plugin-react-intl";

const LanguageSelector = () => {
  const { locale } = useIntl();
  return (
    <div className="inline text-right whitespace-nowrap lg:mr-3 mt-5">
      <button
        onClick={() => changeLocale("de")}
        className={locale === "de" ? "font-bold" : ""}
      >
        deutsch
      </button>{" "}
      |{" "}
      <button
        onClick={() => changeLocale("en")}
        className={locale === "en" ? "font-bold" : ""}
      >
        english
      </button>
    </div>
  );
};

export default LanguageSelector;
