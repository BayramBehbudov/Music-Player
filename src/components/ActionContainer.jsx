import Volume from "./actions/Volume";
import style from "../App.module.css";
import Repeat from "./actions/Repeat";
import PlayBackRate from "./actions/PlayBackRate";
import Direction from "./actions/Direction";
import Shuffle from "./actions/Shuffle";

const ActionContainer = ({
  setMute,
  mute,
  setVolume,
  volumes,
  loop,
  setLoop,
  playBackRate,
  setPlayBackRate,
  play,
  setPlay,
  setCurrentIndex,
  audioRef,
  shuffle,
  setShuffle,
}) => {
  return (
    
    <div className={style.actionsContainer}>
      <div className={style.actions}>
        <Volume
          audioRef={audioRef}
          volumes={volumes}
          mute={mute}
          setMute={setMute}
          setVolume={setVolume}
        />
        <PlayBackRate
          setPlayBackRate={setPlayBackRate}
          playBackRate={playBackRate}
        />
      </div>
      <div className={style.actions}>
        <Repeat loop={loop} setLoop={setLoop} setShuffle={setShuffle} />
        <Direction
          setCurrentIndex={setCurrentIndex}
          play={play}
          setPlay={setPlay}
        />
        <Shuffle shuffle={shuffle} setShuffle={setShuffle} setLoop={setLoop}/>
      </div>
    </div>
  );
};

export default ActionContainer;
