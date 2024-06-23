const myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: "get",
  headers: myHeaders,
  redirect: "follow",
};

const AllMusics = async () => {
  try {
    const response = await fetch(
      `https://v1.nocodeapi.com/bayram/spotify/fnLVfKwgeFMFqkuF/search?q=<q>&type=track&perPage=20&page=1`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result.tracks.items;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default AllMusics;
