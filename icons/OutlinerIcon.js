// import styles from "./OutlinerIcon.module.css";
import { useContext } from "react";
import StylesContext from "../store/styles-context";

export default function OutlinerIcon() {
  const stylesContext = useContext(StylesContext);
    const styles = stylesContext.styles.find(
      (styleSheet) => styleSheet.name === "OutlinerIcon"
    ).styles;

  return (
    <div className={styles.wrapper}>
      <div className={[styles.topic, styles.mainTopic].join(" ")}></div>
      <div className={styles.branches}>
        <div className={styles.branch}></div>
        <div className={styles.branch}></div>
        <div className={styles.branch}></div>
      </div>
      <div className={[styles.topic, styles.subTopic].join(" ")}></div>
      <div className={[styles.topic, styles.subTopic].join(" ")}></div>
      <div className={[styles.topic, styles.subTopic].join(" ")}></div>
    </div>
  );
}
