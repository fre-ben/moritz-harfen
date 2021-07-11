import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import NavLink from "./NavLink";

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

const Template: ComponentStory<typeof NavLink> = args => <NavLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Harfen",
  link: "/",
};
