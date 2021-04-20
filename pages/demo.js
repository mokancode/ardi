import { useContext } from "react";
import TutorialsPanel from "../components/TutorialsPanel/TutorialsPanel";
import StylesContext from "../store/styles-context";

// const demoCategories = [
//   {
//     name: "Boards",
//     tutorials: [
//       { name: "How to " },
//       { name: "How to " },
//       { name: "How to " },
//       { name: "How to " },
//     ],
//   },
//   { name: "Topics", tutorials: [{ name: "How to " }] },
//   { name: "Emails" },
//   { name: "Sort" },
//   { name: "Contacts", tutorials: [{ name: "How to " }] },
// ];

export default function DemoPage({ tutorialsData }) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "DemoPage"
  ).styles;

  return (
    <div className={styles.page}>
      <TutorialsPanel tutorials={tutorialsData} />
    </div>
  );
}

export async function getStaticProps() {
  console.log("________demo________");
  const path = require("path");
  const fs = require("fs").promises;

  const installerDirectory = path.join(process.cwd(), "public");
  const filenames = await fs.readdir(installerDirectory);
  let jsonData;
  const files = filenames.map(async (filename, index) => {
    const filePath = path.join(installerDirectory, filename);
    // console.log("filename", filename);
    // if (filename.split(".").pop() === "json") {
    if (filename === "tutorials.json") {
      let jsonFile = await fs.readFile(filePath, "utf8");
      jsonData = await (async function () {
        return JSON.parse(jsonFile);
      })();
    }
  });
  await Promise.all(files);

  return {
    props: {
      tutorialsData: jsonData,
    },
    // revalidate: 60, // will not be used in static HTML export
  };
}
