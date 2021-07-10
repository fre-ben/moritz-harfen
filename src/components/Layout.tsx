import * as React from "react";
import { ReactChild } from "react";

type NavbarProps = {
  children: ReactChild[];
};

const Layout = ({ children }: NavbarProps) => {
  return (
    <div className="grid grid-flow-row justify-center items-center py-10 px-10 min-h-screen min-w-screen bg-background">
      {children}
    </div>
  );
};

export default Layout;
