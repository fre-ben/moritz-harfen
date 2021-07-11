import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import NavLink from "./NavLink";
import NavLinkDropdown from "./NavLinkDropdown";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import Navbar from "./Navbar";

export default {
  title: "Components/Navbar",
  component: NavLink,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "moritzBG",
      values: [{ name: "moritzBG", value: "#E6E6E6" }],
    },
  },
  argTypes: {},
} as Meta;

const Template1: ComponentStory<typeof NavLink> = args => <NavLink {...args} />;
const Template2: ComponentStory<typeof NavLinkDropdown> = args => (
  <NavLinkDropdown {...args} />
);
const Template3: ComponentStory<typeof Logo> = args => <Logo {...args} />;
const Template4: ComponentStory<typeof LanguageSelector> = args => (
  <LanguageSelector {...args} />
);
const Template5: ComponentStory<typeof Navbar> = args => <Navbar {...args} />;

export const Link = Template1.bind({});
Link.args = {
  text: "Leihinstrumente",
  link: "/",
};

export const LinkDropdown = Template2.bind({});
LinkDropdown.args = {
  text: "Harfen",
  link: "/",
};

export const logo = Template3.bind({});
logo.args = {
  size: "4xl",
  mr: "2",
};

export const LangSelector = Template4.bind({});
LangSelector.args = {};

export const Bar = Template5.bind({});
Bar.args = {};
