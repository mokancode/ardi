import { useContext, useState } from "react";
import StylesContext from "../../store/styles-context";

export default function VideoContainer({ video, index }) {
  const stylesContext = useContext(StylesContext);
  const styles = stylesContext.styles.find((styleSheet) => styleSheet.name === "VideoContainer").styles;
  const [hideVeil, setHideVeil] = useState(false);

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
      {video.iframe}
      <div className={[styles.titleScreen, hideVeil && styles.hide].join(" ")}>
        <div className={styles.veil}>
          <h4>{video.title}</h4>
        </div>
      </div>
    </li>
  );
}
