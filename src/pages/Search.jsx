import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ArtistCard, SongCard } from "../components";
import { getSearchItems } from "./../apis";
import { initialSongs } from "../store/slices/musicPlayer";
const Search = () => {
  let [searchInfo, setSearchInfo] = useState({
    tracks: [],
    artists: [],
  });
  let { searchTerm } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    getSearchItems(searchTerm)
      .then((res) => {
        console.log(res);
        let tracksArray = [];
        res.tracks.hits.map((item, index) => {
          tracksArray.push({
            ...item.track,
            itemIndex: index,
          });
        });
        let artistsArray = [];

        res.artists?.hits.map((item) => {
          artistsArray.push({
            ...item.artist,
          });
        });
        console.log(artistsArray);
        setSearchInfo((prev) => {
          return {
            tracks: tracksArray,
            artists: artistsArray,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);
  const addingToInitialSongs = () => {
    dispatch(initialSongs(searchInfo?.tracks));
  };
  return (
    <div className="flex flex-col gap-4">
      <p className="text-3xl text-white font-bold">Tracks</p>

      <div className="flex flex-wrap justify-center xl:justify-start gap-3">
        {searchInfo?.tracks?.map((item) => (
          <SongCard
            track={item}
            key={item.key}
            addingToInitialSongs={addingToInitialSongs}
          />
        ))}
      </div>
      <p className="text-3xl text-white font-bold">Artists</p>

      <div className="flex flex-wrap justify-center xl:justify-start gap-3">
        {searchInfo?.artists?.map((item, index) => (
          <ArtistCard key={index} artist={item} />
        ))}
      </div>
    </div>
  );
};

export default Search;
