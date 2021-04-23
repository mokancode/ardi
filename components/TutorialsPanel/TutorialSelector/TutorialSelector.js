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
}) {
  const tutorialsListRefs = useRef([]);
  const [tutorialsListOpen, setTutorialListOpen] = useState(null);

  return (
    <div className={styles.container}>
      <ul className={styles.categoriesList}>
        {tutorials.map((category, categoryIndex) => {
          return (
            <div className={styles.categoryContainer} key={category.id}>
              <p
                className={
                  classNames(styles.categoryName, {
                    [styles.hasList]: category.tutorials,
                    [styles.listIsOpen]: tutorialsListOpen === categoryIndex,
                    [styles.selected]:
                      currentCategory && category.id === currentCategory.id,
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
                {category.categoryName}
                <span className={styles.arrow}></span>
              </p>
              {category.tutorials && (
                <ul className={styles.tutorialsList}>
                  {category.tutorials.map((tutorial, tutorialIndex) => {
                    return (
                      <p
                        className={
                          currentTutorial && tutorial.id === currentTutorial.id
                            ? styles.selected
                            : undefined
                        }
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
