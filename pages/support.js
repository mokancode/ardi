import Head from "next/head";
import ParagraphWithHeader from "../components/ParagraphWithHeader/ParagraphWithHeader";
import styles from "../styles/SupportPage.module.css";

export default function SupportPage() {
  return (
    <div className="pageWrapper">
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
          <p className="textAlignCenter">
            OSoft offers high quality expertise in C++ projects development and support, integration of C++ with Python, Java, C#,
            Qt-based cross platform solutions. OSoft is publisher of Ardi, open source libraries googleQt,{" "}
            <a target="_blank" href="https://github.com/osoftteam/dropboxQt">
              dropboxQt
            </a>
            .
            <p className={styles.emailWrapper} style={{ display: "flex" }}>
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
            </p>
          </p>
        }
        visibilitySensorReveal={true}
        icon={<img style={{ filter: "invert(1)", transform: "scale(1.1)" }} src="images/support.png" alt="support"></img>}
        iconBgColor1={"darkslategrey"}
        iconBgColor2={"rgb(51, 141, 141)"}
      />
    </div>
  );
}
