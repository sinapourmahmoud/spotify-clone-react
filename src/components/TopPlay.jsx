import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { RelatedSongs } from "./index";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { useEffect, useRef } from "react";

const TopPlay = () => {
  let divRef = useRef(null);
  let { songs, isPlaying, activeSong } = useSelector(
    (state) => state.musicPlayer
  );
  let dispatch = useDispatch();
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col pt-10 xl:pt-0"
    >
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between">
          <p className="text-white font-bold text-xl">Top Charts</p>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>
        <div className="flex flex-col gap-1 w-full ">
          {songs.slice(0, 5).map((track, index) => (
            <RelatedSongs
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
