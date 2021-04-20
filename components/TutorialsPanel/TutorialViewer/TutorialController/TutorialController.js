import styles from "./TutorialController.module.css";

export default function TutorialController() {
  return <div className={styles.wrapper}>
      <button>Prev</button>
      <button>Play</button>
      <button>Next</button>
  </div>;
}
