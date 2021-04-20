import { useState } from "react";
import TutorialSelector from "./TutorialSelector/TutorialSelector";
import styles from "./TutorialsPanel.module.css";
import TutorialViewer from "./TutorialViewer/TutorialViewer";

export default function TutorialsPanel({ tutorials }) {
  const [currentTutorial, setCurrentTutorial] = useState(null);

  function selectTutorial(tutorialId) {
    setCurrentTutorial(tutorialId);
  }

  return (
    <div className={styles.container}>
      <TutorialSelector
        tutorials={tutorials}
        currentTutorial={currentTutorial}
        selectTutorial={selectTutorial}
      />
      <TutorialViewer tutorials={tutorials} currentTutorial={currentTutorial} />
    </div>
  );
}
