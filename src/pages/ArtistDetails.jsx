import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtistDetails, getArtistTopSong } from "./../apis";
import { DetailsHeader, RelatedSongs } from "../components";
import { useDispatch, useSelector } from "react-redux";
const ArtistDetails = () => {
  let { activeSong, isPlaying } = useSelector((state) => state.musicPlayer);
  let dispatch = useDispatch();
  let [artist, setArtist] = useState({});
  let [topSongs, setTopSongs] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    getArtistDetails(id)
      .then((res) => {
        setArtist(res.data[0]);
        console.log(artist);
        return getArtistTopSong(id);
      })
      .then((doc) => {
        setTopSongs(doc.data);
        let relatedList = [];
        doc.data.map((item, index) => {
          relatedList.push({
            ...item,
            itemIndex: index,
          });
        });
        setTopSongs(relatedList);
        console.log(doc.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="flex flex-col gap-3">
      <DetailsHeader
        title={artist?.attributes?.name}
        genre={artist?.attributes?.genreNames[0]}
        image={artist?.attributes?.artwork?.url
          .replace("{w}", "125")
          .replace("{h}", "125")}
      />
      <p className="text-white text-2xl font-bold">Related songs</p>
      <div className="flex flex-col gap-2">
        {topSongs?.map((item, index) => (
          <RelatedSongs
            key={index}
            i={index}
            track={item}
            dispatch={dispatch}
            isPlaying={isPlaying}
            activeSong={activeSong}
            fromArtistComponent={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistDetails;
