// import styles from "./DownloadButton.module.css";
import { useContext } from "react";
import StylesContext from "../../store/styles-context";

export default function DownloadButton(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "DownloadButton"
  ).styles;

  function downloadStuff(url) {
    console.log("download stuff");
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
    // <a className={styles.btn} href={props.url} download={props.fileName}>
    // <a className={styles.btn} href={props.url} download>
    <a className={styles.btn} href={"https://ardi-test.000webhostapp.com/ardi6-49.msi"} download>
    {/* // <a className={styles.btn} href={"https://ardi-test.000webhostapp.com/live.jpg"} download> */}
      {/* //{" "}
      <div className={styles.btn} onClick={() => downloadStuff(props.url)}> */}
      Download Now
      <div className={styles.arrowDown}>
        <div className={styles.line}></div>
      </div>
      {/* //{" "}
      </div> */}
    </a>
  );
}
