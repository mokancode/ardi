import Head from "next/head";

// import styles from "../styles/Home.module.css";
import ParagraphWithHeader from "../components/ParagraphWithHeader/ParagraphWithHeader";
import OutlinerIcon from "../icons/OutlinerIcon";
import ToDoManagerIcon from "../icons/ToDoManagerIcon";
import NotesIcon from "../icons/NotesIcon";
import SyncIcon from "../icons/SyncIcon";
import Link from "next/link";

import { Fragment, useContext, useEffect, useRef, useState } from "react";
import StylesContext from "../store/styles-context";
import ParallaxHexagon from "../components/ParallaxHexagon/ParallaxHexagon";
import LinkButton from "../components/LinkButton/LinkButton";
import SwiperContainer from "../components/SwiperContainer/SwiperContainer";

import { v4 as uuidv4 } from "uuid";
import isEmpty from "../utils/validation/is-empty";
import PrivacyPolicyIcon from "../icons/PrivacyPolicyIcon/PrivacyPolicyIcon";
import TermsAndConditionsIcon from "../icons/TermsAndConditionsIcon/TermsAndConditionsIcon";
import BlackboardIcon from "../icons/BlackboardIcon/BlackboardIcon";
import DiagramIcon from "../icons/DiagramIcon/DiagramIcon";
import IsometricProgrammerContainer from "../components/SVGs/IsometricProgrammer/IsometricProgrammerContainer";

export default function Home(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "Home")
    .styles;

  const [IDs, setIDs] = useState([]);
  const [mobileMode, setMobileMode] = useState(false);
  const mobileModeRef = useRef(false);

  function updateMobileMode(isMobileMode) {
    setMobileMode(isMobileMode);
    mobileModeRef.current = isMobileMode;
  }

  useEffect(() => {
    // Set IDs for ParagraphWithHeader lists plus other individual ones
    // firstThreeParagraphs + secondThreeParagraphs + 4 individual = 2 lists of 3 + 4 = 10 IDs total

    let tempIDs = [];
    for (var i = 0; i < 10; i++) tempIDs.push(uuidv4());
    setIDs(tempIDs);

    if (window.innerWidth <= 800) {
      updateMobileMode(true);
    }

    function updateMobileModeHandler() {
      if (window.innerWidth <= 800 && !mobileModeRef.current) {
        // console.log("mobile mode", mobileModeRef.current);
        updateMobileMode(true);
      } else if (window.innerWidth > 800 && mobileModeRef.current) {
        // console.log("mobile mode", mobileModeRef.current);
        updateMobileMode(false);
      }
    }

    window.addEventListener("resize", updateMobileModeHandler);

    return function cleanupListener() {
      window.removeEventListener("resize", updateMobileModeHandler);
    };
  }, []);

  if (isEmpty(IDs)) return <h1>Loading</h1>;

  const firstThreeParagraphs = [
    <ParagraphWithHeader
      // first={true}
      // visibilitySensorReveal={true}
      centerHeader={true}
      background={true}
      noUnderline={true}
      headerText="Outliner"
      paragraphText="Brings structure into set of data, allowing hierarhichal organization and natural selection. Everything in Ardi is topic-related. It could be topic by itself, note, sentence, image or other item."
      iconBgColor1={"rgb(39, 115, 206)"}
      iconBgColor2={"rgb(18, 63, 155)"}
      icon={<OutlinerIcon />}
      key={IDs[0]}
    />,
    <ParagraphWithHeader
      // visibilitySensorReveal={true}
      centerHeader={true}
      background={true}
      noUnderline={true}
      headerText="ToDo manager"
      paragraphText="Items can be categorized and prioritised according to some rule. ToDo properties controlled by single click on right positioned column in Outline or on rectangular structures in Graph."
      iconBgColor1={"rgb(51, 209, 230)"}
      iconBgColor2={"rgb(33, 168, 203)"}
      icon={<ToDoManagerIcon />}
      index={1}
      key={IDs[1]}
    />,
    <ParagraphWithHeader
      // visibilitySensorReveal={true}
      centerHeader={true}
      background={true}
      noUnderline={true}
      headerText="Notes"
      paragraphText="Notes can contain formatted text as seen in the browser. Also it is easy to maintain several notes in one bundle, secondary notes becomes comments. Notes can be further extended and include images and albums."
      iconBgColor1={"rgb(245, 141, 58)"}
      iconBgColor2={"rgb(230, 92, 21)"}
      icon={<NotesIcon />}
      key={IDs[2]}
    />,
  ];

  const secondThreeParagraphs = [
    <ParagraphWithHeader
      // first={true}
      centerHeader={true}
      background={true}
      noUnderline={true}
      headerText="Blackboards"
      paragraphText="Blackboard is a 2D space divided in shaded columns. It works just like real life blackboard were you can write note, small diagram or big category of objects, pin down email and layout workflow. Blackboards are designed to bring notes and topics in context - connect them with arrows, arrange into columns and graphs."
      iconBgColor1={"rgb(117, 221, 139)"}
      iconBgColor2={"rgb(23, 172, 97)"}
      icon={<BlackboardIcon />}
      key={IDs[3]}
    />,
    <ParagraphWithHeader
      centerHeader={true}
      background={true}
      noUnderline={true}
      headerText="Synchronization"
      paragraphText="Ardi was designed to run offline and don't need internet connection to maintain data. Some times it is convenient and safe for personal information. But it could be easily configured to share topics and synchronize all changes to the cloud storage - Gdrive."
      iconBgColor1={"rgb(117, 166, 221)"}
      iconBgColor2={"rgb(36, 129, 184)"}
      icon={<SyncIcon />}
      index={1}
      key={IDs[4]}
    />,
    <ParagraphWithHeader
      centerHeader={true}
      background={true}
      noUnderline={true}
      headerText={"Diagrams & Graphs"}
      paragraphText="Any outline can be presented as graph in the program and there are several ways to generate graph, depending on number of items and their relation to each other. Graph is intuitive and convenient way to display different connections between topics."
      iconBgColor1={"rgb(187, 185, 255)"}
      iconBgColor2={"rgb(159, 124, 255)"}
      icon={<DiagramIcon />}
      key={IDs[5]}
    />,
  ];

  return (
    <div className={["pageWrapper", styles.homePage].join(" ")}>
      <Head>
        <title>Ardi - The Organizer</title>
        <meta
          name="description"
          content="Ardi - The Organizer. A Gmail Client and Notes Manager"
        ></meta>
      </Head>

      <ParagraphWithHeader
        forceNoBackground={true}
        noUnderline={true}
        extraLarge={true}
        color="white"
        headerText="Ardi - The Organizer. A Gmail Client and Notes Manager."
        paragraphText="Manage notes, emails, contacts, tasks and images."
        visibilitySensorReveal={true}
      />

      {mobileMode ? (
        <Fragment>
          <SwiperContainer visibilitySensorReveal={true}>
            {firstThreeParagraphs}
          </SwiperContainer>
          <SwiperContainer visibilitySensorReveal={true}>
            {secondThreeParagraphs}
          </SwiperContainer>
        </Fragment>
      ) : !isEmpty(IDs) ? (
        <div className={styles.paragraphsWrapper}>
          {firstThreeParagraphs}
          {secondThreeParagraphs}
        </div>
      ) : null}

      <ParagraphWithHeader
        first={true}
        centerHeader={true}
        headerText="Ardi - GMail client and organizer for notes, tasks, contacts, emails. Ardi can manage notes, emails, contacts, tasks and images."
        paragraphText="Ardi is a Gmail companion with organizer features for notes and topics. 
        It supports Getting Things Done workflow, has built-in project management with Gantt, Critical Path, and 
        others plan-oriented views. The basic data management is outline based but supports also graphs and tables. 
        Ardi manages data by grouping emails, notes and topics using labels and folders. The program can work offline with local 
        storage and synchronize changes with GDrive and GContacts when connection becomes available. It maintains local email cache
         so work with downloaded messages also possible offline. Ardi is native Desktop application that is optimized to work efficiently on various 
         platforms - Windows, OSX, Ubuntu."
      />

      <ParagraphWithHeader
        headerText={"Outliner with project-management & GTD time-management methods."}
        paragraphText={
          "Ardi blends best methods popular in data management software, techniques described by David Allen and known as Getting Things Done (GTD) and classic outline sofware.\n" +
          "Program gives the user leverage to work with day-to-day data processing routines and managing complex depth projects with scalable toolset that allows to look at the big picture or focus on details if needed.\n" +
          "Ardi had originated from ideas of InfoSelect and EccoPro organizers which were classical outliners and also partially from Lotus Notes, which has well designed user interface with rich set of features. Over the time its tasks management functionality transformed into project-management and later GTD flavor was added. The process of development continues as new and proven methods are implemented but simple and intuitive ways to manage data are still maintained and remain highest priority for the developers."
        }
      />

      <ParagraphWithHeader
        // first={true}
        headerText="System requirements"
        paragraphText="Program is based on cross platform code and was designed to run natively on various systems, including OSX, Windows, Linux(X11), IOS. The main target platforms currently are limited to MacOS and Windows 10, available from download page. Ocasinally we run autotest procedured on Ubuntu machines and IOS but these builds are considered for internal use only."
      />

      <div className={styles.links}>
        <LinkButton
          url="/privacy-policy"
          text="Privacy Policy"
          icon={<PrivacyPolicyIcon />}
        />
        <LinkButton
          url="/terms-of-service"
          text="Terms of Service"
          icon={<TermsAndConditionsIcon />}
        />
      </div>

      <div className={styles.parallaxHexagonWrapper}>
        <div className={styles.regularFill}>
          <ParallaxHexagon bgFill={true} climb={50} blockTopBoundary={true} />

          <ParallaxHexagon bgFill={true} />
          <ParallaxHexagon bgFill={true} climb={50} blockTopBoundary={true} />
        </div>

        <div className={styles.gradientFill}>
          <ParallaxHexagon
            gradientColor1={"rgba(123, 185, 255, 0.747)"}
            gradientColor2={"rgb(81, 153, 235)"}
            climb={90}
            blockTopBoundary={true}
          />
          <ParallaxHexagon
            gradientColor1={"rgb(35, 175, 220, .3)"}
            gradientColor2={"rgb(46, 211, 255)"}
            climb={200}
            blockTopBoundary={true}
          />
        </div>
      </div>

      {/* <button
        className={styles.animateBtn}
        onClick={() => {
          setAnimateIsometricProgrammer((prev) => {
            return !prev;
          });
        }}
      >
        {animateIsometricProgrammer ? "turn off" : "turn on"}
      </button> */}
      <div className={styles.isometricProgrammerWrapper}>
        <IsometricProgrammerContainer />
      </div>
    </div>
  );
}
