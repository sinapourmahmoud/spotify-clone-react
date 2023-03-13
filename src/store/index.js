import { configureStore } from "@reduxjs/toolkit";
import musicPlayer from "./slices/musicPlayer";
export const store = configureStore({
  reducer: {
    musicPlayer,
  },
});
