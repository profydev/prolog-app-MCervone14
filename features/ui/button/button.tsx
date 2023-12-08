import React from "react";
import classNames from "classnames";
import styles from "./button.module.scss";
import { FaRegCircle } from "react-icons/fa";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  color?: "primary" | "secondary" | "gray" | "error" | "empty" | "empty-gray";
  size?: "sm" | "md" | "lg" | "xl";
  iconPosition?: "leading" | "trailing" | "only" | "none";
  icon?: JSX.Element;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  children,
  primary = false,
  size = "md",
  color = "primary",
  iconPosition = "none",
  icon = <FaRegCircle size={20} />,
  ...props
}: ButtonProps) {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      disabled={props.disabled}
      onFocus={props.onFocus}
      className={classNames(
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        styles.button,
        styles[color],
        styles[size],
        styles[iconPosition],
        styles.hovered,
        styles.focused,
      )}
      {...props}
    >
      {iconPosition === "leading" && (
        <span className={styles.button}>{icon}</span>
      )}
      {iconPosition === "only" ? (
        <span className={styles.button}>{icon}</span>
      ) : (
        children
      )}
      {iconPosition === "trailing" && (
        <span className={styles.button}>{icon}</span>
      )}
    </button>
  );
}
