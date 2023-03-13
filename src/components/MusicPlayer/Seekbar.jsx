import React from "react";

const Seekbar = () => {
  return (
    <div className="flex items-center gap-2  flex-1 w-[60%] xl:w-full">
      <button className="text-white text-sm">00:02</button>
      <input
        type="range"
        step="any"
        min={0}
        max={100}
        className="w-full h-3 outline-none cursor-pointer flex-1"
      />
      <button className="text-white text-sm">00:02</button>
    </div>
  );
};

export default Seekbar;
