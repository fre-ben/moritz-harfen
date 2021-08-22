import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "moritzBG",
      values: [{ name: "moritzBG", value: "#E6E6E6" }],
    },
  },
  argTypes: {},
} as Meta;

const Template1: ComponentStory<typeof Footer> = args => <Footer {...args} />;

export const Primary = Template1.bind({});
Primary.args = {};
