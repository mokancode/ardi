// import styles from "./NotesIcon.module.css";
import { useContext, useState } from "react";
import StylesContext from "../store/styles-context";

import { v4 as uuidv4 } from "uuid";

export default function NotesIcon() {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "NotesIcon").styles;

  const [uniqueIDs, setUniqueIDs] = useState([uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.square}></div>
      <div className={styles.lines}>
        {new Array(5).fill(undefined).map((item, index) => (
          <div key={uniqueIDs[index]} className={styles.line} />
        ))}
      </div>
    </div>
  );
}
