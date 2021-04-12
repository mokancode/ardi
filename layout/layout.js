import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";

import { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useRouter } from "next/router";

export default function Layout(props) {
  const router = useRouter();

  return (
    <Fragment>
      <Navbar />
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={router.pathname}
          classNames="page"
        timeout={{ enter: 800, exit: 300 }}
          // timeout={300}
        >
          <main id="mainDiv" className="centerDiv mainDiv">
            {/* <SwitchTransition 
        // mode="out-in"
        > */}

            {props.children}
          </main>
        </CSSTransition>
        {/* </SwitchTransition> */}
      </TransitionGroup>
    </Fragment>
  );
}
