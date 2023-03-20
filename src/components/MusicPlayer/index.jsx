import React, { useState } from "react";
import {
  playPause,
  nextSong,
  prevSong,
  shuffle,
} from "../../store/slices/musicPlayer";
import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import VolumeBar from "./VolumeBar";
import { useDispatch, useSelector } from "react-redux";
const MusicPlayer = () => {
  let [duration, setDuration] = useState(0);
  let [currentTime, setCurrentTime] = useState(0);
  let [playerTime, setPlayerTime] = useState(0);
  let [volume, setVolume] = useState(1);

  let dispatch = useDispatch();

  let { isPlaying, isActive, activeSong, currentIndex } = useSelector(
    (state) => state.musicPlayer
  );

  const handlePlayPause = (bollean) => {
    dispatch(playPause({ isPlaying: bollean, song: activeSong }));
  };

  const handleNextSong = () => {
    dispatch(nextSong(currentIndex + 1));
  };

  const handlePrevSong = () => {
    dispatch(prevSong(currentIndex - 1));
  };
  const doShuffle = () => {
    dispatch(shuffle());
  };

  return (
    <div className="flex items-center w-full px-4 py-3 sm:px-12 justify-between">
      <Track
        isActive={isActive}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
      <div className="flex-1 flex flex-col gap-2  xl:items-center items-end">
        <Controls
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
          handleNextSong={handleNextSong}
          handlePrevSong={handlePrevSong}
          resetPlayerTime={() => {
            setPlayerTime(0.5);
          }}
          doShuffle={doShuffle}
        />
        <Seekbar
          min={0}
          max={duration}
          duration={duration}
          currentTime={currentTime}
          setPlayerTime={setPlayerTime}
        />
        <Player
          activeSong={activeSong}
          isPlaying={isPlaying}
          setDuration={setDuration}
          setCurrentTime={setCurrentTime}
          currentTime={currentTime}
          playerTime={playerTime}
          volume={volume}
          currentIndex={currentIndex}
          handleNextSong={handleNextSong}
        />
      </div>

      <VolumeBar volume={volume} setVolume={setVolume} min={0} max={1} />
    </div>
  );
};

export default MusicPlayer;
