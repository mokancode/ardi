import React, { Component } from "react";
import classNames from "classnames";
import styles from "./NavbarMenuButton.module.css";
import isEmpty from "../../../utils/validation/is-empty";
import { useState } from "react/cjs/react.development";

export default function NavbarMenuButton({ index, menuItem, open, setOpen }) {
  const [hovering, setHovering] = useState(false);

  return (
    <li
      onClick={() => {
        setOpen(false);
      }}
      className={classNames(styles.menuListItem, {
        [styles.active]: hovering,
        [styles.open]: open,
      })}
      style={{
        transform: `translateY(${open ? 0 : -index * 60 - 20}px)`,
        transitionDelay: `${index * 50}ms`,
      }}
      onTouchStart={() => {
        setHovering(true);
      }}
      onTouchEnd={() => {
        setHovering(false);
      }}
      onTouchCancel={() => {
        setHovering(false);
      }}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
    >
      <p style={{ transitionDelay: `${index * 100 + 300}ms` }}>{menuItem.name}</p>

      {!isEmpty(menuItem.icon) && (
        <div className={styles.iconWrapper} style={{ transitionDelay: `${index * 100 + 400}ms` }}>
          <div className={styles.iconInnerWrapper}>{React.cloneElement(menuItem.icon, { active: hovering })}</div>
        </div>
      )}
    </li>
  );
}
