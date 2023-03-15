import { useEffect } from "react";
import { Link } from "react-router-dom";

const ArtistCard = ({ artist }) => {
  useEffect(() => {
    console.log(artist);
  }, []);
  return (
    <Link to={`/artists/${artist?.adamid}`}>
      <div className="w-[100px] h-[100px] rounded-full">
        <img src={artist?.avatar} className="rounded-full w-full h-full" />
      </div>
    </Link>
  );
};

export default ArtistCard;
