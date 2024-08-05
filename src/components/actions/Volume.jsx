import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../App.module.css";

import { faVolumeHigh, faVolumeLow, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

const Volume = ({ audioRef, volumes, setVolume, mute, setMute }) => {
  return (
    <div className={style.volumeSelector}>
      {audioRef.current.volume != 0 ? (
        <FontAwesomeIcon
          icon={audioRef.current.volume > 0.5 ? faVolumeHigh : faVolumeLow}
          onClick={() => {
            setMute(!mute);
            if (mute) {
              audioRef.current.volume = 1;
              setVolume(1);
            } else {
              audioRef.current.volume = 0;
              setVolume(0);
            }
          }}
          className={style.icon}
        />
      ) : (
        <FontAwesomeIcon
          icon={faVolumeXmark}
          className={style.icon}
          onClick={() => {
            setMute(!mute);
            if (mute) {
              audioRef.current.volume = 1;
              setVolume(1);
            } else {
              audioRef.current.volume = 0;
              setVolume(0);
            }
          }}
        />
      )}
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volumes}
        onChange={(e) => {
          setVolume(parseFloat(e.target.value)),
            (audioRef.current.volume = e.target.value);
        }}
      />
    </div>
  );
};

export default Volume;
