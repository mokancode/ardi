// import styles from "./DiagramIcon.module.css";
import { useContext } from "react";
import StylesContext from "../store/styles-context";

export default function DiagramIcon() {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "DiagramIcon"
  ).styles;

  return (
    <div className={styles.wrapper}>
      <div className={[styles.item, styles.circle].join(" ")}></div>
      <div className={[styles.item, styles.circle].join(" ")}></div>
      <div className={[styles.item]}></div>
    </div>
  );
}
