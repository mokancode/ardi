import styles from "./AppVersion.module.css";

export default function AppVersion({ version }) {
  return (
    <div className={styles.appVersion}>
      <div className={styles.textSkewWrapper}>
        <p>v{version}</p>
      </div>
    </div>
  );
}
