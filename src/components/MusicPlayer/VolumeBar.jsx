import React from "react";
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";

const VolumeBar = () => (
  <div className="hidden xl:flex flex-1 justify-end items-center gap-2">
    <BsFillVolumeMuteFill fontSize={25} color="white" />
    <input type="range" min={0} max={10} step="any" className="w-[24%] h-3" />
  </div>
);

export default VolumeBar;
