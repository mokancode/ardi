import { useContext, useEffect, useState } from "react";
import TutorialsPanel from "../components/TutorialsPanel/TutorialsPanel";
import StylesContext from "../store/styles-context";
import tutorialsImport from "../public/tutorials";
import { v4 as uuidv4 } from "uuid";
import isEmpty from "../utils/validation/is-empty";
import VideosContainer from "../components/VideosContainer/VideosContainer";

export default function DemoPage({ tutorialsData }) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "DemoPage").styles;

  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    tutorialsImport.forEach((category) => {
      category.id = uuidv4();
      if (category.tutorials) {
        category.tutorials.forEach((tutorial) => {
          tutorial.id = uuidv4();
          if (tutorial.images) {
            tutorial.images.forEach((image) => {
              image.id = uuidv4();
              return image;
            });
          }

          return tutorial;
        });
      }
      return category;
    });
    setTutorials(tutorialsImport);
    // console.log("temp", tutorialsImport[0].tutorials[0].images[0].instruction);
  }, [tutorialsImport]);

  if (isEmpty(tutorials)) return <h1>Loading</h1>;

  return (
    <div className={styles.page}>
      <TutorialsPanel tutorials={tutorials} />

      <VideosContainer />
    </div>
  );
}

// export async function getStaticProps() {
//   console.log("________demo________");
//   // const path = require("path");
//   // const fs = require("fs").promises;

//   // const installerDirectory = path.join(process.cwd(), "public");
//   // const filenames = await fs.readdir(installerDirectory);
//   // let jsonData;
//   // const files = filenames.map(async (filename, index) => {
//   //   const filePath = path.join(installerDirectory, filename);
//   //   // console.log("filename", filename);
//   //   // if (filename.split(".").pop() === "json") {
//   //   if (filename === "tutorials.json") {
//   //     let jsonFile = await fs.readFile(filePath, "utf8");
//   //     jsonData = await (async function () {
//   //       return JSON.parse(jsonFile);
//   //     })();
//   //   }
//   // });
//   // await Promise.all(files);

//   return {
//     props: {
//       // tutorialsData: jsonData,
//     },
//     // revalidate: 60, // will not be used in static HTML export
//   };
// }
