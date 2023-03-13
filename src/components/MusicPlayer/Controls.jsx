import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";
let itemsCursor = "cursor-pointer";
const Controls = () => (
  <div className="flex items-center gap-4 xl:gap-7">
    <BsArrowRepeat
      color="white"
      fontSize={30}
      className={`${itemsCursor} hidden xl:block`}
    />
    <MdSkipPrevious color="white" fontSize={30} className={itemsCursor} />
    <BsFillPauseFill color="white" fontSize={30} className={itemsCursor} />
    <BsFillPlayFill color="white" fontSize={30} className={itemsCursor} />
    <MdSkipNext color="white" fontSize={30} className={itemsCursor} />
    <BsShuffle
      color="white"
      fontSize={30}
      className={`${itemsCursor} hidden xl:block`}
    />
  </div>
);

export default Controls;
