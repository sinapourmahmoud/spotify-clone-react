import { useEffect, useState } from "react";
import { getDiscovers } from "../apis";
import { SongCard } from "./../components";

const Discover = () => {
  let [traks, setTracks] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getDiscovers().then((res) => {
      setLoading(false);
      setTracks(res.tracks);
    });
  }, []);
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-3">
      {traks.map((track) => (
        <SongCard track={track} key={track.key} />
      ))}
    </div>
  );
};

export default Discover;
