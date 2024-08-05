import {
  faCaretLeft,
  faCaretRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import musics from "../../musics";
import style from "../../App.module.css";

const Direction = ({ setCurrentIndex, play, setPlay }) => {
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % musics.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? musics.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className={style.actionsCenter}>
      <FontAwesomeIcon
        icon={faCaretLeft}
        className={style.icon}
        onClick={handlePrev}
      />
      <FontAwesomeIcon
        icon={play ? faPause : faPlay}
        className={style.icon}
        onClick={() => {
          setPlay(!play);
        }}
      />
      <FontAwesomeIcon
        icon={faCaretRight}
        className={style.icon}
        onClick={handleNext}
      />
    </div>
  );
};

export default Direction;
