import { useContext } from "react";
import StylesContext from "../../store/styles-context";

export default function Footer() {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "Footer"
  ).styles;

  return (
    <div className={styles.footer}>
      <div className={styles.footerLinkWrapper}>
        <a href="https://myportfolio-77b3c.web.app/" target="_blank">
          {"Website designed & developed by"}
          <p>
            MoKanCode<span>MoKanCode</span>
          </p>
        </a>
      </div>
    </div>
  );
}
