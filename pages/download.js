import Head from "next/head";
import DownloadButton from "../components/DownloadButton/DownloadButton";
import ParagraphWithHeader from "../components/ParagraphWithHeader/ParagraphWithHeader";
// import styles from "../styles/DownloadPage.module.css";

import { Fragment, useContext, useEffect, useState } from "react";
import StylesContext from "../store/styles-context";

import { v4 as uuidv4 } from "uuid";
import PhoneIcon from "../icons/PhoneIcon/PhoneIcon";
import WindowsLogo from "../icons/WindowsLogo/WindowsLogo";
// import axios from "axios";

// import downloadData from "./text.json";

export default function DownloadPage(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "DownloadPage").styles;

  const { downloadData } = props;
  if (!downloadData) return <h1>Loading...</h1>;

  const [changelog, setChangelog] = useState(null);
  useEffect(() => {
    setChangelog(
      downloadData.changelog.map((item) => {
        return {
          text: item,
          id: uuidv4(),
        };
      })
    );
  }, [downloadData]);

  // console.log("downloadData", downloadData);

  const [hideMobileNotification, setHideMobileNotification] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 700) {
      setTimeout(() => {
        setHideMobileNotification(false);
      }, 500);
    }
  }, []);

  return (
    <div className={["pageWrapper", styles.pageWrapper].join(" ")}>
      <Head>
        <title>Download Ardi</title>
        <meta name="description" content="Download the latest version of Ardi for Windows or Mac"></meta>
      </Head>

      <Fragment>
        <div className={[styles.veil, hideMobileNotification ? styles.hide : undefined].join(" ")}></div>
        <div className={[styles.mobileNotification, hideMobileNotification ? styles.hide : undefined].join(" ")}>
          {/* <PhoneIcon /> */}
          <ParagraphWithHeader
            visibilitySensorReveal={true}
            iconShowDelay={1000}
            // background={true}
            // headerWithIconDirection="horizontal"
            centerHeader={true}
            noUnderline={true}
            // paragraphAlignLeft={true}
            headerText="Greetings!"
            paragraphText="You're browsing on a mobile device. Ardi is currently a Windows and Mac only application"
            iconBgColor1={"rgb(156, 185, 240)"}
            iconBgColor2={"rgb(128, 154, 202)"}
            icon={<PhoneIcon />}
          />
          <button
            onClick={() => {
              setHideMobileNotification(true);
            }}
          >
            I understand!
          </button>
        </div>
      </Fragment>

      <div className={styles.downloadButtonsWrapper}>
        <div className={styles.downloadBtnWrapper}>
          <div className={styles.paragraphWithHeaderWrapper}>
            <ParagraphWithHeader
              centerHeader={true}
              noUnderline={true}
              noPadding={true}
              visibilitySensorReveal={true}
              background={true}
              // headerWithIconDirection="horizontal"
              nonBreakingHeader={true}
              headerText={`Ardi ${downloadData.windows.version} for Windows`}
              paragraphText={`${downloadData.windows.windowsOS || ""}`}
              iconBgColor1={"rgb(117, 166, 221)"}
              iconBgColor2={"rgb(36, 129, 184)"}
              icon={<WindowsLogo />}
              button={
                <DownloadButton
                  visibilitySensorReveal={true}
                  // url={`http://prokarpaty.net/ard_download/${downloadData.windows.fileName}`}
                  url={downloadData.windows.url}
                  fileName={downloadData.windows.fileName}
                  fileSize={downloadData.windows.fileSize}
                  color="blue"
                />
              }
            />
          </div>
        </div>

        <div className={styles.downloadBtnWrapper}>
          <div className={styles.paragraphWithHeaderWrapper}>
            <ParagraphWithHeader
              noPadding={true}
              visibilitySensorReveal={true}
              background={true}
              noUnderline={true}
              centerHeader={true}
              // headerWithIconDirection="horizontal"
              nonBreakingHeader={true}
              headerText={`Ardi ${downloadData.mac.version} for MacOS`}
              paragraphText={`${downloadData.mac.macOS}`}
              icon={<img src="/images/apple-logo.png" alt="appleIcon"></img>}
              iconBgColor1={"darkgrey"}
              iconBgColor2={"darkslategrey"}
              button={
                <DownloadButton
                  visibilitySensorReveal={true}
                  // url={`http://prokarpaty.net/ard_download/${downloadData.mac.fileName}`}
                  url={downloadData.mac.url}
                  fileName={downloadData.mac.fileName}
                  fileSize={downloadData.mac.fileSize}
                />
              }
            />
          </div>
        </div>
      </div>

      <ParagraphWithHeader
        visibilitySensorReveal={true}
        background={true}
        headerWithIconDirection="horizontal"
        extraLarge={true}
        headerText={`Changelog`}
        paragraphText={changelog}
        paragraphAlignLeft={true}
        // icon={<img src="/images/changelog.png" alt="changelog"></img>}
        icon={"/images/changelog.png"}
        rotateIcon={true}
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
