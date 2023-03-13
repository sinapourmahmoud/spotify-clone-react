import { useEffect, useState } from "react";
import { getDiscovers } from "../apis";
import { SongCard, Loader } from "./../components";
import { initialSongs } from "./../store/slices/musicPlayer";
import { useDispatch, useSelector } from "react-redux";
const Discover = () => {
  let { songs } = useSelector((state) => state.musicPlayer);
  let dispatch = useDispatch();
  let [traks, setTracks] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getDiscovers().then((res) => {
      setLoading(false);
      dispatch(initialSongs(res.tracks));
      setTracks(songs);
    });
  }, []);
  if (loading) return <Loader />;
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-3">
      {songs.map((track) => (
        <SongCard track={track} key={track.key} />
      ))}
    </div>
  );
};

export default Discover;
