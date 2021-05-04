import { useEffect, useRef, useState } from "react";
import isEmpty from "../../../../utils/validation/is-empty";
import styles from "./TutorialPointerInstruction.module.css";

export default function TutorialPointerInstruction({
  currentTutorial,
  currentImgIndex,
  pointerInPosition,
  pointerCoordinates,
  setPointerInPosition,
}) {
  const wrapperRef = useRef();
  const [instruction, setInstruction] = useState("");
  const [animateOut, setAnimateOut] = useState(false);
  const [animFinished, setAnimFinished] = useState(false);
  const [rightSide, setRightSide] = useState(null);
  // const [pointerCoordinatesLocal, setPointerCoordinates] = useState({ x: null, y: null });
  // const pointerCoordinatesRef = useRef({ x: null, y: null });

  // useEffect(() => {
  //   if (isEmpty(pointerCoordinates.current.x)) return;

  //   if (
  //     pointerCoordinates &&
  //     pointerCoordinates.current &&
  //     pointerCoordinates.current.x &&
  //     pointerCoordinates.current.y &&
  //     pointerCoordinates.current.x === pointerCoordinatesRef.current.x &&
  //     pointerCoordinates.current.y === pointerCoordinatesRef.current.y
  //   ) {
  //     // console.log("same");
  //     setAnimateOut(false);
  //     setAnimFinished(true);
  //     // setPointerInPosition(true);
  //     // setTimeout(() => {
  //     //   console.log("anim", animateOut);
  //     // }, 1000);
  //     // setPointerInPosition(true);
  //     setInstruction(currentTutorial.images[currentImgIndex].instruction);
  //   }

  //   // setPointerCoordinates(pointerCoordinates.current);
  //   pointerCoordinatesRef.current = pointerCoordinates.current;
  // }, [pointerCoordinates.current.x, pointerCoordinates.current.y, currentImgIndex]);

  useEffect(() => {
    if (isEmpty(instruction)) setInstruction(currentTutorial.images[currentImgIndex].instruction);
    else if (!animateOut && !animFinished) setAnimateOut(true);
  }, [pointerInPosition, currentImgIndex]);

  useEffect(() => {
    if (animateOut && animFinished) {
      setAnimateOut(false);
      setAnimFinished(false);
    }
  }, [animFinished]);

  useEffect(() => {
    if (isEmpty(currentImgIndex) || isEmpty(currentTutorial) || isEmpty(currentTutorial.images)) return;

    if (currentTutorial.images[currentImgIndex].instructionSide && pointerInPosition === false && animFinished) {
      setRightSide(true);
    } else {
      if (isEmpty(currentTutorial.images[currentImgIndex].instructionSide) && rightSide && animFinished) setRightSide(false);
    }
  }, [animFinished]);

  const [windowTooNarrow, setWindowTooNarrow] = useState(false);
  const windowTooNarowRef = useRef(windowTooNarrow);

  function updateWindowTooNarrowHandler(status) {
    setWindowTooNarrow(status);
    windowTooNarowRef.current = status;
  }

  useEffect(() => {
    if (window.innerWidth <= 1325 && !windowTooNarowRef.current) updateWindowTooNarrowHandler(true);
    else if (window.innerWidth > 1325 && windowTooNarowRef.current) updateWindowTooNarrowHandler(false);

    function resizeFuncHandler() {
      // console.log("resize");
      if (window.innerWidth <= 1325 && !windowTooNarowRef.current) {
        console.log("resize true");
        updateWindowTooNarrowHandler(true);
      } else if (window.innerWidth > 1325 && windowTooNarowRef.current) {
        console.log("resize false");
        updateWindowTooNarrowHandler(false);
      }
    }

    window.addEventListener("resize", resizeFuncHandler);

    return function cleanupListener() {
      window.removeEventListener("resize", resizeFuncHandler);
    };
  }, []);

  return (
    <div
      className={[
        styles.pointerInstructionWrapper,
        pointerInPosition == false && styles.animateOut,
        currentTutorial.images[currentImgIndex].coordinates.y &&
          currentTutorial.images[currentImgIndex].coordinates.y < 0.05 &&
          styles.marginTop,
        ((rightSide && currentTutorial.images[currentImgIndex].coordinates.x < 0.55 && !windowTooNarrow) ||
          (windowTooNarrow && currentTutorial.images[currentImgIndex].coordinates.x < 0.45)) &&
          styles.rightSide,
        currentTutorial.images[currentImgIndex].pointerSize && styles[currentTutorial.images[currentImgIndex].pointerSize],
      ].join(" ")}
      onTransitionEnd={(e) => {
        if (e.target === wrapperRef.current) {
          if (animateOut) {
            setInstruction(currentTutorial.images[currentImgIndex].instruction);
            setAnimFinished(true);
          }
        }
      }}
      ref={wrapperRef}
    >
      <p
        className={styles.pointerInstruction}
        //   ref={pointerInstructionRef}
      >
        {instruction}
        {/* {currentTutorial.images[currentImgIndex].instruction} */}
      </p>
    </div>
  );
}
