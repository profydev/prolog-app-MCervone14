import React from "react";
import { Button } from "@features/ui";
import classNames from "classnames";
import styles from "./menu-item-link.module.scss";

type MenuItemProps = {
  className?: string;
  text: string;
  iconSrc: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isCollapsed: boolean;
  name?: string;
};

export function MenuItemButton({
  className,
  text,
  onClick,
  iconSrc,
  isCollapsed,
  name,
}: MenuItemProps) {
  return (
    <li className={classNames(styles.listItem, className)}>
      <Button name={name} className={styles.anchor} onClick={onClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.icon} src={iconSrc} alt={`${text} icon`} />{" "}
        {!isCollapsed && text}{" "}
      </Button>
    </li>
  );
}
