const myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "get",
  headers: myHeaders,
  redirect: "follow",
};

export default await fetch(
  `https://v1.nocodeapi.com/bayram/spotify/fnLVfKwgeFMFqkuF/search?q=<q>&type=track&perPage=20&page=1`,
  requestOptions
)
  .then((response) => response.json())
  .then((result) => result.tracks.items)
  .catch((error) => console.log("error", error));


