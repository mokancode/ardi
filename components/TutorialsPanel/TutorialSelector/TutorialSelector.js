import { useEffect, useRef, useState } from "react";
import styles from "./TutorialSelector.module.css";
import { v4 as uuidv4 } from "uuid";
import isEmpty from "../../../utils/validation/is-empty";

export default function TutorialSelector({ tutorials, currentTutorial }) {
  const tutorialsListRefs = useRef([]);
  const [tutorialsListOpen, setTutorialListOpen] = useState(null);

  const [categoryIDs, setCategoryIDs] = useState([]);
  const [tutorialIDs, setTutorialIDs] = useState([]);
  useEffect(() => {
    let tempCategoryIDs = [];
    let tempTutorialIDs = [];
    for (var c = 0; c < tutorials.length; c++) {
      tempCategoryIDs.push(uuidv4());

      if (tutorials[c].tutorials) {
        let tempTutorials = tutorials[c].tutorials;
        for (var t = 0; t < tempTutorials.length; t++) {
          tempTutorialIDs.push(uuidv4());
        }
      }
    }
    setCategoryIDs(tempCategoryIDs);
    setTutorialIDs(tempTutorialIDs);
  }, []);

  if (isEmpty(categoryIDs) && isEmpty(tutorialIDs)) return <h1>Loading...</h1>;

  return (
    <div className={styles.container}>
      <ul className={styles.categoriesList}>
        {tutorials.map((category, categoryIndex) => {
          return (
            <div
              className={styles.categoryContainer}
              key={categoryIDs[categoryIndex]}
            >
              <p
                className={[
                  styles.categoryName,
                  category.tutorials && styles.hasList,
                  tutorialsListOpen === categoryIndex && styles.listIsOpen,
                ].join(" ")}
                name={category.categoryName}
                ref={(list) =>
                  (tutorialsListRefs.current[categoryIndex] = list)
                }
                onClick={() => {
                  if (!category.tutorials) return;

                  let currentMaxHeightOfSelectedList =
                    tutorialsListRefs.current[categoryIndex].nextSibling.style
                      .maxHeight;

                  if (!currentMaxHeightOfSelectedList) {
                    tutorialsListRefs.current[
                      categoryIndex
                    ].nextSibling.style.maxHeight = `${tutorialsListRefs.current[categoryIndex].nextSibling.scrollHeight}px`;
                    setTutorialListOpen(categoryIndex);
                  } else {
                    tutorialsListRefs.current[
                      categoryIndex
                    ].nextSibling.style.maxHeight = "";
                    setTutorialListOpen(null);
                  }

                  for (var i = 0; i < tutorialsListRefs.current.length; i++)
                    if (
                      tutorialsListRefs.current[i].nextSibling &&
                      i !== categoryIndex
                    )
                      tutorialsListRefs.current[i].nextSibling.style.maxHeight =
                        "";
                }}
              >
                {/* <span></span> */}
                {category.categoryName}
              </p>
              {category.tutorials && (
                <ul className={styles.tutorialsList}>
                  {category.tutorials.map((tutorial, tutorialIndex) => {
                    return (
                      <p key={tutorialIDs[categoryIndex + tutorialIndex]}>
                        {tutorial.name}
                      </p>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
