import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";

import { Fragment, useContext, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useRouter } from "next/router";
import MainGradientShape from "../components/SVGs/MainGradienetShape/MainGradientShape";
import RefsContext from "../store/refs-context";
import AppVersion from "../components/AppVersion/AppVersion";
import Footer from "../components/Footer/Footer";
import MobileNavbarClip from "../components/MobileNavbarClip/MobileNavbarClip";
import classNames from "classnames";

const appVersion = "1.1.3";

export default function Layout(props) {
  const router = useRouter();
  const mainDivRef = useRef();
  const mainGradientShapeRef = useRef();

  const [detachNavbar, setDetachNavbar] = useState(false);
  const [showMainGradientShape, setShowMainGradientShape] = useState(false);

  const refsContext = useContext(RefsContext);

  useEffect(() => {
    refsContext.addRef({
      name: "mainDivRef",
      ref: mainDivRef,
    });

    // if (window.innerWidth > 1700) mainGradientShapeRef.current.style.top = `-${window.innerWidth - 1440}px`;
    if (window.innerWidth > 1400) mainGradientShapeRef.current.style.top = `-${window.innerWidth - 1440}px`;
    else mainGradientShapeRef.current.style.top = `${1440 - window.innerWidth}px`;

    setShowMainGradientShape(true);

    console.log("Website designed and developed by MoKanCode https://myportfolio-77b3c.web.app/");

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1400) {
        mainGradientShapeRef.current.style.left = `${-window.innerWidth / 20}px`;
        mainGradientShapeRef.current.style.top = `${1440 - window.innerWidth}px`;
      }
    });
  }, []);

  useEffect(() => {
    console.log("route", router.pathname);

    if (router.pathname === "/") {
      // console.log("/");
      if (window.innerWidth <= 800)
        mainGradientShapeRef.current.childNodes[0].style.transform = `rotate(40deg) scale(1.4, 1.4) translateY(-50px)`;
      else
        mainGradientShapeRef.current.childNodes[0].style.transform = `rotate(40deg) scale(1.${
          window.innerWidth > 1400 ? "1" : "3"
        }, ${window.innerWidth <= 1400 ? "1.1" : "1"})`;
    }
    if (router.pathname === "/download") {
      console.log("/download");
      if (window.innerWidth <= 800)
        mainGradientShapeRef.current.childNodes[0].style.transform = `rotate(45deg) scale(1.2, 1.2) translateY(-100px)`;
      else
        mainGradientShapeRef.current.childNodes[0].style.transform = `rotate(45deg) scale(1.${
          window.innerWidth > 1400 ? "1" : "3"
        }, ${window.innerWidth <= 1400 ? "1.1" : "1"})`;
    }
    if (router.pathname === "/support") {
      console.log("/support");
      if (window.innerWidth <= 800)
        mainGradientShapeRef.current.childNodes[0].style.transform = `rotate(35deg) scale(1.2, 1.2) translateY(-100px)`;
      else
        mainGradientShapeRef.current.childNodes[0].style.transform = `rotate(35deg) scale(1.${
          window.innerWidth > 1400 ? "1" : "3"
        }, ${window.innerWidth <= 1400 ? "1.1" : "1"})`;
    }
    if (router.pathname === "/demo") {
      console.log("/demo");
      if (window.innerWidth <= 800)
        mainGradientShapeRef.current.childNodes[0].style.transform = `rotate(40deg) scale(1.2, 1.2) translateY(-100px)`;
      else
        mainGradientShapeRef.current.childNodes[0].style.transform = `rotate(40deg) scale(1.${
          window.innerWidth > 1400 ? "1" : "3"
        }, ${window.innerWidth <= 1400 ? "1.1" : "1"})`;
    }

    mainGradientShapeRef.current.style.transform = `translateY(0px)`;

    setDetachNavbar(false);
  }, [router.pathname]);

  // Determine if mobile dimensions
  const [mobileMode, setMobileMode] = useState(false);
  const mobileModeRef = useRef(false);

  function updateMobileMode(isMobileMode) {
    setMobileMode(isMobileMode);
    mobileModeRef.current = isMobileMode;
  }

  useEffect(() => {
    if (window.innerWidth <= 700) {
      updateMobileMode(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 700 && !mobileModeRef.current) {
        console.log("mobile mode", mobileModeRef.current);
        updateMobileMode(true);
      } else if (window.innerWidth > 700 && mobileModeRef.current) {
        console.log("mobile mode", mobileModeRef.current);
        updateMobileMode(false);
      }
    });
  }, []);

  return (
    <div className="appContainer">
      <AppVersion version={appVersion} />

      {mobileMode ? <MobileNavbarClip /> : <Navbar detach={detachNavbar} />}

      {/* <TransitionGroup className="transition-group">
        <CSSTransition
          key={router.pathname}
          classNames="gradientShapeTransition"
          timeout={{ enter: 800, exit: 300 }}
          // timeout={300}
        >
        </CSSTransition>
      </TransitionGroup> */}

      <div
        className={classNames("mainGradientShapeWrapper", {
          show: showMainGradientShape,
        })}
        ref={mainGradientShapeRef}
      >
        <MainGradientShape />
      </div>

      {showMainGradientShape && (
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={router.pathname}
            classNames="page"
            // timeout={{ enter: 800, exit: 300 }}
            timeout={300}
          >
            <main
              id="mainDiv"
              className="centerDiv mainDiv"
              ref={mainDivRef}
              onScroll={(e) => {
                // console.log(e.target.scrollTop);
                window.scrollY = e.target.scrollTop;

                mainGradientShapeRef.current.style.transform = `translateY(-${e.target.scrollTop / 2}px)`;

                if (!detachNavbar && e.target.scrollTop > 0) {
                  setDetachNavbar(true);
                  // console.log("attach");
                } else if (detachNavbar && e.target.scrollTop === 0) {
                  // console.log("detach");
                  setDetachNavbar(false);
                }
              }}
            >
              {/* <SwitchTransition 
        // mode="out-in"
        > */}
              <div className="mainChildrenWrapper">
                <div className="pagesWrapper">{props.children}</div>
                <Footer />
              </div>
            </main>
          </CSSTransition>
          {/* </SwitchTransition> */}
        </TransitionGroup>
      )}
    </div>
  );
}
