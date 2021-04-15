// import styles from "./IconContainer.module.css";
import { useContext } from "react";
import TrapeziusShape from "../components/SVGs/TrapeziusShape/TrapeziusShape";
import StylesContext from "../store/styles-context";

export default function IconContainer(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "IconContainer"
  ).styles;

  const { iconBgColor1, iconBgColor2, index } = props;

  return (
    <div className={styles.containerWrapper}>
      <TrapeziusShape
        iconBgColor1={iconBgColor1}
        iconBgColor2={iconBgColor2}
        index={index}
      />
      <div className={styles.container}>{props.children}</div>
    </div>
  );
}
