import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../App.module.css";

const Repeat = ({ loop, setLoop, setShuffle }) => {
  return (
    <FontAwesomeIcon
      icon={faRepeat}
      className={style.icon}
      style={loop && { color: "blue" }}
      onClick={() => {
        setLoop(!loop);
        setShuffle(false);
      }}
    />
  );
};

export default Repeat;
