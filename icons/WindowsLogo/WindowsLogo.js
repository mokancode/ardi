import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import StylesContext from "../../store/styles-context";
// import styles from "./WindowsLogo.module.css";

export default function WindowsLogo() {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "WindowsLogo").styles;

  const [show, setShow] = useState(false);
  const [colorize, setColorize] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 300);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.wrapper, {
          [styles.show]: show,
          [styles.colorize]: colorize,
        })}
      >
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div
          className={styles.square}
          onTransitionEnd={() => {
            setColorize(true);
          }}
        ></div>
      </div>
    </div>
  );
}
