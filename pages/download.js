import DownloadButton from "../components/DownloadButton/DownloadButton";
import ParagraphWithHeader from "../components/ParagraphWithHeader/ParagraphWithHeader";
// import styles from "../styles/DownloadPage.module.css";

import { useContext } from "react";
import StylesContext from "../store/styles-context";
import axios from "axios";

export default function DownloadPage(props) {
  const { downloadData } = props;
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "DownloadPage"
  ).styles;

  return (
    <div className="pageWrapper">
      <div className={styles.paragraphWithHeaderWrapper}>
        <ParagraphWithHeader
          style={{ marginTop: "40px !important" }}
          headerText={`Ardi ${downloadData.version} for Windows`}
          paragraphText="32 or 64 bit Windows 7, 10"
          icon={"/images/win7-logo.png"}
        />
      </div>
      <DownloadButton url={"https://ardi-test.000webhostapp.com/live.jpg"} fileName={downloadData.fileName}/>

      {/* <div className={styles.paragraphWithHeaderWrapper}>
        <ParagraphWithHeader
          headerText=" Ardi 6.48 beta for MacOS"
          paragraphText="Requires MacOS 10.14 or better"
          icon={"/images/apple-logo.png"}
        />
      </div>
      <DownloadButton url={"ardi-installer/live_v1.jpg"} /> */}
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

  return await axios
    .get("https://ardi-test.000webhostapp.com/text.json")
    .then(function (response) {
      // handle success
      console.log("res", response.data);

      return {
        props: {
          downloadData: response.data,
          revalidate: 60,
          fallback: true,
        },
      };
    })
    .catch(function (error) {
      // handle error
      console.log("err", error);

      return {
        props: {
          hasError: true,
        },
      };
    });

  // const installerDirectory = path.join(
  //   process.cwd(),
  //   "public",
  //   "ardi-installer"
  // );
  // const filenames = await fs.readdir(installerDirectory);
  // let jsonFile, installerFile;
  // const files = filenames.map(async (filename, index) => {
  //   const filePath = path.join(installerDirectory, filename);
  //   if (filename.split(".").pop() === "json") {
  //     let jsonData = await fs.readFile(filePath, "utf8");
  //     jsonFile = await (async function () {
  //       return JSON.parse(jsonData);
  //     })();
  //   } else installerFile = filename;
  // });
  // await Promise.all(files);

  // // console.log("jsonFile", jsonFile);
  // console.log("installerFile", installerFile);
}
