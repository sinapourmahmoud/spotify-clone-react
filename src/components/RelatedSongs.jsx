import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const RelatedSongs = ({
  track,
  i,
  isPlaying,
  activeSong,
  fromArtistComponent,
  playSong,
  pauseSong,
}) => {
  return (
    <div className="w-full flex flex-row items-center justify-between gap-16 hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
      <div className="flex-1 flex items-center gap-2">
        <p className="text-white">{i + 1}.</p>
        <img
          src={
            fromArtistComponent
              ? track?.attributes?.artwork?.url
                  .replace("{w}", "125")
                  .replace("{h}", "125")
              : track?.images?.coverart
          }
          className="w-12 h-12 rounded-lg"
          alt="top-charts"
        />
        <div className="flex-1 flex flex-col gap-1">
          <Link
            className="text-white text-xl font-bold"
            to={
              fromArtistComponent
                ? `/songs/${track?.id}`
                : `/songs/${track?.key}`
            }
          >
            {fromArtistComponent ? track?.attributes.name : track?.title}
          </Link>

          {!fromArtistComponent && (
            <Link
              className="text-sm text-[#eee]"
              to={
                track?.artists
                  ? `/artists/${track?.artists[0]?.adamid}`
                  : "/top-artists"
              }
            >
              {track?.artists[0].alias}
            </Link>
          )}
        </div>
      </div>
      {!fromArtistComponent &&
        (isPlaying == true && track?.title == activeSong?.title ? (
          <FaPauseCircle fontSize={25} color="white" onClick={pauseSong} />
        ) : (
          <FaPlayCircle fontSize={25} color="white" onClick={playSong} />
        ))}
    </div>
  );
};

export default RelatedSongs;
