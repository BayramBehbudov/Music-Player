import style from "../../App.module.css"
const PlayBackRate = ({ playBackRate, setPlayBackRate }) => {
  return (
    <div
      className={style.playBackRate}
      onClick={() => {
        setPlayBackRate((prev) => (prev < 4 ? prev + 0.5 : 0.5));
      }}
    >
      {playBackRate}x
    </div>
  );
};

export default PlayBackRate;
