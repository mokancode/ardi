import { useContext, useEffect, useState } from "react";
import StylesContext from "../../store/styles-context";
import isEmpty from "../../utils/validation/is-empty";

export default function VideoContainer({ video, videosWidth, videosHeight }) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "VideoContainer")
    .styles;
  const [hideVeil, setHideVeil] = useState(false);
  const [youtubeVideoID, setYoutubeVideoID] = useState(null);

  useEffect(() => {
    const extractedLinkCode = new RegExp("embed/(.+)").exec(video.url);
    if (!isEmpty(extractedLinkCode) && extractedLinkCode[1]) {
      setYoutubeVideoID(extractedLinkCode[1]);
    }
  }, [video]);

  return (
    <li
      className={styles.videoListItem}
      onMouseEnter={() => {
        setHideVeil(true);
      }}
      onMouseLeave={() => {
        setHideVeil(false);
      }}
    >
      <iframe
        style={{ pointerEvents: youtubeVideoID ? "none" : "all" }}
        width={videosWidth}
        height={videosHeight}
        src={video.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {youtubeVideoID && (
        <a href={`https://www.youtube.com/watch?v=${youtubeVideoID}`} target="_blank"></a>
      )}
      <div className={[styles.titleScreen, hideVeil && styles.hide].join(" ")}>
        <div className={styles.veil}>
          <h4>{video.title}</h4>
        </div>
      </div>
    </li>
  );
}
