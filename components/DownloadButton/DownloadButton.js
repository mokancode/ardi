// import styles from "./DownloadButton.module.css";
import { useContext, useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import StylesContext from "../../store/styles-context";
import { DownloadButtonStrip } from "./DownloadButtonStrip";

export default function DownloadButton(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "DownloadButton"
  ).styles;

  const [showComponent, setShowComponent] = useState(false);
  const [showChildComponents, setShowChildComponents] = useState(false);

  function downloadStuff(url) {
    var link = document.createElement("a");
    link.setAttribute("download", "test.jpg");
    // link.href = makeTextFile(textbox.value);
    // link.href = "/images/live.jpg";
    link.href = "https://ardi-test.000webhostapp.com/ardi6-49.msi";
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
      var event = new MouseEvent("click");
      link.dispatchEvent(event);
      document.body.removeChild(link);
    });
  }

  return (
    <ReactVisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && props.visibilitySensorReveal) {
          setShowComponent(true);
        }
        // else setShowComponent(false);
      }}
      partialVisibility={true}
      offset={{ top: 10 }}
    >
      <a
        className={[styles.btn, showComponent && styles.show].join(" ")}
        href={props.url}
        download={props.fileName}
        onTransitionEnd={() => setShowChildComponents(true)}
      >
        <div className={styles.downloadTextWrapper}>
          <div className={styles.downloadText}>
            {"Download Now".split("").map((letter, index) => {
              return letter === " " ? (
                <p style={{ marginLeft: "5px" }}></p>
              ) : (
                <p
                  style={{
                    animationDelay: `${index * 50 + 100}ms`,
                  }}
                  className={showChildComponents && styles.animate}
                >
                  {letter}
                </p>
              );
            })}
          </div>

          {(props.fileName || props.fileSize) && (
            <div className={styles.fileNameAndSizeWrapper}>
              {props.fileName && (
                <p className={styles.fileName}>{props.fileName}</p>
              )}
              {props.fileName && props.fileSize && (
                <p className={styles.hyphen}>-</p>
              )}
              {props.fileSize && (
                <p className={styles.fileSize}>{props.fileSize}</p>
              )}
            </div>
          )}
        </div>
        <div className={styles.separatingLine}></div>
        <DownloadButtonStrip
          show={showChildComponents}
          color={props.stripColor}
        />
      </a>
    </ReactVisibilitySensor>
  );
}
