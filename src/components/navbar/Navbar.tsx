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
      <NavLink text="zubehör" link="zubehoer" />
      <NavLink text="werkstatt" link="werkstatt" />
      {/* <NavLink text="vita" link="vita" /> */}
      <NavLink text="kontakt" link="kontakt" />
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
      <Menu.Items className="absolute right-0 justify-items-end w-full mt-100 pt-6 pb-2 bg-background grid grid-flow-row gap-y-4 ">
        <Menu.Item>
          <NavLink className="mr-5" text="harfen" link="harfen" />
        </Menu.Item>
        <Menu.Item>
          <NavLink className="mr-5" text="fiona" link="harfen/fiona" />
        </Menu.Item>
        <Menu.Item>
          <NavLink className="mr-5" text="wyda" link="harfen/wyda" />
        </Menu.Item>
        <Menu.Item>
          <NavLink className="mr-5" text="isabeau" link="harfen/isabeau" />
        </Menu.Item>
        <Menu.Item>
          <NavLink className="mr-5" text="leihharfen" link="leihharfen" />
        </Menu.Item>
        <Menu.Item>
          <NavLink className="mr-5" text="zubehör" link="zubehoer" />
        </Menu.Item>
        <Menu.Item>
          <NavLink className="mr-5" text="werkstatt" link="werkstatt" />
        </Menu.Item>
        {/* <Menu.Item>
          <NavLink text="vita" link="vita" />
        </Menu.Item> */}
        <Menu.Item>
          <NavLink className="mr-5" text="kontakt" link="kontakt" />
        </Menu.Item>
      </Menu.Items>
    </Transition>
  );

  return (
    <nav className="inline-flex items-center sticky top-0 pt-10 lg:pl-10 md:pl-0 z-50 bg-background w-full justify-start">
      <div className="visible lg:hidden w-full grid grid-flow-col items-center">
        <Logo className="" mr="10" size="" />
        <Menu>
          <Menu.Button className="justify-self-end">
            <BurgermenuButton />
          </Menu.Button>
          {MobileNavItems}
        </Menu>
      </div>
      <div className="hidden w-full lg:grid grid-flow-col items-center justify-items-center">
        <Logo className="" mr="10" size="4" />
        {DesktopNavItems}
      </div>
    </nav>
  );
};

export default Navbar;
