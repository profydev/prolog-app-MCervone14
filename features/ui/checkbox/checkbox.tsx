import classNames from "classnames";
import styles from "./checkbox.module.scss";

//@ts-expect-error **Desc**: Size is string and it doesn't like that, but will let me pass in "sm" or "md" to display proper sizing in css.
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  size?: "sm" | "md";
}

const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
  const values = ["checked", "partly-checked", "unchecked"];
  const currentIndex = values.indexOf(e.currentTarget.dataset.state!);
  const nextIndex = (currentIndex + 1) % values.length;
  const nextState = values[nextIndex];
  e.currentTarget.dataset.state = nextState;
  e.currentTarget.setAttribute("aria-checked", nextState);
};

export const Checkbox = ({ label, size = "md", ...props }: CheckboxProps) => {
  return (
    <div className={styles.container}>
      <input
        id={label}
        disabled={props.disabled}
        className={classNames(
          styles.checkbox,
          styles[size],
          styles.hovered,
          styles.focused,
        )}
        type="checkbox"
        aria-label={label}
        onClick={onClick}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};
