const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dce8ee27a2msh8be6f9a3f34846dp165b42jsnc65f0c4dcce9",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};
export function getDiscovers() {
  fetch("https://shazam.p.rapidapi.com/charts/track", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
