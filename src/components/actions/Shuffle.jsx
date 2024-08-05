import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../App.module.css";
const Shuffle = ({ shuffle, setShuffle,setLoop }) => {
  return (
    <FontAwesomeIcon
      icon={faShuffle}
      className={style.icon}
      onClick={() => {
        setShuffle(!shuffle);
        setLoop(false);
      }}
      style={shuffle && { color: "blue" }}
    />
  );
};

export default Shuffle;
