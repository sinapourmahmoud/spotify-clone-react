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

// Action creators are generated for each case reducer function
export const {} = musicPlayer.actions;

export default musicPlayer.reducer;
