import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import ButtonLink from "./ButtonLink";

export default {
  title: "Components/Button",
  component: ButtonLink,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "moritzBG",
      values: [{ name: "moritzBG", value: "#E6E6E6" }],
    },
  },
  argTypes: {},
} as Meta;

const Template1: ComponentStory<typeof ButtonLink> = args => (
  <ButtonLink {...args} />
);

export const Primary = Template1.bind({});
Primary.args = {
  link: "Kontakt",
  label: "Kontakt",
  primary: false,
};
