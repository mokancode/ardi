import styles from "./PhoneIcon.module.css";

export default function PhoneIcon() {
  return (
    <div className={styles.phoneIcon}>
      <div className={styles.notch}></div>
      <div className={styles.navigationBar}></div>
    </div>
  );
}
