import { useEffect, useRef, useState } from "react";
import isEmpty from "../../../../utils/validation/is-empty";
import styles from "./TutorialPointerInstruction.module.css";

export default function TutorialPointerInstruction({ currentTutorial, currentImgIndex, pointerInPosition }) {
  const wrapperRef = useRef();
  const [instruction, setInstruction] = useState("");
  const [animateOut, setAnimateOut] = useState(false);
  const [animFinished, setAnimFinished] = useState(false);
  const [rightSide, setRightSide] = useState(null);

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

  return (
    <div
      className={[
        styles.pointerInstructionWrapper,
        pointerInPosition == false && styles.animateOut,
        currentTutorial.images[currentImgIndex].coordinates.y &&
          currentTutorial.images[currentImgIndex].coordinates.y < 0.1 &&
          styles.marginTop,
        rightSide && styles.rightSide,
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
