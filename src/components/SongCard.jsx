import PlayPause from "./PlayPause";
import { useSelector, useDispatch } from "react-redux";
import { playPause } from "./../store/slices/musicPlayer";
const SongCard = ({ track }) => {
  let { isPlaying, isActive, activeSong } = useSelector(
    (state) => state.musicPlayer
  );
  let dispatch = useDispatch();
  const playPauseHandler = () => {
    if (!isPlaying || track?.title != activeSong?.title) {
      dispatch(playPause({ song: track, isPlaying: true }));
    } else {
      dispatch(playPause({ song: track, isPlaying: false }));
    }
  };
  return (
    <div className="group flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative h-56 rounded-lg" onClick={playPauseHandler}>
        <img
          src={track?.images?.coverart}
          alt="cardCover"
          className="w-full h-full rounded-lg"
        />
        <div
          className={`absolute w-full h-full tranisation-all duration-300 top-0 left-0 right-0 bottom-0 rounded-lg flex items-center justify-center  ${
            activeSong?.title == track?.title
              ? "bg-black/50"
              : "group-hover:bg-black/50 "
          }`}
        >
          {activeSong?.title == track?.title && (
            <PlayPause isPlaying={isPlaying} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SongCard;
