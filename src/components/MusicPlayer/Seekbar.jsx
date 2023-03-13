import React, { useEffect } from "react";

const Seekbar = ({ min, max, duration, currentTime, setPlayerTime }) => {
  const handleTime = (time) => {
    return `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
  };

  return (
    <div className="flex items-center gap-2  flex-1 w-[60%] xl:w-full">
      <button className="text-white text-sm">{handleTime(currentTime)}</button>
      <input
        type="range"
        step="any"
        min={min}
        value={currentTime}
        onChange={(e) => {
          setPlayerTime(e.target.value);
        }}
        max={max}
        className="w-full h-3 outline-none cursor-pointer flex-1"
      />
      <button className="text-white text-sm">{handleTime(duration)}</button>
    </div>
  );
};

export default Seekbar;
