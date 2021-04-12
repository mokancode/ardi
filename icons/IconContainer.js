// import styles from "./IconContainer.module.css";
import { useContext } from "react";
import StylesContext from "../store/styles-context";

export default function IconContainer(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "IconContainer"
  ).styles;

  return <div className={styles.container}>{props.children}</div>;
}
