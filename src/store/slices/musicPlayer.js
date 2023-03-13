import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  isActive: false,
  activeSong: null,
};

export const musicPlayer = createSlice({
  name: "musicPlayer",
  initialState,
  reducers: {
    playPause: (state, action) => {
      state.isPlaying = action.payload.isPlaying;
      state.isActive = true;
      state.activeSong = action.payload.song;
    },
  },
});

export const { playPause } = musicPlayer.actions;

export default musicPlayer.reducer;
