import classNames from "classnames";
import styles from "./input.module.scss";
import debounce from "lodash/debounce";
import { useCallback } from "react";

interface InputProps extends React.SelectHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: JSX.Element;
  hint?: string;
  errorMessage?: string;
  showErrorMessage?: boolean;
  getValues?: (name: string, value: string) => void;
}

export const Input = ({
  label,
  icon,
  hint,
  errorMessage,
  showErrorMessage,
  getValues,
  ...props
}: InputProps) => {
  const debouncedGetValues = useCallback(
    debounce((value: string) => {
      getValues && getValues("project", value);
    }, 500),
    [getValues],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedGetValues(e.target.value.toLowerCase());
  };

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
          type="search"
          onChange={handleChange}
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
