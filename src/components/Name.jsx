import React, { useState } from "react";
import style from "../App.module.css";
import musics from "../musics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import Search from "./Search";

const Name = ({ like, setLike, currentIndex,setCurrentIndex }) => {
  const { name, singer } = musics[currentIndex];
  const [searchValue, setSearchValue] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const handleLikeToggle = () => {
    setLike(!like);
    musics[currentIndex].isLiked = !like;
  };

  return (
    <div className={style.nameContainer}>
      {!showInput && (
        <div onClick={handleLikeToggle}>
          <FontAwesomeIcon
            icon={like ? faHeart : faRegularHeart}
            className={style.icon}
            style={{ color: "red" }}
          />
        </div>
      )}

      {!showInput && (
        <div className={style.musicName}>
          <h5>{name}</h5>
          <h6>{singer}</h6>
        </div>
      )}

      {showInput && (
        <input
          placeholder="type music name"
          className={style.input}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      )}

      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={style.icon}
        onClick={() => {
          setShowInput(!showInput), setSearchValue("");
        }}
      />

      {searchValue && (
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          showInput={showInput}
          setShowInput={setShowInput}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </div>
  );
};

export default Name;
