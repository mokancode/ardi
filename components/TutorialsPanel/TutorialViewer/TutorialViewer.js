import { useEffect, useRef } from "react";
import TutorialController from "./TutorialController/TutorialController";
import styles from "./TutorialViewer.module.css";
export default function TutorialViewer() {
  const imgContainerRef = useRef();
  const pointerRef = useRef();
  const pointerInstructionRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    // console.log("imgRef", imgRef.current.complete);
    if (imgRef.current.complete) {
      let horizontalPos = 0.9;
      if (horizontalPos >= 0.5) {
        pointerInstructionRef.current.style.left = "-240px";
        pointerInstructionRef.current.style.right = "unset";
      } else if (horizontalPos < 0.5) {
        pointerInstructionRef.current.style.right = "-240px";
        pointerInstructionRef.current.style.left = "unset";
      }

      pointerRef.current.style.transform = `translate(${
        imgContainerRef.current.offsetWidth * horizontalPos -
        pointerRef.current.offsetWidth / 2
      }px, ${
        imgContainerRef.current.offsetHeight * 0.1 -
        pointerRef.current.offsetHeight / 2
      }px)`;
    }
  }, [imgRef]);

  //   useEffect(() => {
  //     window.addEventListener("resize", () => {
  //       pointerRef.current.style.transform = `translate(${
  //         imgContainerRef.current.offsetWidth * 0.5 -
  //         pointerRef.current.offsetWidth / 2
  //       }px, ${
  //         imgContainerRef.current.offsetHeight * 0.5 -
  //         pointerRef.current.offsetHeight / 2
  //       }px)`;
  //     });
  //   }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper} ref={imgContainerRef}>
        <img
          ref={imgRef}
          onLoad={() => {
            console.log("load");
            pointerRef.current.style.transform = `translate(${
              imgContainerRef.current.offsetWidth * 0.5 -
              pointerRef.current.offsetWidth / 2
            }px, ${
              imgContainerRef.current.offsetHeight * 0.5 -
              pointerRef.current.offsetHeight / 2
            }px)`;
          }}
          src="/images/image1.jpg"
          alt="img"
        ></img>
      </div>

      <div className={styles.pointerWrapper} ref={pointerRef}>
        <p className={styles.pointerInstruction} ref={pointerInstructionRef}>
          Instruction will appear here
        </p>
        <div className={styles.pointer}></div>
      </div>

      <TutorialController />
    </div>
  );
}
