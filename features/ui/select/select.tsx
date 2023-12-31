import classNames from "classnames";
import styles from "./select.module.scss";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
  icon?: JSX.Element;
  hint?: string;
  errorMessage?: string;
  placeholder?: string;
  getValues?: (name: string, value: string) => void;
}

export const Select = ({
  options,
  label,
  icon,
  hint,
  errorMessage,
  placeholder,
  getValues,
  ...props
}: SelectProps) => {
  const router = useRouter();
  const [status, setStatus] = useState<"default" | "filled">("default");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(placeholder);

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen((prev) => !prev);
    e.currentTarget.classList.toggle(styles.chevron);
  };

  const handleOption = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    setSelected(e.currentTarget.textContent!);
    console.log(e);
    getValues &&
      getValues(
        placeholder?.toLowerCase() as string,
        e.currentTarget.textContent!,
      );
    e.currentTarget.classList.toggle(styles.selected);
    setStatus("filled");
  };

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <button
        className={classNames(styles.selectMenu, styles[status])}
        onClick={handleButton}
        disabled={props.disabled}
      >
        <div
          className={
            errorMessage
              ? classNames(
                  styles.selectBtn,
                  styles.error,
                  styles.focus,
                  styles.disabled,
                )
              : styles.selectBtn
          }
        >
          <span className={styles.btnText}>
            {icon && icon}
            {selected}
          </span>
          <Image
            src="/icons/chevron-down.svg"
            alt="chevron-down"
            width={16}
            height={16}
          />
        </div>
        {errorMessage ? (
          <span className={styles.errorMessageText}>{errorMessage}</span>
        ) : (
          <span className={styles.hint}>{hint}</span>
        )}
        {open && (
          <>
            <ul className={styles.options}>
              {options.map((option, idx) => (
                <li key={idx} className={styles.option} onClick={handleOption}>
                  {icon && <span className={styles.icon}>{icon}</span>}
                  <label htmlFor={`option-${idx}`} className={styles.label}>
                    <span className={styles.optionText}>{option}</span>
                    {option === selected && (
                      <Image
                        src="/icons/check.svg"
                        alt="check"
                        width={20}
                        height={20}
                        className={styles.check}
                      />
                    )}
                  </label>
                </li>
              ))}
              <button
                className={styles.clearBtn}
                onClick={() => {
                  setStatus("default");
                  setSelected(placeholder);
                  delete router.query[placeholder?.toLowerCase() as string];
                  router.push(
                    {
                      pathname: router.pathname,
                      query: router.query,
                    },
                    undefined,
                    { shallow: true },
                  );
                }}
              >
                Clear
              </button>
            </ul>
          </>
        )}
      </button>
    </div>
    // <select
    //   name="names"
    //   id="names-select"
    //   aria-label={label}
    //   className={classNames(
    //     styles.select,
    //     styles.focused,
    //     styles[status],
    //     styles.hovered,
    //     styles.active,
    //   )}
    //   onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
    //     const filtered = options.filter((option) => option === e.target.value);
    //     setStatus("filled");
    //   }}
    //   disabled={props.disabled}
    // >
    //   <option className={styles.firstOption} value="">
    //     Select team member
    //   </option>
    //   {icon && (
    //     <span className={styles.icon}>
    //       <RiUser3Line />
    //     </span>
    //   )}
    //   {options.map((option, idx) => (
    //     <option value={option} key={idx}>
    //       <span className={styles.option}>{option}</span>
    //     </option>
    //   ))}
    // </select>
  );
};
