import { useContext, useEffect, useState } from "react";
import isEmpty from "../../utils/validation/is-empty";
import { v4 as uuidv4 } from "uuid";
import StylesContext from "../../store/styles-context";
import VideoContainer from "./VideoContainer";

export default function VideosContainer() {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "VideosContainer").styles;

  const [IDs, setIDs] = useState([]);

  const videosWidth = "100%";
  const videosHeight = "100%";
  const showVideoControls = 1;

  const videos = [
    {
      iframe: (
        <iframe
          onClick={() => {
            console.log("click");
          }}
          width={videosWidth}
          height={videosHeight}
          src={`https://www.youtube-nocookie.com/embed/44ANYZP5484`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      title: "Working with notes and emails",
    },

    {
      iframe: (
        <iframe
          width={videosWidth}
          height={videosHeight}
          src={`https://www.youtube-nocookie.com/embed/5dF94iq0hAE`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      title: "Ardi shows Google style sign-in branding and Limited Use Requirement in Privacy Policy.",
    },

    {
      iframe: (
        <iframe
          width={videosWidth}
          height={videosHeight}
          src={`https://www.youtube-nocookie.com/embed/tkV_NQRlns0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      title: "Gmail authorization and marking messages read/unread",
    },

    {
      iframe: (
        <iframe
          width={videosWidth}
          height={videosHeight}
          src={`https://www.youtube-nocookie.com/embed/yoCzc_9ca58`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      title: "Ardi synchronization",
    },
  ];

  useEffect(() => {
    let tempIDs = [];
    for (var i = 0; i < videos.length; i++) {
      tempIDs.push(uuidv4());
    }
    setIDs(tempIDs);
  }, []);

  if (isEmpty(IDs)) return <h1>Loading videos...</h1>;

  return (
    <div className={styles.container}>
      <a className={styles.header} href="https://www.youtube.com/channel/UCll5lZq0reYXYz2OeSC-zbw/videos" target="_blank">
        Videos
      </a>
      <ul className={styles.list}>
        {videos.map((video, index) => {
          return <VideoContainer key={IDs[index]} video={video} index={index} />;
        })}
      </ul>
    </div>
  );
}
