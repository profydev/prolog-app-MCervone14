import { Button } from "../button";
import Image from "next/image";
import styles from "./error-message.module.scss";

type ErrorMessageProps = {
  refetch: () => void;
  error: Error;
};

export const ErrorMessage = ({ refetch, error }: ErrorMessageProps) => {
  const handleRefetch = () => {
    console.log(error);
    refetch();
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <p className={styles.errorMessage}>
          <Image
            src="/icons/alert-circle.svg"
            alt="Error Icon"
            width={20}
            height={20}
          />
          There was a problem while loading the project data
        </p>
        <Button className={styles.tryAgainButton} onClick={handleRefetch}>
          Try again
          <Image
            src="/icons/arrow-right.svg"
            alt="Right Arrow Icon"
            width={20}
            height={20}
            aria-hidden
          />
        </Button>
      </div>
    </div>
  );
};
