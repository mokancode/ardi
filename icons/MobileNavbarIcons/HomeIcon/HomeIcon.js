import classNames from "classnames";
import React from "react";
import styles from "./HomeIcon.module.css";

const HomeIcon = ({ active }) => {
  return (
    <div
      className={classNames(styles.homeIcon, {
        [styles.active]: active,
      })}
    ></div>
  );
};

export default HomeIcon;
