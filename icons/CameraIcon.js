// import styles from "./CameraIcon.module.css";
import { useContext } from "react";
import StylesContext from "../store/styles-context";

export default function CameraIcon() {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "CameraIcon"
  ).styles;

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.circle}></div>
    </div>
  );
}
