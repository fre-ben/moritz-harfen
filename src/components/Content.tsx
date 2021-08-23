import * as React from "react";
import { ReactChild } from "react";

type ContentProps = {
  children: ReactChild[] | ReactChild;
  className?: string;
  flow: string;
};

function Content({ children, className, flow }: ContentProps) {
  return (
    <div
      className={`grid pt-5 md:px-10 lg:grid-flow-${flow} md:grid-flow-row place-items-center lg:gap-x-16 gap-y-5 bg-background ${className}`}
    >
      {children}
    </div>
  );
}

export default Content;
