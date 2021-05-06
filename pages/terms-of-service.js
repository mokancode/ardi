import Head from "next/head";

import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import StylesContext from "../store/styles-context";

export default function TermsOfService() {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "TermsOfServicePage").styles;
  
  const [uniqueIDs, setUniqueIDs] = useState([uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()]);

  return (
    <div className={"pageWrapper bg"} style={{ backgroundColor: "whitesmoke", padding: "40px" }}>
      <Head>
        <title>Ardi - Terms of Service</title>
        <meta name="description" content="Terms of service"></meta>
      </Head>

      <h1 className="textAlignCenter">Ardi - The Organizer (Ardi)</h1>
      <p className="textAlignCenter" style={{ marginTop: "20px" }}>
        License for use and distribution
      </p>
      <p>The Ardi is shareware. This means:</p>
      <ul className={styles.list}>
        <li key={uniqueIDs[0]}>
          (Copyright status) All copyrights to Ardi are exclusively owned by Open Soft inc (WWW:{" "}
          <a target="_blank" href="https://www.prokarpaty.net">
            https://www.prokarpaty.net
          </a>
          , E-Mail: osoft4ardi@gmail.com).
        </li>
        <li key={uniqueIDs[1]}>
          (Distribution status) The Ardi may be freely distributed, provided the distribution package should not be modified. No
          person or company may charge a fee for the distribution of Ariadne Organizer without written permission from the
          copyright holder.
        </li>
        <li key={uniqueIDs[2]}>
          Ardi IS DISTRIBUTED "AS IS". NO WARRANTY OF ANY KIND IS EXPRESSED OR IMPLIED. YOU USE AT YOUR OWN RISK. THE AUTHOR WILL
          NOT BE LIABLE FOR DATA LOSS, DAMAGES, LOSS OF PROFITS OR ANY OTHER KIND OF LOSS WHILE USING OR MISUSING THIS SOFTWARE.
        </li>
        <li key={uniqueIDs[3]}>
          You may not use, copy, emulate, clone, rent, lease, sell, modify, decompile, disassemble, otherwise reverse engineer, or
          transfer the licensed program, or any subset of the licensed program, except as provided for in this agreement. Any such
          unauthorized use shall result in immediate and automatic termination of this license and may result in criminal and/or
          civil prosecution.
        </li>
        <li key={uniqueIDs[4]}>Installing and using Ardi signifies acceptance of these terms and conditions of the license.</li>
        <li key={uniqueIDs[5]}>
          If you do not agree with the terms of this license you must remove Ardi files from your storage devices and cease to use
          the product.
        </li>
      </ul>

      <p>Thank you for using Ardi.</p>
      <p>
        Open Soft Inc{" "}
        <a target="_blank" href="https://www.prokarpaty.net">
          (https://www.prokarpaty.net)
        </a>
      </p>
    </div>
  );
}
