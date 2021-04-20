import styles from "./DownloadArrowDown.module.css";

export function DownloadArrowDown(props) {
  return (
    <div className={styles.outerWrapper}>
      <div
        className={[
          styles.wrapper,
          props.show && styles.show,
          props.smaller && styles.smaller,
        ].join(" ")}
      >
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
