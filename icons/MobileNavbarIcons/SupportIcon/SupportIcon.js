import classNames from "classnames";
import React from "react";
import styles from "./SupportIcon.module.css";

export default function SupportIcon({ active }) {
  return (
    <svg
      className={classNames(styles.supportIconSVG, {
        [styles.active]: active,
      })}
      x="0px"
      y="0px"
      viewBox="0 0 261 242"
      style={{ enableBackground: "new 0 0 261 242" }}
    >
      <path className={styles.st0} d="M46.52,89c0-54.12,37.74-84,84.28-84s84.28,29.88,84.28,84" />
      <path className={styles.st1} d="M46.52,89C8,89,8,106.46,8,128s0,39,38.52,39V89z" />
      <path className={styles.st1} d="M215.09,167C251,167,251,149.19,251,127.22s0-39.78-35.91-39.78V167z" />
      <path className={styles.st2} d="M213.88,164.93c0,39.35-37.74,61.07-84.28,61.07" />
      <ellipse className={styles.st3} cx="130" cy="225.5" rx="15" ry="11.5" />
      <path className={styles.st2} d="M157,173.5c-6.87,6.87-13.21,7.88-29.5,7.88s-22.19-0.56-29.5-7.88" />
    </svg>
  );
}
