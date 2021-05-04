import styles from "./WindowsLogo.module.css";

export default function WindowsLogo() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
      </div>
    </div>
  );
}
