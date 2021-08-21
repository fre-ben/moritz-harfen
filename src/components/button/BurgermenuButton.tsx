import * as React from "react";
import { useState } from "react";

function BurgermenuButton() {
  //
  const [path, setPath] = useState("M4 6h16M4 12h16M4 18h16");

  function changePath() {
    if (path === "M4 6h16M4 12h16M4 18h16") {
      setPath("M6 18L18 6M6 6l12 12");
    } else if (path === "M6 18L18 6M6 6l12 12") {
      setPath("M4 6h16M4 12h16M4 18h16");
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={() => changePath()}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={path}
      />
    </svg>
  );
}

export default BurgermenuButton;
