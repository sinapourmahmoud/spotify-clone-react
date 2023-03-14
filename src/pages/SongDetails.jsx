import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongDetails } from "./../apis/index";
import { DetailsHeader } from "../components";
const SongDetails = () => {
  let [songDetail, setSongDetail] = useState(null);
  let { songid } = useParams();
  useEffect(() => {
    getSongDetails(songid)
      .then((res) => {
        console.log(res);
        setSongDetail(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [songid]);
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
