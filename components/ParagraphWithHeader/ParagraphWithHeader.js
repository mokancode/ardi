import IconContainer from "../../icons/IconContainer";
// import styles from "./ParagraphWithHeader.module.css";

import { useContext, useEffect, useRef, useState } from "react";
import StylesContext from "../../store/styles-context";
import RefsContext from "../../store/refs-context";

import ReactVisibilitySensor from "react-visibility-sensor";
import calculateScrollProgression from "../../utils/CalculateScrollProgression";

import { v4 as uuidv4 } from "uuid";

export default function ParagraphWithHeader(props) {
  const paragraphWithHeaderRef = useRef();

  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "ParagraphWithHeader").styles;

  const [imgAlt, setImgAlt] = useState("");
  useEffect(() => {
    if (typeof props.icon === "string") setImgAlt(String(props.icon).match(/\/([^\/]+)\./)[1]);
  }, []);

  const { iconBgColor1, iconBgColor2, index } = props;

  const [showComponent, setShowComponent] = useState(false);

  // Calculate distance from top of document (not the viewport -- the entire document/window).
  const [offsetTopState, setOffsetTop] = useState(null);
  useEffect(() => {
    if (props.visibilitySensorReveal) return;

    // Set initial opacity
    let percentage = 1 - paragraphWithHeaderRef.current.getBoundingClientRect().y / window.innerHeight;
    if (percentage > 0.5) percentage *= 5;
    else if (percentage > 0.4) percentage *= 2;
    else if (percentage > 0.2) percentage *= 1.5;
    else if (percentage > 0.05) percentage *= 2;
    else if (percentage < 0.05) percentage = 0;
    if (percentage >= 1) percentage = 1;

    let opacityEquation = percentage;
    paragraphWithHeaderRef.current.style.opacity = `${opacityEquation}`;

    let translateYEquation = 1 - opacityEquation;
    paragraphWithHeaderRef.current.style.transform = `translateY(${50 * translateYEquation}px)`;
  }, []);

  // set scroll event listener on mainDiv
  const scrollEventListenerSetRef = useRef(false);

  useEffect(() => {
    if (!scrollEventListenerSetRef.current) {
      scrollEventListenerSetRef.current = true;

      if (!paragraphWithHeaderRef || !paragraphWithHeaderRef.current) {
        console.log("ref doesn't exist", scrollEventListenerSetRef.current, props.first);
        return;
      }

      function scrollFuncHandler() {
            // if (props.first)
            // //  console.log("scroll first");
            // console.log("visibility", props.visibilitySensorReveal, props.first);

        try {
          // console.log("scroll", document.querySelector("#mainDiv").scrollTop);
          if (
            !props.visibilitySensorReveal
            // && props.first
          ) {
            // This was the old function that was dependent on offset:
            // let opacityEquation = calculateScrollProgression(e.target.scrollTop, offsetTopState, offset);

            // New function:
            let percentage = 1 - paragraphWithHeaderRef.current.getBoundingClientRect().y / window.innerHeight;

            // console.log("percentage b4", percentage);
            if (percentage > 0.5) percentage *= 5;
            else if (percentage > 0.4) percentage *= 2;
            else if (percentage > 0.3) percentage *= 1.7;
            else if (percentage > 0.2) percentage *= 1.5;
            else if (percentage > 0.05) percentage *= 2;
            else if (percentage < 0.05) percentage = 0;
            if (percentage >= 1) percentage = 1;
            // console.log("percentage after", percentage);

            let opacityEquation = percentage;
            paragraphWithHeaderRef.current.style.opacity = `${opacityEquation}`;

            let translateYEquation = 1 - opacityEquation;
            paragraphWithHeaderRef.current.style.transform = `translateY(${50 * translateYEquation}px)`;
          }
        } catch (err) {
          console.log("scroll err", err);
        }
      }

      document.querySelector("#mainDiv").addEventListener("scroll", scrollFuncHandler);

      return function cleanupListener() {
        document.querySelector("#mainDiv").removeEventListener("scroll", scrollFuncHandler);
      };
    }
  }, [scrollEventListenerSetRef.current]);

  return (
    <ReactVisibilitySensor
      onChange={(isVisible) => {
        // console.log("isVisible", isVisible, props.headerText);
        if (isVisible && props.visibilitySensorReveal) {
          setShowComponent(true);
        }
        // else setShowComponent(false);
      }}
      partialVisibility={true}
      offset={{ bottom: 100 }}
    >
      <div className={[styles.outerWrapper, props.noPadding ? styles.noPadding : undefined].join(" ")}>
        <div
          ref={paragraphWithHeaderRef}
          className={[
            styles.wrapper,
            props.background && styles.background,
            showComponent && styles.show,
            props.forceNoBackground && styles.forceNoBackground,
          ].join(" ")}
        >
          {/* {offsetTopState && (
          <p
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              color: "black",
              zIndex: "99",
            }}
          >
            {offsetTopState}
          </p>
        )} */}
          <div
            className={[
              styles.headerWithIconWrapper,
              props.centerHeader && styles.alignCenter,
              props.noUnderline && styles.noUnderline,
              props.headerWithIconDirection && styles[props.headerWithIconDirection],
            ].join(" ")}
          >
            {props.icon ? (
              typeof props.icon === "string" ? (
                <img className={props.rotateIcon && styles.rotate} src={props.icon} alt={imgAlt} />
              ) : (
                <IconContainer
                  iconBgColor1={iconBgColor1}
                  iconBgColor2={iconBgColor2}
                  index={index}
                  showDelay={props.iconShowDelay}
                  // showComponent={showComponent}
                >
                  {props.icon}
                </IconContainer>
              )
            ) : null}
            <h1
              className={[
                styles.header,
                props.nonBreakingHeader && styles.nonBreakingHeader,
                props.color && styles[props.color],
                props.centerHeader && styles.alignCenter,
                props.icon && styles.marginLeft,
                props.extraLarge && styles.extraLarge,
              ].join(" ")}
            >
              {props.headerText}
            </h1>
          </div>

          {Array.isArray(props.paragraphText) ? (
            <ul>
              {props.paragraphText.map((changelogItem) => {
                return (
                  <li key={changelogItem.id}>
                    <p
                      className={[
                        styles.paragraph,
                        props.color && styles[props.color],
                        props.paragraphAlignLeft && styles.paragraphAlignLeft,
                      ].join(" ")}
                    >
                      {changelogItem.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p
              className={[
                styles.paragraph,
                props.color && styles[props.color],
                props.paragraphAlignLeft && styles.paragraphAlignLeft,
              ].join(" ")}
            >
              {props.paragraphText}
            </p>
          )}

          {props.button}
        </div>
      </div>
    </ReactVisibilitySensor>
  );
}
