import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  isAsctive: false,
  activeSong: {},
};

export const musicPlayer = createSlice({
  name: "musicPlayer",
  initialState,
  reducers: {},
});

export const {} = musicPlayer.actions;

export default musicPlayer.reducer;
