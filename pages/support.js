import Head from "next/head";
import ParagraphWithHeader from "../components/ParagraphWithHeader/ParagraphWithHeader";

export default function SupportPage() {
  return (
    <div className="pageWrapper">
      <Head>
        <title>Ardi - Support</title>
        <meta name="description" content="Contact us"></meta>
      </Head>

      <ParagraphWithHeader
        centerHeader={true}
        noUnderline={true}
        extraLarge={true}
        background={true}
        // paragraphAlignLeft={true}
        headerText={`Ariadne Support & Professional services`}
        paragraphText={
          <p className="textAlignCenter">
            OSoft offers high quality expertise in C++ projects development and support, integration
            of C++ with Python, Java, C#, Qt-based cross platform solutions. OSoft is publisher of
            Ardi, open source libraries googleQt,{" "}
            <a target="_blank" href="https://github.com/osoftteam/dropboxQt">
              dropboxQt
            </a>
            .<p>Please contact us by email: osoft4ardi@gmail.com</p>
          </p>
        }
        visibilitySensorReveal={true}
      />
    </div>
  );
}
