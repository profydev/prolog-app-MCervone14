import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({
  size,
  color,
  iconPosition,
  children,
  disabled,
}) => (
  <div>
    <Button
      iconPosition={iconPosition}
      color={color}
      size={size}
      disabled={disabled}
    >
      {children}
    </Button>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  size: "md",
  color: "primary",
  children: "Button CTA",
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "md",
  color: "secondary",
  children: "Button CTA",
  disabled: false,
};

export const Gray = Template.bind({});
Gray.args = {
  size: "md",
  color: "gray",
  children: "Button CTA",
  disabled: false,
};

export const Empty = Template.bind({});
Empty.args = {
  size: "md",
  color: "empty",
  children: "Button CTA",
  disabled: false,
};

export const EmptyGray = Template.bind({});
EmptyGray.args = {
  size: "md",
  color: "empty-gray",
  children: "Button CTA",
  disabled: false,
};

export const Error = Template.bind({});
Error.args = {
  size: "md",
  color: "error",
  children: "Button CTA",
  disabled: false,
};
