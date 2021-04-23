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
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "ParagraphWithHeader"
  ).styles;

  const [imgAlt, setImgAlt] = useState("");
  useEffect(() => {
    if (typeof props.icon === "string")
      setImgAlt(String(props.icon).match(/\/([^\/]+)\./)[1]);
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
      if (parent.offsetTop !== totalOffsetTop)
        totalOffsetTop += parent.offsetTop;
      parent = parent.parentNode;
    }
    setOffsetTop(totalOffsetTop);
  }, []);

  // Retrieve the ref of mainDiv from layout.js
  const refsContext = useContext(RefsContext);
  useEffect(() => {
    if (!mainDivRefState && refsContext.refs.length > 0) {
      const mainDivRef = refsContext.refs.find(
        (ref) => ref.name === "mainDivRef"
      );
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

        const offset = 550;

        if (
          // props.first &&
          // (e.target.scrollTop <=
          //   (offsetTopState - offset < 0 ? 0 : offsetTopState - offset) ||
          //   e.target.scrollTop >= offsetTopState - offset) &&

          // (e.target.scrollTop <= offsetTopState - offset < 0
          //   ? 0
          //   : offsetTopState - offset) &&
          e.target.scrollTop <= offsetTopState + offset &&
          // paragraphWithHeaderRef.current.offsetHeight +

          !props.visibilitySensorReveal
        ) {
          let opacityEquation = calculateScrollProgression(
            e.target.scrollTop,
            offsetTopState,
            offset
          );

          paragraphWithHeaderRef.current.style.opacity = `${opacityEquation}`;
          
          let translateYEquation = 1 - opacityEquation;
          paragraphWithHeaderRef.current.style.transform = `translateY(${
            50 * translateYEquation
          }px)`;
        }
      });
    }
  }, [eventListenerSet, mainDivRefState]);

  return (
    <ReactVisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && props.visibilitySensorReveal){
           setShowComponent(true);}
        // else setShowComponent(false);
      }}
      partialVisibility={true}
      offset={{ top: 10 }}
    >
      <div
        ref={paragraphWithHeaderRef}
        className={[
          styles.wrapper,
          props.background && styles.background,
          showComponent && styles.show,
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
            props.headerWithIconDirection && styles[props.headerWithIconDirection]
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
    </ReactVisibilitySensor>
  );
}
