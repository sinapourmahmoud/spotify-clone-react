import { useEffect, useState } from "react";
import { getDiscovers } from "../apis";
import { SongCard, Loader } from "./../components";
import { initialSongs } from "./../store/slices/musicPlayer";
import { useDispatch, useSelector } from "react-redux";
import { genres } from "../assets/constants";
const Discover = () => {
  let { songs } = useSelector((state) => state.musicPlayer);
  let dispatch = useDispatch();
  let [traks, setTracks] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getDiscovers().then((res) => {
      console.log(res.tracks);
      setLoading(false);
      dispatch(initialSongs(res.tracks));
      setTracks(songs);
    });
  }, []);
  if (loading) return <Loader />;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3 flex-col xl:flex-row">
        <p className="text-3xl text-white font-bold">Discover</p>
        <select className="p-1 bg-black text-white cursor-pointer rounded-lg">
          {genres.map((item) => (
            <option value={item.value} key={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-center xl:justify-start gap-3">
        {songs.map((track) => (
          <SongCard track={track} key={track.key} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
