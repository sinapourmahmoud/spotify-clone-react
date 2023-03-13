import { useSelector, useDispatch } from "react-redux";
import { playPause } from "./../store/slices/musicPlayer";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
const TopPLays = ({ track, i, dispatch, isPlaying, activeSong }) => {
  return (
    <div className="w-full flex flex-row items-center gap-16 hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
      <div className="flex-1 flex items-center gap-2">
        <p className="text-white">{i + 1}.</p>
        <img
          src={track?.images?.coverart}
          className="w-12 h-12 rounded-lg"
          alt="top-charts"
        />
        <div className="flex-1 flex flex-col gap-1">
          <Link
            className="text-white text-xl font-bold"
            to={`/songs/${track?.key}`}
          >
            {track?.title}
          </Link>

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
        </div>
      </div>
      {isPlaying == true && track?.title == activeSong?.title ? (
        <FaPauseCircle
          fontSize={25}
          color="white"
          onClick={() => {
            dispatch(playPause({ song: track, isPlaying: false }));
          }}
        />
      ) : (
        <FaPlayCircle
          fontSize={25}
          color="white"
          onClick={() => {
            dispatch(playPause({ song: track, isPlaying: true }));
          }}
        />
      )}
    </div>
  );
};

const TopPlay = () => {
  let { songs, isPlaying, activeSong } = useSelector(
    (state) => state.musicPlayer
  );
  let dispatch = useDispatch();
  return (
    <div className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col mt-10 xl:mt-0">
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between">
          <p className="text-white font-bold text-xl">Top Charts</p>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>
        <div className="flex flex-col gap-1 w-full ">
          {songs.slice(0, 5).map((track, index) => (
            <TopPLays
              key={track.itemIndex}
              isPlaying={isPlaying}
              track={track}
              activeSong={activeSong}
              i={index}
              dispatch={dispatch}
            />
          ))}
        </div>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className="mt-4"
      >
        {songs?.slice(0, 5).map((artist) => (
          <SwiperSlide
            key={artist?.key}
            style={{ width: "25%", height: "auto" }}
            className="shadow-lg rounded-full animate-slideright"
          >
            <Link to={`/artists/${artist?.artists[0].adamid}`}>
              <img
                src={artist?.images?.background}
                alt="Name"
                className="rounded-full w-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopPlay;
