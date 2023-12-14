import { Meta, StoryFn } from "@storybook/react";
import { Input } from "./input";
import { RiUser3Line } from "react-icons/ri";

export default {
  title: "UI/Input",
  component: Input,
  argTypes: {
    label: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<typeof Input> = ({
  label,
  disabled,
  hint,
  errorMessage,
  showErrorMessage,
  icon,
  placeholder,
}) => {
  return (
    <Input
      icon={icon}
      label={label}
      disabled={disabled}
      placeholder={placeholder}
      hint={hint}
      errorMessage={errorMessage}
      showErrorMessage={showErrorMessage}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "olivia@untitledui.com",
  disabled: false,
};

export const IconVariant = Template.bind({});
IconVariant.args = {
  placeholder: "olivia@untitledui.com",
  icon: <RiUser3Line size={20} />,
};

export const LabelVariant = Template.bind({});
LabelVariant.args = {
  placeholder: "olivia@untitledui.com",
  label: "Team Member",
};

export const HintVariant = Template.bind({});
HintVariant.args = {
  placeholder: "olivia@untitledui.com",
  label: "Team Member",
  hint: "Select a team member.",
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  placeholder: "olivia@untitledui.com",
  label: "Team Member",
  errorMessage: "This is an error message.",
  showErrorMessage: true,
};

export const ErrorStateWithoutMessage = Template.bind({});
ErrorStateWithoutMessage.args = {
  placeholder: "olivia@untitledui.com",
  errorMessage: "This is an error message.",
  showErrorMessage: false,
};
