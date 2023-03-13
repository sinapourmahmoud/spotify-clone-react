import React, { useState, useEffect } from "react";

import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import VolumeBar from "./VolumeBar";
import { useDispatch, useSelector } from "react-redux";
const MusicPlayer = () => {
  let { isPlaying, isActive, activeSong } = useSelector(
    (state) => state.musicPlayer
  );
  return (
    <div className="flex items-center w-full px-4 py-3 sm:px-12 justify-between">
      <Track
        isActive={isActive}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
      <div className="flex-1 flex flex-col gap-2  xl:items-center items-end">
        <Controls />
        <Seekbar />
      </div>

      <VolumeBar />
    </div>
  );
};

export default MusicPlayer;
