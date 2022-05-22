import * as React from "react";
import { ReactChild } from "react";
import Footer from "./footer/Footer";
// import LanguageSelector from "./navbar/LanguageSelector";

type LayoutProps = {
  children: ReactChild[] | ReactChild;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid auto-rows-min px-5 md:px-10 lg:px-5 min-h-screen min-w-min bg-background">
      {/* <LanguageSelector /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
