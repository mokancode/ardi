import { Fragment, useContext, useEffect, useState } from "react";
import StylesContext from "../../../store/styles-context";
import IsometricProgrammer from "./IsometricProgrammer";
import IsometricProgrammerIconBoxes from "./IsometricProgrammerIconBoxes";
import IsometricProgrammerTable from "./IsometricProgrammerTable";
import IsometricProgrammerLaptop from "./IsometricProgrammerLaptop";

export default function IsometricProgrammerContainer() {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "IsometricProgrammer"
  ).styles;

  const [animateIsometricProgrammer, setAnimateIsometricProgrammer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateIsometricProgrammer(true);
    }, 500);
  }, []);

  return (
    <Fragment>
      <IsometricProgrammer
        animate={animateIsometricProgrammer}
        setAnimateIsometricProgrammer={setAnimateIsometricProgrammer}
      />
      <IsometricProgrammerIconBoxes animate={animateIsometricProgrammer} />
      <IsometricProgrammerTable animate={animateIsometricProgrammer} />
      <IsometricProgrammerLaptop animate={animateIsometricProgrammer} />
    </Fragment>
  );
}
