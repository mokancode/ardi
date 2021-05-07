import { useEffect, useRef, useState } from "react";
import styles from "./TutorialSelector.module.css";
import { v4 as uuidv4 } from "uuid";
import isEmpty from "../../../utils/validation/is-empty";
import classNames from "classnames";

export default function TutorialSelector({
  tutorials,
  currentCategory,
  currentTutorial,
  selectTutorial,
  directToMenu,
  setDirectToMenu,
}) {
  const tutorialsListRefs = useRef([]);
  const [tutorialsListOpen, setTutorialListOpen] = useState(null);
  const tutorialsListOpenRef = useRef(tutorialsListOpen);
  const [initialTutorialSet, setInitialTutorial] = useState(false);
  const [initialTutorialOpen, setInitialTutorialOpen] = useState(false);

  function updateTutorialsListOpen(state) {
    setTutorialListOpen(state);
    tutorialsListOpenRef.current = state;
  }

  useEffect(() => {
    if (!isEmpty(tutorials) && !initialTutorialSet) {
      setTimeout(() => {
        if (tutorialsListOpenRef.current) return setInitialTutorialOpen(true);
        setInitialTutorial(true);
      }, 1000);
    }
  }, [tutorials, initialTutorialSet]);

  return (
    <div className={styles.container}>
      <ul className={styles.categoriesList}>
        {tutorials.map((category, categoryIndex) => {
          return (
            <div className={styles.categoryContainer} key={category.id}>
              <p
                className={
                  classNames(styles.categoryName, {
                    [styles.hasList]: !isEmpty(category.tutorials),
                    [styles.listIsOpen]: tutorialsListOpen === categoryIndex,
                    [styles.selected]: currentCategory && category.id === currentCategory.id,
                    [styles.directToMenu]: directToMenu,
                    [styles.highlight]: initialTutorialSet,
                  })

                  //     [
                  //   styles.categoryName,
                  //   category.tutorials && styles.hasList,
                  //   tutorialsListOpen === categoryIndex && styles.listIsOpen,
                  //   currentCategory &&
                  //     category.id === currentCategory.id &&
                  //     styles.selected,
                  // ].join(" ")
                }
                style={{ animationDelay: `${categoryIndex * 50}ms` }}
                onAnimationEnd={() => {
                  if (categoryIndex === tutorials.length - 1) setDirectToMenu(false);

                  if (categoryIndex === 0 && initialTutorialSet && !initialTutorialOpen) {
                    setInitialTutorialOpen(true);
                    updateTutorialsListOpen(0);
                    selectTutorial(tutorials[0].id, tutorials[0].tutorials[0].id);
                    tutorialsListRefs.current[0].nextSibling.style.maxHeight = `${tutorialsListRefs.current[0].nextSibling.scrollHeight}px`;
                  }
                }}
                name={category.categoryName}
                ref={(list) => (tutorialsListRefs.current[categoryIndex] = list)}
                onClick={() => {
                  if (isEmpty(category.tutorials)) return;

                  let currentMaxHeightOfSelectedList = tutorialsListRefs.current[categoryIndex].nextSibling.style.maxHeight;

                  if (!currentMaxHeightOfSelectedList) {
                    tutorialsListRefs.current[
                      categoryIndex
                    ].nextSibling.style.maxHeight = `${tutorialsListRefs.current[categoryIndex].nextSibling.scrollHeight}px`;
                    updateTutorialsListOpen(categoryIndex);
                  } else {
                    tutorialsListRefs.current[categoryIndex].nextSibling.style.maxHeight = "";
                    updateTutorialsListOpen(null);
                  }

                  for (var i = 0; i < tutorialsListRefs.current.length; i++)
                    if (tutorialsListRefs.current[i].nextSibling && i !== categoryIndex)
                      tutorialsListRefs.current[i].nextSibling.style.maxHeight = "";
                }}
              >
                {category.categoryName}
                <span className={styles.arrow}></span>
              </p>
              {!isEmpty(category.tutorials) && (
                <ul className={styles.tutorialsList}>
                  {category.tutorials.map((tutorial, tutorialIndex) => {
                    return (
                      <p
                        className={currentTutorial && tutorial.id === currentTutorial.id ? styles.selected : undefined}
                        key={tutorial.id}
                        onClick={() => {
                          selectTutorial(category.id, tutorial.id);
                        }}
                      >
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
