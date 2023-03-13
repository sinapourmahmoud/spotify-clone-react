import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";
let itemsCursor = "cursor-pointer";
let hoverClass = "hover:text-red-500";
const Controls = ({
  isPlaying,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
  resetPlayerTime,
  doShuffle,
}) => (
  <div className="flex items-center gap-4 xl:gap-7">
    <BsArrowRepeat
      fontSize={30}
      className={`${itemsCursor} hidden text-white xl:block ${hoverClass}`}
      onClick={resetPlayerTime}
    />
    <MdSkipPrevious
      fontSize={30}
      className={`${itemsCursor} ${hoverClass} text-white`}
      onClick={handlePrevSong}
    />

    {isPlaying ? (
      <BsFillPauseFill
        color="white"
        fontSize={30}
        className={`${itemsCursor} ${hoverClass} text-white`}
        onClick={() => handlePlayPause(false)}
      />
    ) : (
      <BsFillPlayFill
        color="white"
        fontSize={30}
        className={`${itemsCursor} ${hoverClass} text-white`}
        onClick={() => handlePlayPause(true)}
      />
    )}

    <MdSkipNext
      color=""
      fontSize={30}
      className={`${itemsCursor} ${hoverClass} text-white`}
      onClick={handleNextSong}
    />
    <BsShuffle
      fontSize={30}
      className={`${itemsCursor} hidden xl:block ${hoverClass} text-white`}
      onClick={doShuffle}
    />
  </div>
);

export default Controls;
