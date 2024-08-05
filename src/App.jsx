import { useEffect, useRef, useState } from "react";
import style from "./App.module.css";
import Musics from "./musics";
import Name from "./components/Name";
import Loader from "./components/Loader";
import ActionContainer from "./components/ActionContainer";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [like, setLike] = useState(false);
  const [seekTime, setSeekTime] = useState(0);
  const [volumes, setVolume] = useState(1);
  const { cover, url, isLiked } = Musics[currentIndex];
  const audioRef = useRef(new Audio());
  const [mute, setMute] = useState(false);
  const [play, setPlay] = useState(false);
  const [loop, setLoop] = useState(false);
  const [playBackRate, setPlayBackRate] = useState(1);
  const [shuffle, setShuffle] = useState(false);
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
        <Name
          like={like}
          setLike={setLike}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Loader audioRef={audioRef} seekTime={seekTime} />
        <ActionContainer
          audioRef={audioRef}
          shuffle={shuffle}
          setMute={setMute}
          mute={mute}
          setCurrentIndex={setCurrentIndex}
          setVolume={setVolume}
          volumes={volumes}
          loop={loop}
          setLoop={setLoop}
          playBackRate={playBackRate}
          setPlayBackRate={setPlayBackRate}
          play={play}
          setPlay={setPlay}
          setShuffle={setShuffle}
        />
      </div>
    </div>
  );
}

export default App;
