import React from "react";

const Track = ({ isPlaying, isActive, activeSong }) => {
  return (
    <div className="flex items-center gap-4 flex-1 justify-start ">
      <div
        className={`w-14 h-14 hidden xl:block ${
          isPlaying ? "animate-[spin_3s_linear_infinite]" : ""
        }`}
      >
        <img
          src={activeSong?.images?.coverart}
          alt="track-img"
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="w-[50%]">
        <p className="truncate text-white font-bold text-lg">
          {activeSong?.title ? activeSong?.title : "No active Song"}
        </p>
        <p className="truncate text-gray-300">
          {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
        </p>
      </div>
    </div>
  );
};

export default Track;
