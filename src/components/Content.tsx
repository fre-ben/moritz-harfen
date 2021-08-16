import * as React from "react";
import { ReactChild } from "react";

type ContentProps = {
  children: ReactChild[] | ReactChild;
  className?: string;
};

function Content({ children, className }: ContentProps) {
  return (
    <div
      className={`grid lg:grid-flow-col md:grid-flow-row place-items-center lg:gap-x-16 sm:gap-y-5  bg-background ${className}`}
    >
      {children}
    </div>
  );
}

export default Content;
