import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  isActive: false,
  activeSong: null,
  songs: JSON.parse(localStorage.getItem("songs")) || [],
  currentIndex: null,
};

export const musicPlayer = createSlice({
  name: "musicPlayer",
  initialState,
  reducers: {
    playPause: (state, action) => {
      state.isPlaying = action.payload.isPlaying;
      state.isActive = true;
      state.activeSong = action.payload.song;
      state.currentIndex = action.payload.song.itemIndex;
    },
    initialSongs: (state, action) => {
      state.songs = [];
      action.payload.forEach((item, index) => {
        state.songs.push({ ...item, itemIndex: index });
      });
      localStorage.setItem("songs", JSON.stringify(state.songs));
    },
    nextSong: (state, action) => {
      if (state.songs[action.payload]) {
        state.activeSong = state.songs[action.payload];
      } else {
        state.activeSong = state.songs[0];
      }
      state.currentIndex = state.activeSong.itemIndex;
      state.isPlaying = true;
    },
    prevSong: (state, action) => {
      if (state.songs[action.payload]) {
        state.activeSong = state.songs[action.payload];
      } else {
        state.activeSong = state.songs[state.songs.length - 1];
      }
      state.currentIndex = state.activeSong.itemIndex;
      state.isPlaying = true;
    },
    shuffle: (state, action) => {
      state.activeSong =
        state.songs[Math.floor(Math.random() * state.songs.length)];
      state.currentIndex = state.activeSong?.itemIndex;
      state.isPlaying = true;
    },
  },
});

export const { playPause, initialSongs, prevSong, nextSong, shuffle } =
  musicPlayer.actions;

export default musicPlayer.reducer;
