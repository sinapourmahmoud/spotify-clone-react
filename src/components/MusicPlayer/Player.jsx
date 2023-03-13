import { useRef, useEffect } from "react";
const Player = ({
  activeSong,
  isPlaying,
  setDuration,
  setCurrentTime,
  volume,
  playerTime,
  handleNextSong,
}) => {
  let ref = useRef(null);
  const onLoadHandler = () => {
    setDuration(ref.current.duration);
  };

  const changeCurrentTime = () => {
    setCurrentTime(ref.current.currentTime);
  };

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying, activeSong?.title]);

  useEffect(() => {
    ref.current.currentTime = playerTime;
  }, [playerTime]);

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      onLoadedData={onLoadHandler}
      ref={ref}
      onTimeUpdate={changeCurrentTime}
      onEnded={handleNextSong}
    />
  );
};

export default Player;
