const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6f6d2e8a70msh858953f4a08f110p1ee163jsn8b7d6d8d9055",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};
export async function getDiscovers() {
  let res = await fetch("https://shazam.p.rapidapi.com/charts/track", options);
  let data = await res.json();
  return data;
}
export async function getSongDetails(id) {
  let res = await fetch(
    `https://shazam.p.rapidapi.com/songs/get-details?key=${id}`,
    options
  );
  let data = await res.json();
  return data;
}
export async function getArtistDetails(id) {
  let res = await fetch(
    `https://shazam.p.rapidapi.com/artists/get-details?id=${id}`,
    options
  );
  let data = await res.json();
  return data;
}
export async function getArtistTopSong(id) {
  let res = await fetch(
    `https://shazam.p.rapidapi.com/artists/get-top-songs?id=${id}`,
    options
  );
  let data = await res.json();
  return data;
}
