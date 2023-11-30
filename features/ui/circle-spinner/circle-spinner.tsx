import styles from "./circle-spinner.module.scss";
import { motion } from "framer-motion";

export const CircleSpinner = () => {
  return (
    <div className={styles.containerStyle}>
      <motion.span
        className={styles.circleStyle}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};
