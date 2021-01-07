import axios from "axios";

export const getPlaylists = async (playlistId) => {
    console.log(playlistId)
  let playlistData;
  await axios
    .get("https://api.deezer.com/playlist/"+playlistId)
    .then((response) => {
        console.log(response.data)
        playlistData = response.data;
    });
  return playlistData;
};

export default getPlaylists;
