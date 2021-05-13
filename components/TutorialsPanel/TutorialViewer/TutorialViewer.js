import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import isEmpty from "../../../utils/validation/is-empty";
import TutorialController from "./TutorialController/TutorialController";
import TutorialPointerInstruction from "./TutorialPointerInstruction/TutorialPointerInstruction";
import styles from "./TutorialViewer.module.css";

export default function TutorialViewer(props) {
  const imgContainerRef = useRef();
  const pointerCanvas = useRef();
  const pointerRef = useRef();
  const pointerInstructionRef = useRef();
  const imgRef = useRef();
  const coordinatesDisplayRef = useRef();

  const [currentTutorial, setCurrentTutorial] = useState({});
  const currentTutorialRef = useRef(currentTutorial);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const currentImgIndexRef = useRef(currentImgIndex);
  const [currentImgSrc, setCurrentImgSrc] = useState("");
  const [showPointer, setShowPointer] = useState(false);
  const [showCoordinates, setShowCoordinates] = useState(false);
  const [pointerInPosition, setPointerInPosition] = useState(false);
  const pointerCoordinates = useRef({ x: null, y: null });
  // const [pointerCoordinates, setPointerCoordinates] = useState({ x: null, y: null });

  function updateCurrentTutorial(tutorial) {
    setCurrentTutorial(tutorial);
    currentTutorialRef.current = tutorial;
  }

  useEffect(() => {
    if (!isEmpty(props.currentTutorial))
      // setCurrentTutorial((prev) => {
      //   currentTutorialRef.current = props.currentTutorial;
      //   return props.currentTutorial;
      // });
      updateCurrentTutorial(props.currentTutorial);

    updateCurrentImgIndex(0);

    // setCurrentImgSrc(currentTutorial.images[currentImgIndex].src);

    if (!isEmpty(props.currentTutorial) && !isEmpty(props.currentTutorial.images)) {
      setCurrentImgSrc(props.currentTutorial.images[0].src);
    }

    // if (
    //   !isEmpty(props.currentTutorial) &&
    //   props.currentTutorial.images[currentImgIndex].src &&
    //   props.currentTutorial.images[currentImgIndex].src !== currentImgSrc
    // )
    //   setShowPointer(false);
  }, [props.currentTutorial]);

  useEffect(() => {
    try {
      if (!currentTutorial.images || !currentTutorial.images[currentImgIndex]) return;
      let xPos = currentTutorial.images[currentImgIndex].coordinates.x;
      let yPos = currentTutorial.images[currentImgIndex].coordinates.y;

      // if (pointerCoordinates.current.x === xPos && pointerCoordinates.current.y === yPos) {
      //   console.log("same");
      // }
      pointerCoordinates.current = { x: xPos, y: yPos };
      // setPointerCoordinates({ x: xPos, y: yPos });

      if (xPos >= 0.5) {
        // pointerInstructionRef.current.style.left = "0px";
        // pointerInstructionRef.current.style.right = "unset";
      } else if (xPos < 0.5) {
        // pointerInstructionRef.current.style.right = "-240px";
        // pointerInstructionRef.current.style.left = "unset";
      }

      pointerRef.current.style.transform = `translate(${
        imgContainerRef.current.offsetWidth * xPos - pointerRef.current.offsetWidth / 2
      }px, ${
        imgContainerRef.current.offsetHeight * yPos - pointerRef.current.offsetHeight / 2
      }px)`;

      if (currentTutorial.images[currentImgIndex].src !== currentImgSrc)
        setCurrentImgSrc(currentTutorial.images[currentImgIndex].src);

      // if (
      //   pointerCoordinates &&
      //   pointerCoordinates.current &&
      //   pointerCoordinates.current.x &&
      //   pointerCoordinates.current.y &&
      //   pointerCoordinates.current.x === xPos &&
      //   pointerCoordinates.current.y === yPos
      // ) {
      //   return;
      // }
      setPointerInPosition(false);
    } catch (err) {
      console.log("err", err);
    }

    pointerCanvas.current.style.width = `${imgContainerRef.current.offsetWidth}px`;
  }, [currentTutorial, currentImgIndex]);

  const updateCurrentImgIndex = useCallback((direction) => {
    if (direction === 0) {
      setCurrentImgIndex(0);
      currentImgIndexRef.current = 0;
      return;
    }

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

  const [smallScreenUnsupported, setSmallScreenUnsupported] = useState(false);
  const smallScreenUnsupportedRef = useRef(smallScreenUnsupported);

  function updateSmallScreenUnsupportedHandler(status) {
    setSmallScreenUnsupported(status);
    smallScreenUnsupportedRef.current = status;
  }

  useEffect(() => {
    if (window.innerWidth <= 1100 && !smallScreenUnsupportedRef.current)
      updateSmallScreenUnsupportedHandler(true);
    else if (window.innerWidth > 1100 && smallScreenUnsupportedRef.current)
      updateSmallScreenUnsupportedHandler(false);

    function resizeFuncHandler() {
      if (window.innerWidth <= 1100 && !smallScreenUnsupportedRef.current)
        updateSmallScreenUnsupportedHandler(true);
      else if (window.innerWidth > 1100 && smallScreenUnsupportedRef.current)
        updateSmallScreenUnsupportedHandler(false);
    }

    window.addEventListener("resize", resizeFuncHandler);

    return function cleanupListener() {
      window.removeEventListener("resize", resizeFuncHandler);
    };
  }, []);

  if (smallScreenUnsupported) {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.instructionalHeader}>
          Tutorial displayer is currently unsupported for small screens
        </h1>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.pointerCanvas} ref={pointerCanvas}>
        {!isEmpty(currentTutorial.images) && (
          <div
            className={[styles.pointerWrapper, showPointer && styles.show].join(" ")}
            ref={pointerRef}
            onTransitionEnd={(e) => {
              if (e.target === pointerRef.current) setPointerInPosition(true);
            }}
          >
            <TutorialPointerInstruction
              currentTutorial={currentTutorial}
              currentTutorialRef={currentTutorialRef}
              currentImgIndex={currentImgIndex}
              currentImgIndexRef={currentImgIndexRef}
              pointerInPosition={pointerInPosition}
              pointerCoordinates={pointerCoordinates}
              setPointerInPosition={setPointerInPosition}
            />

            <div
              className={[
                styles.pointer,
                currentTutorial.images[currentImgIndex].brighterPointer &&
                  styles.brighter,
                currentTutorial.images[currentImgIndex].pointerSize &&
                  styles[currentTutorial.images[currentImgIndex].pointerSize],
                showCoordinates && styles.showCoordinates,
              ].join(" ")}
            ></div>
          </div>
        )}
      </div>

      {!isEmpty(currentTutorial) ? (
        !isEmpty(currentTutorial.images) ? (
          <Fragment>
            <div className={styles.imgWrapper} ref={imgContainerRef}>
              {/* <picture */}
              <img
                ref={imgRef}
                onLoad={(e) => {
                  pointerCanvas.current.style.width = `${imgContainerRef.current.offsetWidth}px`;

                  // console.log("loaded", e.target);

                  if (!showPointer) setShowPointer(true);

                  let xPos = currentTutorial.images[currentImgIndex].coordinates.x;
                  let yPos = currentTutorial.images[currentImgIndex].coordinates.y;

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

                  var { x, y } = imgContainerRef.current.getBoundingClientRect();

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
                                               e.clientY + window.scrollY - totalOffsetTop
                                             }px)`;

                  coordinatesDisplayRef.current.innerHTML = `x: ${
                    "" ||
                    Number(
                      (e.clientX + window.scrollX - x) /
                        imgContainerRef.current.offsetWidth
                    ).toFixed(2)
                  }, y: ${Number(
                    (e.clientY + window.scrollY - totalOffsetTop) /
                      imgContainerRef.current.offsetHeight
                  ).toFixed(2)}`;
                }}
                alt={`${currentTutorial.name} ${currentImgIndex}/${currentTutorial.images.length}`}
                src={currentImgSrc}
              ></img>
              {/* <source srcSet={require(`${currentImgSrc}?webp`)} type="image/webp" />
                <source srcSet={require(`${currentImgSrc}`)} type="image/jpeg" />
                <img src={require(`${currentImgSrc}`)} />
              </picture> */}

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
              total={currentTutorial.images ? currentTutorial.images.length : null}
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
          <h1 className={[styles.instructionalHeader, styles.nothingHere].join(" ")}>
            Nothing here!
          </h1>
        )
      ) : (
        <h1
          className={styles.instructionalHeader}
          onClick={() => {
            props.setDirectToMenu(true);
          }}
        >
          Select a tutorial from the menu
        </h1>
      )}
    </div>
  );
}
