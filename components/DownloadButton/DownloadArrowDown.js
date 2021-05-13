import { useContext } from "react";
import StylesContext from "../../store/styles-context";

export function DownloadArrowDown(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "DownloadArrowDown")
    .styles;

  return (
    <div className={styles.outerWrapper}>
      <div
        className={[
          styles.wrapper,
          props.show && styles.show,
          props.smaller && styles.smaller,
        ].join(" ")}
      >
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
