// import styles from "../styles/PrivacyPolicy.module.css";
import Link from "next/link";

import { useContext, useEffect, useState } from "react";
import StylesContext from "../store/styles-context";
import {
  Element,
  animateScroll as scroll,
  scroller,
  Events,
} from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

import { v4 as uuidv4 } from "uuid";

export default function PrivacyPolicyPage() {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find(
    (styleSheet) => styleSheet.name === "PrivacyPolicyPage"
  ).styles;

  useEffect(() => {
    scroll.scrollToTop({
      duration: 1500,
      delay: 300,
      smooth: "easeInOutQuad",
      containerId: "mainDiv",
      offset: 50, // Scrolls to element + 50 pixels down the page
    });
  }, []);

  const [uniqueIDs, setUniqueIDs] = useState([
    uuidv4(),
    uuidv4(),
    uuidv4(),
    uuidv4(),
    uuidv4(),
    uuidv4(),
    uuidv4(),
  ]);

  return (
    <div className={styles.pageWrapper}>
      <h3 className={"textAlignCenter"}>Privacy Policy</h3>

      <p>Effective date: September 26, 2018</p>
      <p>
        Osoft4Ardi ("us", "we", or "our") operates the website and the Ardi
        desktop applications (the "Service").
      </p>
      <p>
        This page informs you of our policies regarding the collection, use, and
        disclosure of personal data when you use our Service and the choices you
        have associated with that data.
      </p>
      <p>
        We use your data to provide and improve the Service. By using the
        Service, you agree to the collection and use of information in
        accordance with this policy. Unless otherwise defined in this Privacy
        Policy, terms used in this Privacy Policy have the same meanings as in
        our Terms and Conditions.
      </p>

      <h3 className={"textAlignCenter"}>Limited Use of Google API</h3>
      <p>
        Ardi's use of information received from Google APIs will always adhere
        to{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
          target="_blank"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements. Use of restricted{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
          target="_blank"
        >
          Google API scopes
        </a>{" "}
        is limited to
      </p>

      <ul>
        <li key={uniqueIDs[0]}>
          Gmail (read email messages and modify 'unread', 'archived' labels)
        </li>
        <li key={uniqueIDs[1]}>
          Drive (store configuration data in app space)
        </li>
      </ul>

      <h3 className={"textAlignCenter"}>Information Collection And Use</h3>
      <p>
        We collect several different types of information for various purposes
        to provide and improve our Service to you.
      </p>

      <h3 className={"textAlignCenter"}>Usage Data</h3>
      <p>
        Personal information collected by Service is stored on local computer.
        The data can be synchronized per user request with Gmail and GDrive
        cloud services. The shared data will be available to access for user
        only unless specifically selected to be shared to others.
      </p>

      <h3 className={"textAlignCenter"}>{"Tracking & Cookies Data"}</h3>
      <p>
        We don't use cookies or any other tracking technologies to track the
        activity on our Service.
      </p>

      <h3 className={"textAlignCenter"}>Disclosure of Data</h3>
      <h4 className={"textAlignCenter"}>Legal Requirements</h4>
      <p>
        Ardi may disclose your Personal Data in the good faith belief that such
        action is necessary to:
      </p>
      <ul>
        <li key={uniqueIDs[2]}>To comply with a legal obligation</li>
        <li key={uniqueIDs[3]}>
          To protect and defend the rights or property of Ardi
        </li>
        <li key={uniqueIDs[4]}>
          To prevent or investigate possible wrongdoing in connection with the
          Service
        </li>
        <li key={uniqueIDs[5]}>
          To protect the personal safety of users of the Service or the public
        </li>
        <li key={uniqueIDs[6]}>To protect against legal liability</li>
      </ul>

      <h4 className={"textAlignCenter"}>Contact Us</h4>
      <p>
        If you have any questions about this Privacy Policy, please{" "}
        <Link href="/support">contact us</Link>.
      </p>
    </div>
  );
}
