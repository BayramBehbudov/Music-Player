import { useEffect, useRef, useState } from "react";
import style from "./app.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faHeart,
  faMagnifyingGlass,
  faPause,
  faPlay,
  faRepeat,
  faShuffle,
  faVolumeHigh,
  faVolumeLow,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import Musics from "../config/musics";

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { name, cover, url, singer, isLiked } = Musics[currentIndex];
    const [seekTime, setSeekTime] = useState(0);
    const [like, setLike] = useState(false);
    const audioRef = useRef(new Audio());
    const [volumes, setVolume] = useState(1);
    const [mute, setMute] = useState(false);
  const [play, setPlay] = useState(false);
  const [loop, setLoop] = useState(false);
  const [playBackRate, setPlayBackRate] = useState(1);


  const handleLikeToggle = () => {
    setLike(!like);
    Musics[currentIndex].isLiked = !like;
  };

  
    useEffect(() => {
      setLike(isLiked);
      audioRef.current.pause();
      audioRef.current = new Audio(url);
      audioRef.current.addEventListener("timeupdate", updateTime);
      audioRef.current.addEventListener("loadedmetadata", () => {
        setSeekTime(0);
      });
      audioRef.current.volume = volumes;
      if (play) {
        audioRef.current.play();
      }
      return () => {
        audioRef.current.pause();
        audioRef.current.removeEventListener("timeupdate", updateTime);
      };
    }, [currentIndex]);

    const updateTime = () => {
      setSeekTime(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
    };

    function formatTime(durationInSeconds) {
        const minutes = Math.floor(durationInSeconds / 60)
          .toString()
          .padStart(2, "0");
        const seconds = Math.floor(durationInSeconds % 60)
          .toString()
          .padStart(2, "0");
        return `${minutes}:${seconds}`;
      }

      useEffect(() => {
        audioRef.current.loop = loop;
        audioRef.current.playbackRate = playBackRate;
        audioRef.current.muted = mute;
        if (audioRef.current.currentTime === audioRef.current.duration) {
          shuffle
            ? setCurrentIndex(Math.floor(Math.random() * Musics.length))
            : setCurrentIndex((prev) => (prev + 1) % Musics.length);
        }
        setSeekTime(audioRef.current.currentTime);
      }, [audioRef.current.currentTime]);
      




      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Musics.length);
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? Musics.length - 1 : prevIndex - 1
        );
      };
    








  const [shuffle, setShuffle] = useState(false);

  


  useEffect(() => {
    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [play]);

  
  audioRef.current.addEventListener("volumechange", function () {
    mute && setMute(false);
  });


  
  return (
    <div className={style.container}>
      <div className={style.musicContainer}>        
        <div className={style.imgContainer}>
          <img src={cover} alt="cover" />
        </div>
        <div className={style.nameContainer}>
          <div onClick={handleLikeToggle}>
            <FontAwesomeIcon
              icon={like ? faHeart : faRegularHeart}
              className={style.icon}
              style={{ color: "red" }}
            />
          </div>

          <div className={style.musicName}>
            <h5>{name}</h5>
            <h6>{singer}</h6>
          </div>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={style.icon} />
        </div>
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










        <div className={style.actionsContainer}>
          <div className={style.actions}>
            <div className={style.volumeSelector}>
              {audioRef.current.volume != 0 ? (
                <FontAwesomeIcon
                  icon={
                    audioRef.current.volume > 0.5 ? faVolumeHigh : faVolumeLow
                  }
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

            <div
              className={style.playBackRate}
              onClick={() => {
                setPlayBackRate((prev) => (prev < 4 ? prev + 0.5 : 0.5));
              }}
            >
              {playBackRate}x
            </div>
          </div>
          <div className={style.actions}>
            <FontAwesomeIcon
              icon={faRepeat}
              className={style.icon}
              style={loop && { color: "blue" }}
              onClick={() => {
                setLoop(!loop);
                setShuffle(false);
              }}
            />
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
            <FontAwesomeIcon
              icon={faShuffle}
              className={style.icon}
              onClick={() => {
                setShuffle(!shuffle);
                setLoop(false);
              }}
              style={shuffle && { color: "blue" }}
            />
          </div>
        </div>



      </div>
    </div>
  );
}

export default App;
