import * as React from "react";
import { ReactChild } from "react";

type ContentProps = {
  children: ReactChild[] | ReactChild;
  className?: string;
  flow: string;
  headline: string | JSX.Element;
};

function Content({ children, className, flow, headline }: ContentProps) {
  return (
    <>
      <h1 className="text-5xl pt-5 mb-10 font-medium md:pl-10 lg:pl-20">
        {headline}
      </h1>
      <div
        className={`grid pt-5 md:pl-10 lg:pl-0 lg:grid-flow-${flow} items-center md:justify-items-center md:grid-flow-row lg:gap-x-16 gap-y-5 bg-background ${className}`}
      >
        {children}
      </div>
    </>
  );
}

export default Content;
