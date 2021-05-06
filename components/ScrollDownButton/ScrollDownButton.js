import { useContext, useState } from "react";
import { Element, animateScroll as scroll, scroller, Events } from "react-scroll";
import ReactVisibilitySensor from "react-visibility-sensor";
import StylesContext from "../../store/styles-context";

export default function ScrollDownButton({ func }) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "ScrollDownButton").styles;

  const [hideComponent, setHideComponent] = useState(false);

  return (
    <ReactVisibilitySensor
      onChange={(isVisible) => {
        // console.log("isVisible", isVisible);
        if (isVisible && !hideComponent) {
          setHideComponent(true);
        } else setHideComponent(false);
      }}
      partialVisibility={true}
      offset={{ bottom: 200 }}
    >
      <div className={[styles.container, hideComponent && styles.hide].join(" ")} onClick={func}>
        <div className={styles.arrows}></div>
        <p>
          Video
          <br />
          Tutorials
        </p>
      </div>
    </ReactVisibilitySensor>
  );
}
