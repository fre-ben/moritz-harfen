import * as React from "react";
import { ReactChild } from "react";

type NavbarProps = {
  children: ReactChild[];
};

const Layout = ({ children }: NavbarProps) => {
  return <div className="flex justify-center">{children}</div>;
};

export default Layout;
