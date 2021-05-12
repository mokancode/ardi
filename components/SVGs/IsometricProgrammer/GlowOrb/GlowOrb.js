import { useContext } from "react";
import StylesContext from "../../../../store/styles-context";

export default function GlowOrb({ animate }) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "GlowOrb"
  ).styles;

  return (
    <div
      className={[
        styles.glowOrb,
        animate ? styles.animate : undefined,
      ].join(" ")}
    >
      <div className={styles.transformWrapper}>
        <div className={styles.orb}></div>
      </div>
    </div>
  );
}
