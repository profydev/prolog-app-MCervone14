import { version as app_version } from "../../../package.json";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";

const links = [
  { label: "Docs", href: "#" },
  { label: "API", href: "#" },
  { label: "Help", href: "#" },
  { label: "Community", href: "#" },
];

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.version}>Version: {app_version} </div>
        <nav className={styles.navContainer}>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.label}>
                <Link className={styles.link} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.logo}>
          <Image
            src="/icons/logo-small.svg"
            alt="ProLog Logo"
            width={23}
            height={33}
          />
        </div>
      </div>
    </footer>
  );
};
