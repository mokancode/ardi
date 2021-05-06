import Head from "next/head";
import { useContext } from "react";
import ParagraphWithHeader from "../components/ParagraphWithHeader/ParagraphWithHeader";
import StylesContext from "../store/styles-context";
// import styles from "../styles/SupportPage.module.css";

export default function SupportPage() {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "SupportPage").styles;

  return (
    <div className={["pageWrapper", styles.pageWrapper].join(" ")}>
      <Head>
        <title>Ardi - Support</title>
        <meta name="description" content="Contact us"></meta>
      </Head>

      <ParagraphWithHeader
        centerHeader={true}
        noUnderline={true}
        background={true}
        // paragraphAlignLeft={true}
        headerText={`Ariadne Support & Professional services`}
        paragraphText={
          <span className="textAlignCenter">
            OSoft offers high quality expertise in C++ projects development and support, integration of C++ with Python, Java, C#,
            Qt-based cross platform solutions. OSoft is publisher of Ardi, open source libraries googleQt,{" "}
            <a target="_blank" href="https://github.com/osoftteam/dropboxQt">
              dropboxQt
            </a>
            .
            <span className={styles.emailWrapper} style={{ display: "flex" }}>
              Please contact us by email:{" "}
              <span className={styles.link}>
                <img
                  src="/images/email.png"
                  alt="email"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginBottom: "-4px",
                    filter: "hue-rotate(60deg) drop-shadow(0 0 10px rgb(0, 0, 0, .2)",
                  }}
                ></img>{" "}
                osoft4ardi@gmail.com
              </span>
            </span>
          </span>
        }
        visibilitySensorReveal={true}
        icon={<img style={{ filter: "invert(1)", transform: "scale(1.1)" }} src="/images/support.png" alt="support"></img>}
        iconBgColor1={"darkslategrey"}
        iconBgColor2={"rgb(51, 141, 141)"}
      />
    </div>
  );
}
