import { useRef, useState } from "react";
import { DownloadArrowDown } from "./DownloadArrowDown";
import styles from "./DownloadButtonStrip.module.css";
export function DownloadButtonStrip(props) {
  const stripRef = useRef();
  const [showChildComponents, setShowChildComponents] = useState(false);

  return (
    <div
      ref={stripRef}
      className={[
        styles.outerWrapper,
        props.show && styles.show,
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
