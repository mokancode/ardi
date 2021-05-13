import { useContext, useEffect } from "react";
import TickIcon from "../../../../icons/TickIcon/TickIcon";
import StylesContext from "../../../../store/styles-context";

export default function TutorialController({
  currentImgIndex,
  updateCurrentImgIndex,
  total,
  showCoordinates,
  setShowCoordinates,
}) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "TutorialController")
    .styles;
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.navButtons}>
        {total && (
          <p className={styles.currentPage}>
            {currentImgIndex + 1} of {total}
          </p>
        )}
        <button onClick={() => updateCurrentImgIndex("prev")}>Prev</button>
        {/* <button>Play</button> */}
        <button onClick={() => updateCurrentImgIndex("next")}>Next</button>
      </div>

      <button
        className={[styles.showCoordinatesBtnContainer, showCoordinates && styles.show, showCoordinates && styles.active].join(
          " "
        )}
        onClick={() => {
          setShowCoordinates((prevState) => !prevState);
        }}
      >
        <p>Off</p>
        <p>On</p>
        <div className={[styles.showCoordinatesBtn].join(" ")}>XY</div>
      </button>

      <div className={styles.tickIconsWrapper}>
        <TickIcon show={currentImgIndex === total - 1} />
        <TickIcon show={currentImgIndex === total - 1} />
      </div>
    </div>
  );
}
