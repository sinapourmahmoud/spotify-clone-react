import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongDetails } from "./../apis/index";
import { DetailsHeader, Loader } from "../components";
const SongDetails = () => {
  let [songDetail, setSongDetail] = useState(null);
  let [loading, setLoading] = useState(false);
  let { songid } = useParams();
  useEffect(() => {
    setLoading(true);
    getSongDetails(songid)
      .then((res) => {
        setLoading(false);
        console.log(res);
        setSongDetail(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [songid]);
  if (loading) return <Loader />;
  return (
    <div className="flex flex-col gap-3">
      <DetailsHeader
        title={songDetail?.title}
        genre={songDetail?.genres.primary}
        artist={songDetail?.artists[0]}
        image={songDetail?.images.coverart}
      />

      <div className="flex flex-col gap-2">
        <p className="text-white text-2xl font-bold my-4">
          {songDetail?.title}
        </p>
        {songDetail?.sections[1].text.map((item, index) => (
          <p className="text-white text-base" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SongDetails;
