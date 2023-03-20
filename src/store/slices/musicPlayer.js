import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  isActive: false,
  activeSong: null,
  songs: JSON.parse(localStorage.getItem("songs")) || [],
  currentIndex: null,
  currentTrack: null,
};
function selecSong(state, x) {
  state.activeSong.song = state.songs[x].hub?.actions[1]?.uri;
  state.activeSong.image = state.songs[x].images?.coverart;
  state.activeSong.title = state.songs[x].title;
  state.activeSong.subtitle = state.songs[x].subtitle;
  state.activeSong.itemIndex = state.songs[x].itemIndex;
}
export const musicPlayer = createSlice({
  name: "musicPlayer",
  initialState,
  reducers: {
    playPause: (state, action) => {
      state.isActive = true;
      state.activeSong = {};
      state.activeSong.song = action.payload.song?.hub?.actions[1]?.uri;
      state.activeSong.image = action.payload.song?.images?.coverart;
      state.activeSong.title = action.payload.song?.title;
      state.activeSong.subtitle = action.payload.song?.subtitle;
      state.activeSong.itemIndex = action.payload.song?.itemIndex;
      state.currentIndex = action.payload.song?.itemIndex;
      state.isPlaying = action.payload.isPlaying;
    },

    initialSongs: (state, action) => {
      state.songs = [];
      action.payload?.map((item, index) => {
        state.songs.push({ ...item, itemIndex: index });
      });
      localStorage.setItem("songs", JSON.stringify(state.songs));
    },
    nextSong: (state, action) => {
      if (state.songs[action.payload]) {
        selecSong(state, action.payload);
      } else {
        selecSong(state, 0);
      }
      state.currentIndex = state.activeSong.itemIndex;
      state.isPlaying = true;
    },
    prevSong: (state, action) => {
      if (state.songs[action.payload]) {
        selecSong(state, action.payload);
      } else {
        selecSong(state, state.songs.length - 1);
      }
      state.currentIndex = state.activeSong.itemIndex;
      state.isPlaying = true;
    },
    shuffle: (state, action) => {
      selecSong(state, Math.floor(Math.random() * state.songs.length));
      state.currentIndex = state.activeSong?.itemIndex;
      state.isPlaying = true;
    },
    addTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
  },
});

export const {
  playPause,
  initialSongs,
  prevSong,
  nextSong,
  shuffle,
  playPauseForRelateds,
  addTrack,
} = musicPlayer.actions;

export default musicPlayer.reducer;
