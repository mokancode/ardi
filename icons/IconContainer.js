// import styles from "./IconContainer.module.css";
import { useContext, useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import TrapeziusShape from "../components/SVGs/TrapeziusShape/TrapeziusShape";
import StylesContext from "../store/styles-context";

export default function IconContainer(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "IconContainer"
  ).styles;

  const [showComponent, setShowComponent] = useState(false);

  const { iconBgColor1, iconBgColor2, index } = props;

  return (
    <ReactVisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !showComponent) setShowComponent(true);
      }}
      partialVisibility={false}
      offset={{ top: 200, bottom: 200 }}
    >
      <div
        className={[styles.containerWrapper, showComponent && styles.show].join(
          " "
        )}
      >
        <TrapeziusShape
          showComponent={showComponent}
          iconBgColor1={iconBgColor1}
          iconBgColor2={iconBgColor2}
          index={index}
          isIconContainer={true}
        />
        <div className={styles.container}>{props.children}</div>
      </div>
    </ReactVisibilitySensor>
  );
}
