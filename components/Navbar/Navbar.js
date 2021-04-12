// import styles from "./Navbar.module.css";
import Link from "next/link";
import classnames from "classnames";
import { useRouter } from "next/router";

import { useContext, useState } from "react";
import StylesContext from "../../store/styles-context";

import { v4 as uuidv4 } from "uuid";

export default function Navbar() {
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

  // useEffect(()=>{
  // },[])

  return (
    <div className={[styles.navbar, "centerDiv"].join(" ")}>
      <ul className={styles.routesList}>
        {routes.map((route, index) => (
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
    </div>
  );
}
