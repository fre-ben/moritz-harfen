import * as React from "react";
import { ReactChild } from "react";

type LayoutProps = {
  children: ReactChild[] | ReactChild;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid auto-rows-min gap-y-12 place-items-center px-5 md:px-10 min-h-screen min-w-screen bg-background">
      {children}
    </div>
  );
};

export default Layout;
