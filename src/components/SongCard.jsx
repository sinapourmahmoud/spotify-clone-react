import PlayPause from "./PlayPause";
import { useSelector, useDispatch } from "react-redux";
import { playPause } from "./../store/slices/musicPlayer";
import { Link } from "react-router-dom";
const SongCard = ({ track, addingToInitialSongs }) => {
  let { isPlaying, activeSong } = useSelector((state) => state.musicPlayer);
  let dispatch = useDispatch();
  const playPauseHandler = () => {
    console.log(track);
    addingToInitialSongs();
    if (
      !isPlaying ||
      track?.title != activeSong?.title ||
      track?.subtitle != activeSong?.subtitle
    ) {
      dispatch(playPause({ song: track, isPlaying: true }));
    } else {
      dispatch(playPause({ song: track, isPlaying: false }));
    }
  };
  return (
    <div className="group flex flex-col w-[220px] gap-1 p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative h-56 rounded-lg" onClick={playPauseHandler}>
        <img
          src={track?.images?.coverart}
          alt="cardCover"
          className="w-full h-full rounded-lg"
        />
        <div
          className={`absolute w-full h-full tranisation-all duration-300 top-0 left-0 right-0 bottom-0 rounded-lg flex items-center justify-center  ${
            activeSong?.title == track?.title &&
            activeSong?.subtitle == track?.subtitle
              ? "bg-black/50"
              : "group-hover:bg-black/50 "
          }`}
        >
          {activeSong?.title == track?.title &&
            activeSong?.subtitle == track?.subtitle && (
              <PlayPause isPlaying={isPlaying} />
            )}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${track?.key}`}>{track.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            to={
              track?.artists
                ? `/artists/${track?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {track?.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
