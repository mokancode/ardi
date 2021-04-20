import styles from "./ParallaxTrapezius.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import RefsContext from "../../store/refs-context";
import calculateScrollProgression from "../../utils/CalculateScrollProgression";
import { v4 as uuidv4 } from "uuid";

export default function ParallaxTrapezius(props) {
  const [mainDivRefState, setMainDivRef] = useState(null);
  const [id, setId] = useState(null);
  const parallaxRef = useRef();

  // Calculate distance from top of document (not the viewport -- the entire document/window).
  const [offsetTopState, setOffsetTop] = useState(null);
  useEffect(() => {
    var parent = parallaxRef.current.parentNode;
    var totalOffsetTop = parallaxRef.current.offsetTop;
    while (parent.parentNode) {
      if (parent.offsetTop !== totalOffsetTop)
        totalOffsetTop += parent.offsetTop;
      parent = parent.parentNode;
    }
    setOffsetTop(totalOffsetTop);
    // console.log("total offset set", totalOffsetTop);

    setId(uuidv4());
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
      mainDivRefState.current.addEventListener("scroll", (e) => {
        const offset = 550;
        if (
          e.target.scrollTop <= offsetTopState + offset &&
          !props.visibilitySensorReveal
        ) {
          let opacityEquation = calculateScrollProgression(
            e.target.scrollTop,
            offsetTopState,
            offset
          );

          parallaxRef.current.style.opacity = `${opacityEquation}`;

          let transformEquation = 1 - opacityEquation;
          parallaxRef.current.style.transform = `rotate(${
            100 * transformEquation + 20
          }deg)`;
          // console.log("translate", 50 * transformEquation);
        }
      });
    }
  }, [eventListenerSet, mainDivRefState]);

  const { gradientColor1, gradientColor2, bgFill } = props;

  return (
    <div
      className={[
        styles.wrapper,
        props.bgFill && styles.lowerOpacity,
        props.gradientColor1 && props.gradientColor1 && styles.gradient,
      ].join(" ")}
    >
      <div ref={parallaxRef} className={styles.parallaxTrapezius}>
        <svg
          // className="trapeziusSVG"
          x="0px"
          y="0px"
          viewBox="0 0 552 619"
          style={{ enableBackground: "new 0 0 552 619" }}
        >
          <linearGradient
            id={`trapeziusShapeLinearGradient_${id}`}
            gradientTransform="rotate(20)"
          >
            <stop offset="10%" stopColor={gradientColor1} />
            <stop offset="90%" stopColor={gradientColor2} />
          </linearGradient>

          <g>
            <path
              fill={
                gradientColor1 && gradientColor2
                  ? `url(#trapeziusShapeLinearGradient_${id})`
                  : null
              }
              className="trapPath"
              d="M276,608.3c-18.71,0-37.15-4.94-53.35-14.3l-166.79-96.3C22.94,478.71,2.5,443.3,2.5,405.3V212.7
  c0-38,20.44-73.41,53.35-92.41l166.79-96.3c16.2-9.35,34.65-14.3,53.35-14.3s37.15,4.94,53.35,14.3l166.79,96.3
  c32.91,19,53.35,54.41,53.35,92.41v192.6c0,38-20.44,73.41-53.35,92.41l-166.79,96.3C313.15,603.36,294.71,608.3,276,608.3z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
