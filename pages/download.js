import DownloadButton from "../components/DownloadButton/DownloadButton";
import ParagraphWithHeader from "../components/ParagraphWithHeader/ParagraphWithHeader";
// import styles from "../styles/DownloadPage.module.css";

import { useContext, useEffect, useState } from "react";
import StylesContext from "../store/styles-context";

import { v4 as uuidv4 } from "uuid";
// import axios from "axios";

// import downloadData from "./text.json";

export default function DownloadPage(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "DownloadPage"
  ).styles;

  const { downloadData } = props;
  if (!downloadData) return <h1>Loading...</h1>;

  const [changelog, setChangelog] = useState([]);
  useEffect(() => {
    let tempArray = downloadData.changelog.map((item) => {
      return (
        <p key={uuidv4()} style={{ margin: "0px" }}>
          {item}
        </p>
      );
    });
    setChangelog(tempArray);
  }, downloadData);

  // console.log("downloadData", downloadData);

  return (
    <div className={["", styles.pageWrapper].join(" ")}>
      <div className={styles.downloadButtonsWrapper}>
        <div className={styles.downloadBtnWrapper}>
          <div className={styles.paragraphWithHeaderWrapper}>
            <ParagraphWithHeader
              visibilitySensorReveal={true}
              background={true}
              headerWithIconDirection="horizontal"
              headerText={`Ardi ${downloadData.windows.version} for Windows`}
              paragraphText={`${downloadData.windows.windowsOS}`}
              icon={"/images/win7-logo.png"}
            />
          </div>
          <DownloadButton
            visibilitySensorReveal={true}
            url={`http://prokarpaty.net/ard_download/${downloadData.windows.fileName}`}
            fileName={downloadData.windows.fileName}
            fileSize={downloadData.windows.fileSize}
          />
        </div>

        <div className={styles.downloadBtnWrapper}>
          <div className={styles.paragraphWithHeaderWrapper}>
            <ParagraphWithHeader
              visibilitySensorReveal={true}
              background={true}
              headerWithIconDirection="horizontal"
              headerText={`Ardi ${downloadData.mac.version} for MacOS`}
              paragraphText={`${downloadData.mac.macOS}`}
              icon={"/images/apple-logo.png"}
            />
          </div>
          <DownloadButton
            visibilitySensorReveal={true}
            url={`http://prokarpaty.net/ard_download/${downloadData.mac.fileName}`}
            fileName={downloadData.mac.fileName}
            fileSize={downloadData.mac.fileSize}
            stripColor="green"
          />
        </div>
      </div>

      <ParagraphWithHeader
        visibilitySensorReveal={true}
        background={true}
        headerWithIconDirection="horizontal"
        headerText={`Changelog`}
        paragraphText={changelog}
        paragraphAlignLeft={true}
        // icon={"/images/.png"}
      />
    </div>
  );
}

export async function getStaticProps() {
  console.log("________________");
  console.log("________________");
  console.log("________________");
  console.log("________________");

  // const response = await fetch("https://ardi-test.000webhostapp.com/text.json");
  // const jsonData = await response.json();
  // console.log("jsonData", jsonData);

  // return await axios
  //   .get("https://ardi-test.000webhostapp.com/text.json")
  //   .then(function (response) {
  //     // handle success
  //     console.log("res", response.data);

  //     return {
  //       props: {
  //         downloadData: response.data,
  //       },
  //       revalidate: 60,
  //     };
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log("err", error);

  //     return {
  //       props: {
  //         hasError: true,
  //       },
  //     };
  //   });

  const path = require("path");
  const fs = require("fs").promises;

  const installerDirectory = path.join(
    process.cwd(),
    "public"
    // "ardi-installer"
  );
  const filenames = await fs.readdir(installerDirectory);
  let jsonData;
  const files = filenames.map(async (filename, index) => {
    const filePath = path.join(installerDirectory, filename);
    // console.log("filename", filename);
    // if (filename.split(".").pop() === "json") {
    if (filename === "downloadData.json") {
      let jsonFile = await fs.readFile(filePath, "utf8");
      jsonData = await (async function () {
        return JSON.parse(jsonFile);
      })();
    }
  });
  await Promise.all(files);

  return {
    props: {
      downloadData: jsonData,
    },
    revalidate: 60, // will not be used in static HTML export
  };
}
