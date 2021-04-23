import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import isEmpty from "../../../utils/validation/is-empty";
import TutorialController from "./TutorialController/TutorialController";
import styles from "./TutorialViewer.module.css";
export default function TutorialViewer(props) {
  const imgContainerRef = useRef();
  const pointerRef = useRef();
  const pointerInstructionRef = useRef();
  const imgRef = useRef();
  const coordinatesDisplayRef = useRef();

  const [currentTutorial, setCurrentTutorial] = useState({});
  const currentTutorialRef = useRef(currentTutorial);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const currentImgIndexRef = useRef(currentImgIndex);
  const [showPointer, setShowPointer] = useState(false);
  const [showCoordinates, setShowCoordinates] = useState(false);

  useEffect(() => {
    if (!isEmpty(props.currentTutorial))
      setCurrentTutorial((prev) => {
        currentTutorialRef.current = props.currentTutorial;
        return props.currentTutorial;
      });
    setCurrentImgIndex(0);
    currentImgIndexRef.current = 0;
    setShowPointer(false);
  }, [props.currentTutorial]);

  useEffect(() => {
    if (!currentTutorial.images || !currentTutorial.images[currentImgIndex])
      return;
    let xPos = currentTutorial.images[currentImgIndex].coordinates.x;
    let yPos = currentTutorial.images[currentImgIndex].coordinates.y;
    if (xPos >= 0.5) {
      // pointerInstructionRef.current.style.left = "0px";
      // pointerInstructionRef.current.style.right = "unset";
    } else if (xPos < 0.5) {
      // pointerInstructionRef.current.style.right = "-240px";
      // pointerInstructionRef.current.style.left = "unset";
    }

    pointerRef.current.style.transform = `translate(${
      imgContainerRef.current.offsetWidth * xPos -
      pointerRef.current.offsetWidth / 2
    }px, ${
      imgContainerRef.current.offsetHeight * yPos -
      pointerRef.current.offsetHeight / 2
    }px)`;
  }, [currentImgIndex]);

  const updateCurrentImgIndex = useCallback((direction) => {
    if (isEmpty(currentTutorialRef.current.images)) return;
    let tempCurrentImgIndex = currentImgIndexRef.current;
    let total = currentTutorialRef.current.images.length;
    if (direction === "prev") {
      if (--tempCurrentImgIndex < 0) tempCurrentImgIndex = total - 1;
    } else if (direction === "next") {
      if (++tempCurrentImgIndex > total - 1) tempCurrentImgIndex = 0;
    }

    setCurrentImgIndex(tempCurrentImgIndex);
    currentImgIndexRef.current = tempCurrentImgIndex;
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowLeft") updateCurrentImgIndex("prev");
      if (e.code === "ArrowRight") updateCurrentImgIndex("next");
      if (e.code === "KeyC") setShowCoordinates((prevState) => !prevState);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      {!isEmpty(currentTutorial) ? (
        !isEmpty(currentTutorial.images) ? (
          <Fragment>
            <div className={styles.imgWrapper} ref={imgContainerRef}>
              <div
                className={[
                  styles.pointerWrapper,
                  showPointer && styles.show,
                ].join(" ")}
                ref={pointerRef}
              >
                <div
                  className={[
                    styles.pointerInstructionWrapper,
                    currentTutorial.images[currentImgIndex].pointerSize &&
                      styles[
                        currentTutorial.images[currentImgIndex].pointerSize
                      ],
                  ].join(" ")}
                >
                  <p
                    className={styles.pointerInstruction}
                    ref={pointerInstructionRef}
                  >
                    {currentTutorial.images[currentImgIndex].instruction}
                  </p>
                </div>
                <div
                  className={[
                    styles.pointer,
                    currentTutorial.images[currentImgIndex].pointerSize &&
                      styles[
                        currentTutorial.images[currentImgIndex].pointerSize
                      ],
                    showCoordinates && styles.showCoordinates,
                  ].join(" ")}
                ></div>
              </div>

              <img
                ref={imgRef}
                onLoad={() => {
                  if (!showPointer) setShowPointer(true);

                  //   console.log(
                  //     "load",
                  //     imgContainerRef.current.offsetWidth,
                  //     imgContainerRef.current.offsetHeight
                  //   );
                  let xPos =
                    currentTutorial.images[currentImgIndex].coordinates.x;
                  let yPos =
                    currentTutorial.images[currentImgIndex].coordinates.y;
                  //   if (xPos >= 0.5) {
                  //     // pointerInstructionRef.current.style.left = "0px";
                  //     // pointerInstructionRef.current.style.right = "unset";
                  //   } else if (xPos < 0.5) {
                  //     // pointerInstructionRef.current.style.right = "-240px";
                  //     // pointerInstructionRef.current.style.left = "unset";
                  //   }

                  pointerRef.current.style.transform = `translate(${
                    imgContainerRef.current.offsetWidth * xPos -
                    pointerRef.current.offsetWidth / 2
                  }px, ${
                    imgContainerRef.current.offsetHeight * yPos -
                    pointerRef.current.offsetHeight / 2
                  }px)`;
                }}
                onMouseMove={(e) => {
                  if (!showCoordinates) return;

                  var {
                    x,
                    y,
                  } = imgContainerRef.current.getBoundingClientRect();
                  
                  var parent = imgContainerRef.current.parentNode;
                  var totalOffsetTop =
                    imgContainerRef.current.offsetTop + parent.offsetTop;
                  var totalOffsetLeft = imgContainerRef.current.offsetLeft;
                  while (!isEmpty(parent.parentNode)) {
                    parent = parent.parentNode;
                    totalOffsetTop += parent.offsetTop;
                    totalOffsetLeft += parent.offsetLeft;
                  }

                  coordinatesDisplayRef.current.style.transform = `translateX(${
                    e.clientX + window.scrollX - x
                  }px)
                                             translateY(${
                                               e.clientY +
                                               window.scrollY -
                                               totalOffsetTop
                                             }px)`;

                  coordinatesDisplayRef.current.innerHTML = `x: ${Number(
                    (e.clientX + window.scrollX - x) /
                      imgContainerRef.current.offsetWidth
                  ).toFixed(2)}, y: ${Number(
                    (e.clientY + window.scrollY - totalOffsetTop) /
                      imgContainerRef.current.offsetHeight
                  ).toFixed(2)}`;
                }}
                src={currentTutorial.images[currentImgIndex].src}
                alt="img"
              ></img>

              <p
                className={[
                  styles.coordinatesDisplay,
                  showCoordinates && styles.show,
                ].join(" ")}
                ref={coordinatesDisplayRef}
              >
                x: 0, y: 0
              </p>
            </div>
            <TutorialController
              currentImgIndex={currentImgIndex}
              updateCurrentImgIndex={updateCurrentImgIndex}
              total={
                currentTutorial.images ? currentTutorial.images.length : null
              }
              showCoordinates={showCoordinates}
              setShowCoordinates={setShowCoordinates}
            />
          </Fragment>
        ) : !isEmpty(currentTutorial.verbalInstruction) ? (
          <div className={styles.verbalInstructionWrapper}>
            {currentTutorial.verbalInstruction.map((sentence) => {
              return <p>{sentence}</p>;
            })}
          </div>
        ) : (
          <h1 className={styles.instructionalHeader}>Nothing here!</h1>
        )
      ) : (
        <h1 className={styles.instructionalHeader}>
          Select a tutorial from the menu
        </h1>
      )}
    </div>
  );
}
