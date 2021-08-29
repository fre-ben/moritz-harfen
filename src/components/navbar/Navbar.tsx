import * as React from "react";
import Logo from "./Logo";
import NavLinkDropdown from "./NavLinkDropdown";
import NavLink from "./NavLink";
import BurgermenuButton from "../button/BurgermenuButton";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Navbar = () => {
  const DesktopNavItems = (
    <>
      <NavLinkDropdown text="harfen" link="/harfen" />
      <NavLink text="leihharfen" link="leihharfen" />
      <NavLink text="zubehör" link="/" />
      <NavLink text="werkstatt" link="/" />
      <NavLink text="vita" link="/" />
      <NavLink text="kontakt" link="/" />
    </>
  );

  const MobileNavItems = (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-50"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-50"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Menu.Items className="absolute right-0 justify-items-end w-full mt-6 md:mt-8 pt-6 pb-2 bg-background grid grid-flow-row gap-y-4 ">
        <Menu.Item>
          <NavLink text="harfen" link="harfen" />
          {/* Need to add the single harps here as well */}
        </Menu.Item>
        <Menu.Item>
          <NavLink text="leihharfen" link="leihharfen" />
        </Menu.Item>
        <Menu.Item>
          <NavLink text="zubehör" link="/" />
        </Menu.Item>
        <Menu.Item>
          <NavLink text="werkstatt" link="/" />
        </Menu.Item>
        <Menu.Item>
          <NavLink text="vita" link="/" />
        </Menu.Item>
        <Menu.Item>
          <NavLink text="kontakt" link="/" />
        </Menu.Item>
      </Menu.Items>
    </Transition>
  );

  return (
    <nav className="inline-flex items-center sticky top-0 pt-10 z-50 bg-background w-full justify-center p-full">
      <div className="visible xl:hidden w-full grid grid-flow-col items-center">
        <Logo className="" mr="40" size="" />
        <Menu>
          <Menu.Button className="justify-self-end">
            <BurgermenuButton />
          </Menu.Button>
          {MobileNavItems}
        </Menu>
      </div>
      <div className="hidden xl:block">
        <Logo className="" mr="40" size="4" />
        {DesktopNavItems}
      </div>
    </nav>
  );
};

export default Navbar;
