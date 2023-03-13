import React from "react";
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";

const VolumeBar = ({ min, max, volume, setVolume }) => (
  <div className="hidden xl:flex flex-1 justify-end items-center gap-2 cursor-pointer">
    {volume < 0.2 ? (
      <BsFillVolumeMuteFill
        onClick={() => {
          setVolume(max);
        }}
        fontSize={25}
        color="white"
      />
    ) : volume < 0.5 && volume > 0.2 ? (
      <BsVolumeDownFill
        onClick={() => {
          setVolume(max);
        }}
        fontSize={25}
        color="white"
      />
    ) : (
      <BsFillVolumeUpFill
        onClick={() => {
          setVolume(min);
        }}
        fontSize={25}
        color="white"
      />
    )}
    <input
      type="range"
      min={min}
      max={max}
      step="any"
      value={volume}
      onChange={(e) => {
        setVolume(e.target.value);
      }}
      className="w-[24%] h-3 cursor-pointer"
    />
  </div>
);

export default VolumeBar;
