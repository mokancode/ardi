import { createContext, useState } from "react";

// import all css modules
import ParagraphWithHeaderStyles from "../components/ParagraphWithHeader/ParagraphWithHeader.module.css";
import NavbarStyles from "../components/Navbar/Navbar.module.css";
import FooterStyles from "../components/Footer/Footer.module.css";
import DownloadButtonStyles from "../components/DownloadButton/DownloadButton.module.css";
import ParallaxTrapeziusStyles from "../components/ParallaxTrapezius/ParallaxTrapezius.module.css";

import HomeStyles from "../styles/Home.module.css";
import DownloadPageStyles from "../styles/DownloadPage.module.css";
import PrivacyPolicyStyles from "../styles/PrivacyPolicy.module.css";
import DemoStyles from "../styles/Demo.module.css";

import IconContainerStyles from "../icons/IconContainer.module.css";
import DiagramIconStyles from "../icons/DiagramIcon.module.css";
import OutlinerIconStyles from "../icons/OutlinerIcon.module.css";
import SyncIconStyles from "../icons/SyncIcon.module.css";
import NotesIconStyles from "../icons/NotesIcon.module.css";
import CameraIconStyles from "../icons/CameraIcon.module.css";
import ToDoManagerIconStyles from "../icons/ToDoManagerIcon.module.css";

const StylesContext = createContext({
  styles: [],
});

export function StylesContextProvider(props) {
  const [contextStyles, setContextStyles] = useState([
    { name: "ParagraphWithHeader", styles: ParagraphWithHeaderStyles },
    { name: "Navbar", styles: NavbarStyles },
    { name: "Footer", styles: FooterStyles },
    { name: "DownloadButton", styles: DownloadButtonStyles },
    { name: "ParallaxTrapezius", styles: ParallaxTrapeziusStyles },

    { name: "Home", styles: HomeStyles },
    { name: "DownloadPage", styles: DownloadPageStyles },
    { name: "PrivacyPolicyPage", styles: PrivacyPolicyStyles },
    { name: "DemoPage", styles: DemoStyles },

    { name: "IconContainer", styles: IconContainerStyles },
    { name: "DiagramIcon", styles: DiagramIconStyles },
    { name: "OutlinerIcon", styles: OutlinerIconStyles },
    { name: "SyncIcon", styles: SyncIconStyles },
    { name: "NotesIcon", styles: NotesIconStyles },
    { name: "CameraIcon", styles: CameraIconStyles },
    { name: "ToDoManagerIcon", styles: ToDoManagerIconStyles },
  ]);
  const context = {
    styles: contextStyles,
  };

  return (
    <StylesContext.Provider value={context}>
      {props.children}
    </StylesContext.Provider>
  );
}

export default StylesContext;
