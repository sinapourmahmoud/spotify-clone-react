import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
<<<<<<< HEAD
  isAsctive: false,
  activeSong: {},
=======
  isActive: false,
  activeSong: null,
>>>>>>> discoverpage
};

export const musicPlayer = createSlice({
  name: "musicPlayer",
  initialState,
<<<<<<< HEAD
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = musicPlayer.actions;
=======
  reducers: {
    playPause: (state, action) => {
      state.isPlaying = action.payload.isPlaying;
      state.isActive = true;
      state.activeSong = action.payload.song;
    },
  },
});

export const { playPause } = musicPlayer.actions;
>>>>>>> discoverpage

export default musicPlayer.reducer;
