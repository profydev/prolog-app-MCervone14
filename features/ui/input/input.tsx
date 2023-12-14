import classNames from "classnames";
import styles from "./input.module.scss";

interface InputProps extends React.SelectHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: JSX.Element;
  hint?: string;
  errorMessage?: string;
  showErrorMessage?: boolean;
}

export const Input = ({
  label,
  icon,
  hint,
  errorMessage,
  showErrorMessage,
  ...props
}: InputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor="input" className={styles.label}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        {icon && <span>{icon}</span>}
        <input
          placeholder={props.placeholder}
          id="input"
          className={
            errorMessage
              ? classNames(styles.input, styles.error, icon && styles.icon)
              : styles.input || icon
                ? classNames(styles.input, icon && styles.icon)
                : styles.input || (!icon && !errorMessage)
                  ? styles.input
                  : ""
          }
          disabled={props.disabled}
        />
      </div>
      {errorMessage && showErrorMessage ? (
        <span className={styles.errorMessageText}>{errorMessage}</span>
      ) : (
        <span className={styles.hint}>{hint}</span>
      )}
    </div>
  );
};
