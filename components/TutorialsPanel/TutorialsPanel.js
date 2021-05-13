import { useContext, useEffect, useState } from "react";
import StylesContext from "../../store/styles-context";
import isEmpty from "../../utils/validation/is-empty";
import TutorialSelector from "./TutorialSelector/TutorialSelector";
import TutorialViewer from "./TutorialViewer/TutorialViewer";

export default function TutorialsPanel({ tutorials }) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "TutorialsPanel")
    .styles;
  
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);

  function selectTutorial(categoryId, tutorialId) {
    let category = tutorials.find((category) => category.id === categoryId);
    let tutorial = category.tutorials.find((tutorial) => tutorial.id === tutorialId);

    setCurrentCategory(category);
    setCurrentTutorial(tutorial);
  }

  useEffect(() => {
    if (!isEmpty(tutorials)) {
      // setCurrentCategory(tutorials[0]);
      // setCurrentTutorial(tutorials[0].tutorials[0]);
      // console.log(tutorials[0].tutorials[0]);
    }
  }, [tutorials]);

  const [directToMenu, setDirectToMenu] = useState(false);

  return (
    <div className={styles.container}>
      <TutorialSelector
        tutorials={tutorials}
        currentCategory={currentCategory}
        currentTutorial={currentTutorial}
        selectTutorial={selectTutorial}
        directToMenu={directToMenu}
        setDirectToMenu={setDirectToMenu}
      />
      <TutorialViewer currentTutorial={currentTutorial} setDirectToMenu={setDirectToMenu} />
    </div>
  );
}
