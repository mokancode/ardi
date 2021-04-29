import IconContainer from "../../icons/IconContainer";
// import styles from "./ParagraphWithHeader.module.css";

import { useContext, useEffect, useRef, useState } from "react";
import StylesContext from "../../store/styles-context";
import RefsContext from "../../store/refs-context";

import ReactVisibilitySensor from "react-visibility-sensor";
import calculateScrollProgression from "../../utils/CalculateScrollProgression";

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
  const [mainDivRefState, setMainDivRef] = useState(null);

  // Calculate distance from top of document (not the viewport -- the entire document/window).
  const [offsetTopState, setOffsetTop] = useState(null);
  useEffect(() => {
    var parent = paragraphWithHeaderRef.current.parentNode;
    var totalOffsetTop = paragraphWithHeaderRef.current.offsetTop;
    while (parent.parentNode) {
      if (parent.offsetTop !== totalOffsetTop) totalOffsetTop += parent.offsetTop;
      parent = parent.parentNode;
    }
    setOffsetTop(totalOffsetTop);

    // Set initial opacity
    let percentage = 1 - paragraphWithHeaderRef.current.getBoundingClientRect().y / window.innerHeight;
    // console.log("percentage b4", percentage);
    if (percentage > 0.5) percentage *= 5;
    else if (percentage > 0.4) percentage *= 2;
    else if (percentage > 0.2) percentage *= 1.5;
    else if (percentage > 0.05) percentage *= 2;
    else if (percentage < 0.05) percentage = 0;
    if (percentage >= 1) percentage = 1;
    // console.log("percentage after", percentage);

    let opacityEquation = percentage;
    paragraphWithHeaderRef.current.style.opacity = `${opacityEquation}`;

    let translateYEquation = 1 - opacityEquation;
    paragraphWithHeaderRef.current.style.transform = `translateY(${50 * translateYEquation}px)`;
  }, []);

  // Retrieve the ref of mainDiv from layout.js
  const refsContext = useContext(RefsContext);
  useEffect(() => {
    if (!mainDivRefState && refsContext.refs.length > 0) {
      const mainDivRef = refsContext.refs.find((ref) => ref.name === "mainDivRef");
      setMainDivRef(mainDivRef.ref);
    }
  }, [refsContext.refs.length]);

  // set scroll event listener on mainDiv
  const [eventListenerSet, setEventListenerSet] = useState(false);
  useEffect(() => {
    if (!eventListenerSet && mainDivRefState) {
      setEventListenerSet(true);
      if (props.first) {
        // console.log(window.innerHeight, window.innerWidth);
      }
      mainDivRefState.current.addEventListener("scroll", (e) => {
        // console.log("scroll", mainDivRefState.current.scrollTop);

        if (!paragraphWithHeaderRef || !paragraphWithHeaderRef.current) {
          console.log("ref doesn't exist");
          return;
        }
        const offset = 550;

        if (
          true
          // props.first
          // e.target.scrollTop <= offsetTopState + offset &&
          // !props.visibilitySensorReveal
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
      });
    }
  }, [eventListenerSet, mainDivRefState]);

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
      <div className={styles.outerWrapper}>
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
                <img src={props.icon} alt={imgAlt} />
              ) : (
                <IconContainer
                  iconBgColor1={iconBgColor1}
                  iconBgColor2={iconBgColor2}
                  index={index}
                  // showComponent={showComponent}
                >
                  {props.icon}
                </IconContainer>
              )
            ) : null}
            <h1
              className={[
                styles.header,
                props.color && styles[props.color],
                props.centerHeader && styles.alignCenter,
                props.icon && styles.marginLeft,
                props.extraLarge && styles.extraLarge,
              ].join(" ")}
            >
              {props.headerText}
            </h1>
          </div>
          <p
            className={[
              styles.paragraph,
              props.color && styles[props.color],
              props.paragraphAlignLeft && styles.paragraphAlignLeft,
            ].join(" ")}
          >
            {props.paragraphText}
          </p>
        </div>
      </div>
    </ReactVisibilitySensor>
  );
}
