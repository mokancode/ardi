import styles from "./PrivacyPolicyIcon.module.css";

export default function PrivacyPolicyIcon({ show }) {
  return (
    <svg
      className={[styles.svg, show && styles.show].join(" ")}
      x="0px"
      y="0px"
      viewBox="0 0 324 343"
      style={{ enableBackground: "new 0 0 324 343" }}
    >
      <g id="Layer_1">
        <path
          className={styles.path1}
          d="M301.9,110.75c-18.2,0-35.57-7.57-47.97-20.89l-1.13-1.22c-9.3-9.99-21.39-16.75-34.54-43.55
   c-10.27-20.95-31.43-34.34-54.76-34.34h-0.72c-23.37,0-44.6,13.36-54.98,34.31C94.45,72.01,82.19,78.97,72.87,89.25v0
   c-12.42,13.69-30.04,21.5-48.53,21.5H13.37h-0.5c0,0,30,222,152,222s148-222,148-222H301.9z"
        />
        <path
          className={styles.path0}
          d="M163,332.72V11V332.72c0.62,0.01,1.24,0.03,1.87,0.03c122,0,148-222,148-222H301.9
   c-18.2,0-35.57-7.57-47.97-20.89l-1.13-1.22c-9.3-9.99-21.39-16.75-34.54-43.55c-10.27-20.95-31.43-34.34-54.76-34.34h-0.72"
        />
      </g>
    </svg>
  );
}
