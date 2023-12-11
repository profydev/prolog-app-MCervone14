import { Meta, StoryFn } from "@storybook/react";
import { Checkbox } from "./checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = ({ size, disabled, label }) => (
  <div>
    <Checkbox size={size} disabled={disabled} label={label} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: "md",
  label: "Label",
  disabled: false,
};
