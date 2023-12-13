import { Meta, StoryFn } from "@storybook/react";
import { Select } from "./select";
import { RiUser3Line } from "react-icons/ri";

export default {
  title: "UI/Select",
  component: Select,
  argTypes: {
    label: { control: "text" },
    options: { control: "array" },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<typeof Select> = ({
  label,
  options,
  disabled,
  hint,
  errorMessage,
  icon,
}) => {
  return (
    <Select
      icon={icon}
      options={options}
      label={label}
      disabled={disabled}
      hint={hint}
      errorMessage={errorMessage}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: ["Todd Howard", "Jessica Alba", "Rick and Morty"],
};

export const IconVariant = Template.bind({});
IconVariant.args = {
  options: ["Todd Howard", "Jessica Alba", "Rick and Morty"],
  icon: <RiUser3Line size={20} />,
};

export const LabelVariant = Template.bind({});
LabelVariant.args = {
  options: ["Todd Howard", "Jessica Alba", "Rick and Morty"],
  label: "Team Member",
};

export const HintVariant = Template.bind({});
HintVariant.args = {
  options: ["Todd Howard", "Jessica Alba", "Rick and Morty"],
  label: "Team Member",
  hint: "Select a team member.",
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  options: ["Todd Howard", "Jessica Alba", "Rick and Morty"],
  label: "Team Member",
  errorMessage: "This is an error message.",
};
