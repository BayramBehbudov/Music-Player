import AllMusics from "./MusicsConfig";

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
