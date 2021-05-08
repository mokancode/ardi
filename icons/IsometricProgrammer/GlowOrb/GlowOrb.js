import { useContext } from "react";
import StylesContext from "../../../store/styles-context";

export default function GlowOrb() {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "GlowOrb").styles;

  return (
    <div className={styles.glowOrb}>
      <div className={styles.transformWrapper}>
        <div className={styles.orb}></div>
      </div>
    </div>
  );
}
