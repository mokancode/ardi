// import styles from "./Navbar.module.css";
import Link from "next/link";
import classnames from "classnames";
import { useRouter } from "next/router";

import { useContext, useEffect, useState } from "react";
import StylesContext from "../../store/styles-context";

import { v4 as uuidv4 } from "uuid";

export default function Navbar(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "Navbar"
  ).styles;

  const router = useRouter();

  const [routes, setRoutes] = useState([
    { name: "Home", link: "/", key: uuidv4() },
    { name: "Download", link: "/download", key: uuidv4() },
    { name: "Support", link: "/support", key: uuidv4() },
    { name: "Demo", link: "/demo", key: uuidv4() },
  ]);

  return (
    <div className={[styles.navbar, props.detach && styles.detach].join(" ")}>
      <h1 style={{ margin: 0, position: "relative" }}>Ardi</h1>

      <ul className={styles.routesList}>
        {routes.slice(0, routes.length - 1).map((route, index) => (
          <li
            key={route.key}
            className={classnames(styles.link, {
              [styles.selected]: router.pathname === route.link,
            })}
          >
            <Link href={route.link}>{route.name}</Link>
          </li>
        ))}
      </ul>

      <div
        key={routes[routes.length - 1].key}
        className={classnames(styles.link, {
          [styles.selected]: router.pathname === routes[routes.length - 1].link,
        })}
      >
        <Link href={routes[routes.length - 1].link}>
          {routes[routes.length - 1].name}
        </Link>
      </div>
    </div>
  );
}
