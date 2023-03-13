import PlayPause from "./PlayPause";
const SongCard = ({ track }) => {
  let isPlaying = true;
  let isActive = true;
  return (
    <div className="group flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative h-56 rounded-lg">
        <img
          src={track?.images?.coverart}
          alt="cardCover"
          className="w-full h-full rounded-lg"
        />
        <div
          className={`absolute w-full h-full tranisation-all duration-300 top-0 left-0 right-0 bottom-0 rounded-lg flex items-center justify-center  ${
            isActive ? "bg-black/50" : "group-hover:bg-black/50 "
          }`}
        >
          {isActive && <PlayPause isPlaying={isPlaying} />}
        </div>
      </div>
    </div>
  );
};

export default SongCard;
