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

const AllMusics = await fetchMusicData()

const FormattedMusic = []

AllMusics.map((music) => {
    if (music.name && music.artists[0].name && music.preview_url && music.album.images[0].url && music.name.length <= 25 && music.artists[0].name.length <= 25) {
        FormattedMusic.push({
            name: music.name,
            singer: music.artists[0].name,
            url: music.preview_url,
            cover: music.album.images[0].url,
            isLiked: false,
        })
    }
})


export default FormattedMusic
