import { useEffect, useRef, useState } from "react";
import isEmpty from "../../../../utils/validation/is-empty";
import styles from "./TutorialPointerInstruction.module.css";

export default function TutorialPointerInstruction({
  currentTutorial,
  currentTutorialRef,
  currentImgIndex,
  currentImgIndexRef,
  pointerInPosition,
  pointerCoordinates,
  setPointerInPosition,
}) {
  const wrapperRef = useRef();
  const [instruction, setInstruction] = useState("");
  const [animateOut, setAnimateOut] = useState(false);
  const [animOutFinished, setAnimOutFinished] = useState(false);
  const [rightSide, setRightSide] = useState(null);
  const rightSideRef = useRef(rightSide);
  const [windowTooNarrow, setWindowTooNarrow] = useState(false);
  const windowTooNarowRef = useRef(windowTooNarrow);

  function updateRightSide(state) {
    setRightSide(state);
    rightSideRef.current = state;
  }

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
  //     setAnimOutFinished(true);
  //     // setPointerInPosition(true);
  //     // setTimeout(() => {
  //     //   console.log("anim", animateOut);
  //     // }, 1000);
  //     // setPointerInPosition(true);
  //     setInstruction(currentTutorialRef.current.images[currentImgIndexRef.current].instruction);
  //   }

  //   // setPointerCoordinates(pointerCoordinates.current);
  //   pointerCoordinatesRef.current = pointerCoordinates.current;
  // }, [pointerCoordinates.current.x, pointerCoordinates.current.y, currentImgIndexRef.current]);

  useEffect(() => {
    if (isEmpty(instruction)) setInstruction(currentTutorialRef.current.images[currentImgIndexRef.current].instruction);
    else if (
      !animateOut &&
      !animOutFinished &&
      instruction !== currentTutorialRef.current.images[currentImgIndexRef.current].instruction
    ) {
      // console.log("setting animate out");
      setAnimateOut(true);
    }
  }, [pointerInPosition, currentImgIndexRef.current]);

  useEffect(() => {
    if (animateOut && animOutFinished) {
      setAnimateOut(false);
      setAnimOutFinished(false);
    }
  }, [animOutFinished]);

  // Adjust pointer instruction position (left/right)

  // reset first
  useEffect(() => {
    console.log("update", currentImgIndexRef.current + 1);
    if (rightSideRef.current !== null)
      updateRightSide(Boolean(currentTutorialRef.current.images[currentImgIndexRef.current].instructionSide));
  }, [currentImgIndexRef.current]);

  // update
  useEffect(() => {
    if (animOutFinished) {
      // console.log("anim out finished", windowTooNarrow, currentTutorialRef.current.images[currentImgIndexRef.current].coordinates.x);

      if (
        isEmpty(currentImgIndexRef.current) ||
        isEmpty(currentTutorialRef.current) ||
        isEmpty(currentTutorialRef.current.images)
      )
        return;

      // Three critical conditions dependent on viewport dimensions:
      if (
        Boolean(currentTutorialRef.current.images[currentImgIndexRef.current].instructionSide) &&
        currentTutorialRef.current.images[currentImgIndexRef.current].coordinates.x < 0.55 &&
        !windowTooNarrow
      ) {
        // x close to right perimeter but window wide enough so keep on right side
        console.log("wide enough");
        return updateRightSide(true);
      } else if (windowTooNarrow && currentTutorialRef.current.images[currentImgIndexRef.current].coordinates.x > 0.55) {
        // x close to right side but window is too narrow, force left side
        console.log("too narrow for right");
        return updateRightSide(false);
      } else if (windowTooNarrow && currentTutorialRef.current.images[currentImgIndexRef.current].coordinates.x < 0.45) {
        // x close to left side but window is too narrow, force right side
        console.log("too narrow for left");
        return updateRightSide(true);
      }

      if (
        currentTutorialRef.current.images[currentImgIndexRef.current].instructionSide &&
        pointerInPosition === false &&
        animOutFinished
      ) {
        updateRightSide(true);
      } else {
        if (
          isEmpty(currentTutorialRef.current.images[currentImgIndexRef.current].instructionSide) &&
          rightSideRef.current &&
          animOutFinished
        ) {
          updateRightSide(false);
        }
      }
    }
  }, [animOutFinished]);

  function updateWindowTooNarrowHandler(status) {
    setWindowTooNarrow(status);
    windowTooNarowRef.current = status;
  }

  function threeCriticalConditionsOfPointerSide() {
    try {
      if (currentTutorialRef.current.images[currentImgIndexRef.current].coordinates.x < 0.55) {
        console.log("1", currentImgIndexRef.current);
        return updateRightSide(true);
      }
      // if (currentTutorialRef.current.images[currentImgIndexRef.current].coordinates.x < 0.55 && rightSideRef.current) return updateRightSide(true);
      // else if (
      //   currentTutorialRef.current.images[currentImgIndexRef.current].coordinates.x > 0.55 &&
      //   !currentTutorialRef.current.images[currentImgIndexRef.current].instructionSide
      // )
      //   return updateRightSide(false);
      // else if (
      //   currentTutorialRef.current.images[currentImgIndexRef.current].coordinates.x > 0.55 &&
      //   Boolean(currentTutorialRef.current.images[currentImgIndexRef.current].instructionSide)
      // ) {
      //   console.log("left side");
      //   return updateRightSide(false);
      // }
      else if (currentTutorialRef.current.images[currentImgIndexRef.current].coordinates.x > 0.55) {
        console.log("2", currentImgIndexRef.current, currentTutorialRef.current.images[currentImgIndexRef.current].coordinates.x);
        return updateRightSide(false);
      } else if (currentTutorialRef.current.images[currentImgIndexRef.current].coordinates.x < 0.45) {
        console.log("3");
        return updateRightSide(true);
      }
    } catch (err) {}
  }

  useEffect(() => {
    if (window.innerWidth <= 1325 && !windowTooNarowRef.current) {
      updateWindowTooNarrowHandler(true);
      threeCriticalConditionsOfPointerSide();
    } else if (window.innerWidth > 1325 && windowTooNarowRef.current) updateWindowTooNarrowHandler(false);

    function resizeFuncHandler() {
      // console.log("resize");
      if (window.innerWidth <= 1325 && !windowTooNarowRef.current) {
        // console.log("resize true");
        updateWindowTooNarrowHandler(true);
        threeCriticalConditionsOfPointerSide();
      } else if (window.innerWidth > 1325 && windowTooNarowRef.current) {
        // console.log("resize false");
        updateWindowTooNarrowHandler(false);

        try {
          // console.log("bool", Boolean(currentTutorialRef.current.images[currentImgIndexRef.current].instructionSide), currentImgIndexRef.current+1);
          return updateRightSide(Boolean(currentTutorialRef.current.images[currentImgIndexRef.current].instructionSide)); // return to original condition
        } catch (err) {}
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
        rightSide && styles.rightSide,
        currentTutorial.images[currentImgIndex].pointerSize && styles[currentTutorial.images[currentImgIndex].pointerSize],
      ].join(" ")}
      onTransitionEnd={(e) => {
        if (e.target === wrapperRef.current) {
          // console.log("e.target", e.target);
          // console.log("transition end");

          if (animateOut) {
            // console.log("animated out");

            setInstruction(currentTutorial.images[currentImgIndex].instruction);
            setAnimOutFinished(true);
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
