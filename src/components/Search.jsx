import style from "../App.module.css";
import musics from "../musics";
const Search = ({
  searchValue,
  setSearchValue,
  showInput,
  setShowInput,
  setCurrentIndex,
}) => {
  return (
    <div className={style.musicList}>
      {musics
        .filter(
          (music) =>
            music.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            music.singer.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((music) => (
          <div
            className={style.music}
            key={music.name}
            onClick={() => {
              setShowInput(!showInput),
                setSearchValue(""),
                setCurrentIndex(music.id);
            }}
          >
            <h5>{music.name}</h5>
            <h6>{music.singer}</h6>
          </div>
        ))}
    </div>
  );
};

export default Search;
