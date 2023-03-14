const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dce8ee27a2msh8be6f9a3f34846dp165b42jsnc65f0c4dcce9",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};
export async function getDiscovers() {
  let res = await fetch("https://shazam.p.rapidapi.com/charts/track", options);
  let data = await res.json();
  console.log(data);
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
