import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";

import { Fragment, useContext, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useRouter } from "next/router";
import MainGradientShape from "../components/SVGs/MainGradienetShape/MainGradientShape";
import RefsContext from "../store/refs-context";
import AppVersion from "../components/AppVersion/AppVersion";

const appVersion = "1.0.0";

export default function Layout(props) {
  const router = useRouter();
  const mainDivRef = useRef();
  const mainGradientShapeRef = useRef();

  const [detachNavbar, setDetachNavbar] = useState(false);

  const refsContext = useContext(RefsContext);

  useEffect(() => {
    refsContext.addRef({
      name: "mainDivRef",
      ref: mainDivRef,
    });
  }, []);

  useEffect(() => {
    setDetachNavbar(false);
  }, [router.pathname]);

  return (
    <div className="appContainer">
      <AppVersion version={appVersion}/>

      <Navbar detach={detachNavbar} />

      {/* <TransitionGroup className="transition-group">
        <CSSTransition
          key={router.pathname}
          classNames="gradientShapeTransition"
          timeout={{ enter: 800, exit: 300 }}
          // timeout={300}
        >
        </CSSTransition>
      </TransitionGroup> */}

      <div className="mainGradientShapeWrapper" ref={mainGradientShapeRef}>
        <MainGradientShape />
      </div>

      <TransitionGroup className="transition-group">
        <CSSTransition
          key={router.pathname}
          classNames="page"
          // timeout={{ enter: 800, exit: 300 }}
          timeout={4000}
        >
          <main
            id="mainDiv"
            className="centerDiv mainDiv"
            ref={mainDivRef}
            onScroll={(e) => {
              // console.log(e.target.scrollTop);
              window.scrollY = e.target.scrollTop;

              mainGradientShapeRef.current.style.transform = `translateY(-${
                e.target.scrollTop / 2
              }px)`;

              if (!detachNavbar && e.target.scrollTop > 0)
                setDetachNavbar(true);
              else if (detachNavbar && e.target.scrollTop === 0)
                setDetachNavbar(false);
            }}
          >
            {/* <SwitchTransition 
        // mode="out-in"
        > */}
            <div className="mainChildrenWrapper">{props.children}</div>
          </main>
        </CSSTransition>
        {/* </SwitchTransition> */}
      </TransitionGroup>
    </div>
  );
}
