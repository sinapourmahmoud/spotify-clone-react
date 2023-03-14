import { Link } from "react-router-dom";
const DetailsHeader = ({ title, genre, image, artist }) => (
  <div className="flex flex-col w-full relative bg-gradient-to-l from-transparent to-black p-2">
    <div className="w-full flex items-center gap-5">
      <div className="flex items-center justify-center w-16 h-16 xl:w-48 xl:h-48 rounded-full p-1 bg-gray-400">
        <img
          src={image}
          alt="detail"
          className="w-full h-full rounded-full shadow-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white text-2xl xl:text-4xl font-bold">{title}</p>
        <p className="text-gray-400 text-base">Genre : {genre}</p>
        {artist && (
          <Link
            className="text-gray-400 text-base"
            to={`/artists/${artist.adamid}`}
          >
            Artists
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default DetailsHeader;
