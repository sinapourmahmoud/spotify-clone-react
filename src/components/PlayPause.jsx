import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying }) => {
  return (
    <>
      {isPlaying ? (
        <FaPauseCircle fontSize={30} color={"white"} />
      ) : (
        <FaPauseCircle fontSize={30} color={"white"} />
      )}
    </>
  );
};

export default PlayPause;
