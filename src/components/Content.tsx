import * as React from "react";
import { ReactChild } from "react";

type ContentProps = {
  children: ReactChild[] | ReactChild;
  custom?: string;
};

function Content({ children, custom }: ContentProps) {
  return (
    <div
      className={`grid grid-flow-col place-items-center px-10 gap-x-16 ${custom}`}
    >
      {children}
    </div>
  );
}

export default Content;
