// import styles from "./ToDoManagerIcon.module.css";
import { useContext, useState } from "react";
import StylesContext from "../store/styles-context";

import { v4 as uuidv4 } from "uuid";

export default function ToDoManagerIcon() {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "ToDoManagerIcon"
  ).styles;

  const [uniqueIDs, setUniqueIDs] = useState([uuidv4(), uuidv4(), uuidv4()]);

  return (
    <div className={styles.wrapper}>
      {new Array(3).fill(undefined).map((item, index) => (
        <div className={styles.todoItem} key={uniqueIDs[index]}>
          <div className={styles.check}></div>
          <div className={styles.line}></div>
        </div>
      ))}
    </div>
  );
}
