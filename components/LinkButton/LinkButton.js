import React, { useContext, useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import Link from "next/link";
import StylesContext from "../../store/styles-context";

export default function LinkButton({ url, text, icon }) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "LinkButton")
    .styles;

  const [showComponent, setShowComponent] = useState(false);
  const [showChildComponents, setShowChildComponents] = useState(false);

  return (
    <ReactVisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !showComponent) {
          setShowComponent(true);
        } else if (!isVisible && showComponent) {
          setShowComponent(false);
          setShowChildComponents(false);
        }
      }}
      partialVisibility={true}
      offset={{ top: 10 }}
    >
      <Link href={url}>
        <a
          className={[styles.wrapper, showComponent && styles.show].join(" ")}
          onTransitionEnd={() => {
            if (showComponent && !showChildComponents) {
              setTimeout(() => {
                setShowChildComponents(true);
              }, 200);
            }
          }}
        >
          <p>{text}</p>
          <div className={styles.iconContainer}>
            <div className={styles.whiteSpaceWrapper}></div>
            {/* <div className={styles.iconWrapper}>{icon}</div> */}
            <div className={styles.iconWrapper}>
              {React.cloneElement(icon, { show: showChildComponents })}
            </div>
          </div>
        </a>
      </Link>
    </ReactVisibilitySensor>
  );
}
