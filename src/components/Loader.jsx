import style from "../App.module.css";

const Loader = ({audioRef,seekTime}) => {

    function formatTime(durationInSeconds) {
        const minutes = Math.floor(durationInSeconds / 60)
          .toString()
          .padStart(2, "0");
        const seconds = Math.floor(durationInSeconds % 60)
          .toString()
          .padStart(2, "0");
        return `${minutes}:${seconds}`;
      }
    



  return (
    <div className={style.loaderContainer}>
      <input
        type="range"
        className={style.loader}
        min="0"
        max={audioRef.current.duration || 0}
        value={seekTime}
        onChange={(e) => (audioRef.current.currentTime = e.target.value)}
      />
      <div className={style.times}>
        <p>{formatTime(audioRef.current.currentTime)}</p>
        <p>
          {audioRef.current.duration
            ? formatTime(audioRef.current.duration)
            : "00:00"}
        </p>
      </div>
    </div>
  );
};

export default Loader;
