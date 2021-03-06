import { useContext, useEffect, useRef, useState } from "react";
import StylesContext from "../../store/styles-context";
import { DownloadArrowDown } from "./DownloadArrowDown";

export function DownloadButtonStrip(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "DownloadButtonStrip")
    .styles;
  
  const stripRef = useRef();
  const [showChildComponents, setShowChildComponents] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 10);
  }, []);

  return (
    <div
      ref={stripRef}
      className={[
        styles.outerWrapper,
        show && styles.show,
        props.color && styles[props.color],
      ].join(" ")}
      onTransitionEnd={(e) => {
        if (stripRef.current === e.target && !showChildComponents) {
          setShowChildComponents(true);
        }
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.arrowsDownWrapper}>
            <DownloadArrowDown show={showChildComponents} smaller={true} />
            <DownloadArrowDown show={showChildComponents} />
          </div>
        </div>

        <div className={styles.trapeziusWrapper}>
          <div className={styles.trapezius}></div>
          <div className={styles.trapezius}></div>
        </div>
      </div>
    </div>
  );
}
