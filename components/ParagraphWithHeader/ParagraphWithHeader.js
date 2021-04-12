import IconContainer from "../../icons/IconContainer";
// import styles from "./ParagraphWithHeader.module.css";

import { useContext, useEffect, useState } from "react";
import StylesContext from "../../store/styles-context";

export default function ParagraphWithHeader(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "ParagraphWithHeader"
  ).styles;

  const [imgAlt, setImgAlt] = useState("");
  useEffect(() => {
    if (typeof props.icon === "string")
      setImgAlt(String(props.icon).match(/\/([^\/]+)\./)[1]);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={[
          props.centerHeader && styles.alignCenter,
          styles.headerWithIconWrapper,
        ].join(" ")}
      >
        {props.icon ? (
          typeof props.icon === "string" ? (
            <img src={props.icon} alt={imgAlt} />
          ) : (
            <IconContainer>{props.icon}</IconContainer>
          )
        ) : null}
        <h1
          className={[
            styles.header,
            props.centerHeader && styles.alignCenter,
            props.icon && styles.marginLeft,
          ].join(" ")}
        >
          {props.headerText}
        </h1>
      </div>
      <p className={styles.paragraph}>{props.paragraphText}</p>
    </div>
  );
}
