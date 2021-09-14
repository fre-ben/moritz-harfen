import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import ImageSlider from "./ImageSlider";

export default {
  title: "Components/Imageslider",
  component: ImageSlider,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "moritzBG",
      values: [{ name: "moritzBG", value: "#E6E6E6" }],
    },
  },
  argTypes: {},
} as Meta;

const Template1: ComponentStory<typeof ImageSlider> = args => (
  <ImageSlider {...args} />
);

export const Primary = Template1.bind({});
Primary.args = {};
