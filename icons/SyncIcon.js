// import styles from "./SyncIcon.module.css";
import { useContext } from "react";
import StylesContext from "../store/styles-context";

export default function SyncIcon() {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "SyncIcon"
  ).styles;

  return (
    <svg
      className={styles.syncIconSVG}
      x="0px"
      y="0px"
      viewBox="0 0 373 502"
      style={{ enableBackground: "new 0 0 373 502" }}
    >
      <path
        className={styles.syncIconPath0}
        d="M148,421.35c-77.32,0-140-74.86-140-167.2s62.68-167.2,140-167.2h24"
      />
      <polyline
        className={styles.syncIconPath0}
        points="90.33,6.45 180.26,85.06 118.67,187.4 "
      />
      <path
        className={styles.syncIconPath0}
        d="M224.6,85c77.32,0,140,74.86,140,167.2s-62.68,167.2-140,167.2H203"
      />
      <polyline
        className={styles.syncIconPath0}
        points="291.05,494.73 199.37,418.17 258.63,314.46 "
      />
    </svg>
  );
}
