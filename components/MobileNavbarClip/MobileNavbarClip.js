// import styles from "./MobileNavbarClip.module.css"; // import from _app.js
// import "./MobileNavbarClip.css";

import classNames from "classnames";
import { useRef, useState } from "react";
import NavbarButtonsContainer from "./NavbarButtonsContainer/NavbarButtonsContainer";

export default function MobileNavbarClip() {
  const clipPathRef = useRef();
  const [open, setOpenState] = useState(undefined);
  const [isAnimating, setIsAnimating] = useState(false);

  function setOpenHandler() {
    setOpenState((prevState) => {
      if (prevState) {
        // console.log("anim closed");
        clipPathRef.current.style.animationDirection = "reverse";
        clipPathRef.current.style.animationName = "rotateAnim";
      } else {
        // console.log("anim open");
        clipPathRef.current.style.animationDirection = "normal";
        clipPathRef.current.style.animationName = "rotateAnim";
      }
      return !prevState;
    });
  }

  return (
    <div
      className={classNames("container", {
        open: open,
      })}
    >
      <svg className={"hamburgerSVG"}>
        <rect />

        <clipPath id={"clipPathMenu"}>
          <rect
            ref={clipPathRef}
            onAnimationEnd={(e) => {
              if (open) {
                e.target.style.y = "0%";
                e.target.style.x = "0%";
                e.target.style.rx = "0px";
                e.target.style.width = "100%";
                e.target.style.height = "100%";
                e.target.style.transform = "unset";
                // console.log("opened");
              } else if (!open) {
                e.target.style.y = "31px";
                e.target.style.x = "20px";
                e.target.style.rx = "3px";
                e.target.style.width = "30px";
                e.target.style.height = "5px";
                e.target.style.transform = "unset";
                // console.log("closed");
              }
              // console.log("end");
              e.target.style.animationName = "none";
              setIsAnimating(false);
            }}
          />
        </clipPath>

        <foreignObject clipPath={`url(#clipPathMenu)`} width="100%" height="100%">
          <NavbarButtonsContainer open={open} setOpen={setOpenHandler} />
        </foreignObject>
      </svg>

      <button
        disabled={isAnimating}
        className={classNames("hamburgerTopTwoLines", {
          open: open,
        })}
        onClick={() => {
          if (isAnimating) return;
          setIsAnimating(true);

          setOpenHandler();
        }}
      >
        <div className={"line"}></div>
        <div className={"line"}></div>

        <div className={"openLines"}>
          <div className={"line openLine"}></div>
          <div className={"line openLine"}></div>
        </div>
      </button>
    </div>
  );
}