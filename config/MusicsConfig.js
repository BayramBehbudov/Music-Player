const fetchMusicData = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://v1.nocodeapi.com/musicsplayer/spotify/VAfDlWnvkiSoRjPy/search?q=<q>&type=track&perPage=20&page=1`,
      requestOptions
    );
    const result = await response.json();
    return result.tracks.items;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

export default fetchMusicData;
