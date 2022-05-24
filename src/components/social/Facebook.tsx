import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";

function Facebook() {
  const intl = useIntl();

  return (
    <section className="mt-10">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/Moritz-harfen-108244491874567"
        className="flex flex-col items-center gap-y-2"
        title={intl.formatMessage({ id: "facebook.title" })}
      >
        <svg
          width="72px"
          height="72px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:fill-highlight transition-colors fill-highlight60"
        >
          <path
            fillRule="evenodd"
            d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M13,12.0043945 L11.1330566,12.0043945 L11.1330566,10.0043945 L13,10.0043945 L13,9 C13,7.34314575 14.3431458,6 16,6 L17,6 L17,8 L16,8 C15.4477153,8 15,8.44771525 15,9 L15,10.0043945 L16.9824219,10.0043945 L16.9824219,12.0043945 L15,12.0043945 L15,18 L13,18 L13,12.0043945 Z"
          />
        </svg>

        <p>{intl.formatMessage({ id: "facebook.text" })}</p>
      </a>
    </section>
  );
}

export default Facebook;
