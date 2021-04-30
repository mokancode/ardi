import classNames from "classnames";
import styles from "./HomeIcon.module.css";

export default function HomeIcon({ active }) {
  return (
    <div
      className={classNames(styles.homeIcon, {
        [styles.active]: active,
      })}
    ></div>
  );
}
