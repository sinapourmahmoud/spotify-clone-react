import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongDetails } from "./../apis/index";
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
      <div className="flex flex-col gap-2">
        {songDetail?.sections[1].text.map((item, index) => (
          <p className="text-white text-base">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default SongDetails;
