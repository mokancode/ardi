import { useEffect, useState } from "react";
import isEmpty from "../../utils/validation/is-empty";
import TutorialSelector from "./TutorialSelector/TutorialSelector";
import styles from "./TutorialsPanel.module.css";
import TutorialViewer from "./TutorialViewer/TutorialViewer";

export default function TutorialsPanel({ tutorials }) {
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);

  function selectTutorial(categoryId, tutorialId) {
    let category = tutorials.find((category) => category.id === categoryId);
    let tutorial = category.tutorials.find((tutorial) => tutorial.id === tutorialId);

    setCurrentCategory(category);
    setCurrentTutorial(tutorial);
  }

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
      <TutorialViewer currentTutorial={currentTutorial} setDirectToMenu={setDirectToMenu}/>
    </div>
  );
}
