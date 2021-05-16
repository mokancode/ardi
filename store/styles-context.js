import { createContext, useState } from "react";

// import all css modules
import ParagraphWithHeaderStyles from "../components/ParagraphWithHeader/ParagraphWithHeader.module.scss";
import NavbarStyles from "../components/Navbar/Navbar.module.scss";
import FooterStyles from "../components/Footer/Footer.module.scss";
import DownloadButtonStyles from "../components/DownloadButton/DownloadButton.module.scss";
import ParallaxHexagonStyles from "../components/ParallaxHexagon/ParallaxHexagon.module.scss";
import VideosContainerStyles from "../components/VideosContainer/VideosContainer.module.scss";
import VideoContainerStyles from "../components/VideosContainer/VideoContainer.module.scss";
import ScrollDownButtonStyles from "../components/ScrollDownButton/ScrollDownButton.module.scss";
import IsometricProgrammerStyles from "../components/SVGs/IsometricProgrammer/IsometricProgrammer.module.scss";
import GlowOrbStyles from "../components/SVGs/IsometricProgrammer/GlowOrb/GlowOrb.module.scss";
import DownloadArrowDownStyles from "../components/DownloadButton/DownloadArrowDown.module.scss";
import DownloadButtonStripStyles from "../components/DownloadButton/DownloadButtonStrip.module.scss";
import LinkButtonStyles from "../components/LinkButton/LinkButton.module.scss";
import NavbarButtonsContainerStyles from "../components/MobileNavbarClip/NavbarButtonsContainer/NavbarButtonsContainer.module.scss";
import NavbarMenuButtonStyles from "../components/MobileNavbarClip/NavbarButtonsContainer/NavbarMenuButton.module.scss";
import SwiperContainerStyles from "../components/SwiperContainer/SwiperContainer.module.scss";
import TutorialsPanelStyles from "../components/TutorialsPanel/TutorialsPanel.module.css";
import TutorialSelectorStyles from "../components/TutorialsPanel/TutorialSelector/TutorialSelector.module.scss";
import TutorialControllerStyles from "../components/TutorialsPanel/TutorialViewer/TutorialController/TutorialController.module.scss";
import TutorialViewerStyles from "../components/TutorialsPanel/TutorialViewer/TutorialViewer.module.scss";
import TutorialPointerInstructionStyles from "../components/TutorialsPanel/TutorialViewer/TutorialPointerInstruction/TutorialPointerInstruction.module.scss";

import HomeStyles from "../styles/Home.module.scss";
import DownloadPageStyles from "../styles/DownloadPage.module.scss";
import SupportPageStyles from "../styles/SupportPage.module.css";
import PrivacyPolicyStyles from "../styles/PrivacyPolicy.module.scss";
import DemoStyles from "../styles/Demo.module.css";
import TermsOfServicePageStyles from "../styles/TermsOfService.module.scss";

import IconContainerStyles from "../icons/IconContainer.module.scss";
import BlackboardIconStyles from "../icons/BlackboardIcon/BlackboardIcon.module.css";
import OutlinerIconStyles from "../icons/OutlinerIcon.module.scss";
import SyncIconStyles from "../icons/SyncIcon.module.scss";
import NotesIconStyles from "../icons/NotesIcon.module.scss";
import DiagramIconStyles from "../icons/DiagramIcon/DiagramIcon.module.css";
import ToDoManagerIconStyles from "../icons/ToDoManagerIcon.module.scss";
import WindowsLogoStyles from "../icons/WindowsLogo/WindowsLogo.module.scss";

const StylesContext = createContext({
  styles: [],
});

export function StylesContextProvider(props) {
  const [contextStyles, setContextStyles] = useState([
    { name: "ParagraphWithHeader", styles: ParagraphWithHeaderStyles },
    { name: "Navbar", styles: NavbarStyles },
    { name: "Footer", styles: FooterStyles },
    { name: "DownloadButton", styles: DownloadButtonStyles },
    { name: "ParallaxHexagon", styles: ParallaxHexagonStyles },
    { name: "VideosContainer", styles: VideosContainerStyles },
    { name: "VideoContainer", styles: VideoContainerStyles },
    { name: "ScrollDownButton", styles: ScrollDownButtonStyles },
    { name: "IsometricProgrammer", styles: IsometricProgrammerStyles },
    { name: "GlowOrb", styles: GlowOrbStyles },
    { name: "DownloadArrowDown", styles: DownloadArrowDownStyles },
    { name: "DownloadButtonStrip", styles: DownloadButtonStripStyles },
    { name: "LinkButton", styles: LinkButtonStyles },
    { name: "NavbarButtonsContainer", styles: NavbarButtonsContainerStyles },
    { name: "NavbarMenuButton", styles: NavbarMenuButtonStyles },
    { name: "SwiperContainer", styles: SwiperContainerStyles },
    { name: "TutorialsPanel", styles: TutorialsPanelStyles },
    { name: "TutorialSelector", styles: TutorialSelectorStyles },
    { name: "TutorialController", styles: TutorialControllerStyles },
    { name: "TutorialViewer", styles: TutorialViewerStyles },
    { name: "TutorialPointerInstruction", styles: TutorialPointerInstructionStyles },

    { name: "Home", styles: HomeStyles },
    { name: "DownloadPage", styles: DownloadPageStyles },
    { name: "SupportPage", styles: SupportPageStyles },
    { name: "PrivacyPolicyPage", styles: PrivacyPolicyStyles },
    { name: "DemoPage", styles: DemoStyles },
    { name: "TermsOfServicePage", styles: TermsOfServicePageStyles },

    { name: "IconContainer", styles: IconContainerStyles },
    { name: "BlackboardIcon", styles: BlackboardIconStyles },
    { name: "OutlinerIcon", styles: OutlinerIconStyles },
    { name: "SyncIcon", styles: SyncIconStyles },
    { name: "NotesIcon", styles: NotesIconStyles },
    { name: "DiagramIcon", styles: DiagramIconStyles },
    { name: "ToDoManagerIcon", styles: ToDoManagerIconStyles },
    { name: "WindowsLogo", styles: WindowsLogoStyles },
  ]);
  const context = {
    styles: contextStyles,
  };

  return <StylesContext.Provider value={context}>{props.children}</StylesContext.Provider>;
}

export default StylesContext;
