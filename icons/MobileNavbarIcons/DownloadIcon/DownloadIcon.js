import classNames from "classnames";
import React from "react";
import styles from "./DownloadIcon.module.css";

export default function DownloadIcon({ active }) {
  return (
    <div
      className={classNames(styles.downloadIcon, {
        [styles.active]: active,
      })}
    >
      <div className={styles.line}></div>
    </div>
  );
}
