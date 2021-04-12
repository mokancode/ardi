// import styles from "../styles/Home.module.css";
import ParagraphWithHeader from "../components/ParagraphWithHeader/ParagraphWithHeader";
import OutlinerIcon from "../icons/OutlinerIcon";
import ToDoManagerIcon from "../icons/ToDoManagerIcon";
import NotesIcon from "../icons/NotesIcon";
import CameraIcon from "../icons/CameraIcon";
import SyncIcon from "../icons/SyncIcon";
import DiagramIcon from "../icons/DiagramIcon";
import Link from "next/link";

import { useContext } from "react";
import StylesContext from "../store/styles-context";

export default function Home(props) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "Home"
  ).styles;

  return (
    <div className={styles.homePage}>
      <p className="textAlignCenter">
        Ardi - The Organizer. An Gmail client and Notes manager. Personal
        information manager and Outliner for Notes, Emails, Tasks and more.
      </p>

      <ParagraphWithHeader
        centerHeader={true}
        headerText="Ardi - GMail client and organizer for notes, tasks, contacts, emails. Ardi can manage notes, emails, contacts, tasks and images."
        paragraphText="Ardi is Gmail companion with organizer features for notes and topics. 
        It supports Getting Things Done workflow, has built-in project management with Gantt, Critical Path, and 
        others plan-oriented views. The basic data management is outline based but supports also graphs and tables. 
        Ardi manages data by grouping emails, notes and topics using labels and folders. The program can work offline with local 
        storage and synchronize changes with GDrive and GContacts when connection becomes available. It maintains local email cache
         so work with downloaded messages also possible offline. Ardi is native Desktop application that is optimized to work efficiently on various 
         platforms - Windows, OSX, Ubuntu."
      />

      <div className={styles.threeDivSplit}>
        <ParagraphWithHeader
          headerText="Outliner"
          paragraphText="Brings structure into set of data, allowing hierarhichal organization and natural selection. Everything in Ardi is topic-related. It could be topic by itself, note, sentence, image or other item."
          icon={<OutlinerIcon />}
        />
        <ParagraphWithHeader
          headerText="ToDo manager"
          paragraphText="Items can be categorized and prioritised according to some rule. ToDo properties controlled by single click on right positioned column in Outline or on rectangular structures in Graph."
          icon={<ToDoManagerIcon />}
        />
        <ParagraphWithHeader
          headerText="Notes"
          paragraphText="Notes can contain formatted text as seen in the browser. Also it is easy to maintain several notes in one bundle, secondary notes becomes comments. Notes can be further extended and include images and albums."
          icon={<NotesIcon />}
        />
      </div>

      <div className={styles.threeDivSplit}>
        <ParagraphWithHeader
          headerText="Blackboards"
          paragraphText="Blackboard is a 2D space divided in shaded columns. It works just like real life blackboard were you can write note, small diagram or big category of objects, pin down email and layout workflow. Blackboards are designed to bring notes and topics in context - connect them with arrows, arrange into columns and graphs."
          icon={<CameraIcon />}
        />

        <ParagraphWithHeader
          headerText="Synchronization"
          paragraphText="Ardi was designed to run offline and don't need internet connection to maintain data. Some times it is convenient and safe for personal information. But it could be easily configured to share topics and synchronize all changes to the cloud storage - Dropbox."
          icon={<SyncIcon />}
        />
        <ParagraphWithHeader
          headerText={"Diagrams & Graphs"}
          paragraphText="Any outline can be presented as graph in the program and there are several ways to generate graph, depending on number of items and their relation to each other. Graph is intuitive and convenient way to display different connections between topics."
          icon={<DiagramIcon />}
        />
      </div>

      <ParagraphWithHeader
        headerText={
          "Outliner with project-management & GTD time-management methods."
        }
        paragraphText={
          "Ardi blends best methods popular in data management software, techniques described by David Allen and known as Getting Things Done (GTD) and classic outline sofware.\n" +
          "Program gives the user leverage to work with day-to-day data processing routines and managing complex depth projects with scalable toolset that allows to look at the big picture or focus on details if needed.\n" +
          "Ardi had originated from ideas of InfoSelect and EccoPro organizers which were classical outliners and also partially from Lotus Notes, which has well designed user interface with rich set of features. Over the time its tasks management functionality transformed into project-management and later GTD flavor was added. The process of development continues as new and proven methods are implemented but simple and intuitive ways to manage data are still maintained and remain highest priority for the developers."
        }
      />

      <ParagraphWithHeader
        headerText="System requirements"
        paragraphText="Program is based on cross platform code and was designed to run natively on various systems, including OSX, Windows, Linux(X11), IOS. The main target platforms currently are limited to MacOS and Windows 10, available from download page. Ocasinally we run autotest procedured on Ubuntu machines and IOS but these builds are considered for internal use only."
      />

      <div className={styles.links}>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
      </div>
    </div>
  );
}