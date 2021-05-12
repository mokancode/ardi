import { Fragment, useContext, useEffect, useState } from "react";
import TutorialsPanel from "../components/TutorialsPanel/TutorialsPanel";
import StylesContext from "../store/styles-context";
import tutorialsImport from "../public/tutorials";
import { v4 as uuidv4 } from "uuid";
import isEmpty from "../utils/validation/is-empty";
import VideosContainer from "../components/VideosContainer/VideosContainer";
import { Element, animateScroll as scroll, scroller, Events } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import ScrollDownButton from "../components/ScrollDownButton/ScrollDownButton";
import Head from "next/head";

import Img from "react-optimized-image";
// import MyImage from `./images/doge.jpg`;

import path from "path";

export default function DemoPage({ tutorialsData }) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "DemoPage")
    .styles;

  // const [myImg, setMyImg] = useState("");
  // const myImg = require("./images/tutorials/boards/annotations/select-item.jpg");

  // return <Fragment>HELLO</Fragment>;

  const myPath = "./doge.jpg";

  // return (
  //   <div style={{ width: "400px", height: "400px" }}>
  //     <img style={{ width: "50px", height: "100px" }} src={myPath} alt="test"></img>
  //     <img style={{ width: "50px", height: "100px" }} src={require(myPath + "?webp")} alt="test"></img>;
  //   </div>
  // );

  // return <h1>{"path " + window.location.origin + "/doge.jpg"}</h1>;

  // return <img src={window.location.origin + "/images/doge.jpg"} alt="asd"></img>
  // return <Img src={require(`${process.env.PUBLIC_URL}/images/doge.jpg`)} alt="doge" />;
  // return <img src={require("./doge.jpg")} webp sizes={[400]} />;

  // return (
  //   <picture
  //     onLoad={() => {
  //       console.log("loded");
  //     }}
  //   >
  //     <source srcSet={require(`${myPath}?webp`)} type="image/webp" />
  //     <source srcSet={require(`${myPath}`)} type="image/jpeg" />
  //     <img src={require(`${myPath}`)} />
  //   </picture>
  // );

  // const [mPath, setPath] = useState(String(require("./doge.jpg")));

  // return <Fragment>{!isEmpty(mPath) && <Img src={"" + mPath} webp sizes={[400]} />}</Fragment>;
  // return <Fragment>{!isEmpty(mPath) && <Img src={mPath} webp sizes={[400]} />}</Fragment>;

  // return <h1>Hey</h1>;

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

  function scrollToVideos() {
    scroller.scrollTo("videosContainerWrapper", {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: "mainDiv",
      offset: 40,
    });
  }

  if (isEmpty(tutorials)) return <h1>Loading</h1>;

  return (
    <div className={[styles.page, "pageContainer"].join(" ")}>
      <Head>
        <title>Ardi - Application Demonstration</title>
        <meta
          name="description"
          content="A library of tutorials on how to use Ardi"
        ></meta>
      </Head>

      <div className={styles.tutorialsPanelWrapper}>
        <TutorialsPanel tutorials={tutorials} />
        <ScrollDownButton func={scrollToVideos} />
      </div>

      <Element id="videosContainerWrapper">
        <VideosContainer />
      </Element>
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
