import classNames from "classnames";
import isEmpty from "../../../utils/validation/is-empty";
import React, { Fragment, useContext, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import StylesContext from "../../../store/styles-context";

export default function NavbarMenuButton({ index, menuItem, open, setOpen, link }) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "NavbarMenuButton")
    .styles;

  const [hovering, setHovering] = useState(false);
  const router = useRouter();

  return (
    <li
      onClick={() => {
        setOpen(false);
      }}
      className={classNames(styles.menuListItem, {
        [styles.active]: hovering || router.pathname === link,
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
      <Link href={link}>
        <a className={styles.link}>
          <Fragment>
            <p style={{ transitionDelay: `${index * 100 + 300}ms` }}>{menuItem.name}</p>

            {!isEmpty(menuItem.icon) && (
              <div className={styles.iconWrapper} style={{ transitionDelay: `${index * 100 + 400}ms` }}>
                <div className={styles.iconInnerWrapper}>
                  {React.cloneElement(menuItem.icon, { active: hovering || router.pathname === link })}
                </div>
              </div>
            )}
          </Fragment>
        </a>
      </Link>
    </li>
  );
}
