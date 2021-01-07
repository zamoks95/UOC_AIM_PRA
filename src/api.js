import axios from "axios";

export const getPlaylists = async (playlistId) => {
  let playlistData;
  await axios
    .get(`https://api.deezer.com/playlist/${playlistId}`)
    .then((response) => {
      playlistData = response.data;
    });
  return playlistData;
};

export const getTracks = async (search) => {
  let playlistData;
  await axios
    .get(`https://api.deezer.com/search/track?q=${search}`)
    .then((response) => {
      playlistData = response.data;
    });

  return playlistData;
};

export const getAlbums = async (search) => {
  let playlistData;
  await axios
    .get(`https://api.deezer.com/search/album?q=${search}`)
    .then((response) => {
      playlistData = response.data;
    });

  return playlistData;
};

export const getArtists = async (search) => {
  let playlistData;
  await axios
    .get(`https://api.deezer.com/search/artist?q=${search}`)
    .then((response) => {
      playlistData = response.data;
    });

  return playlistData;
};

export default getPlaylists;
