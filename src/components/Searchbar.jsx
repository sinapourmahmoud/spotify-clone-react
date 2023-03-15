import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
const Searchbar = () => {
  const [search, setSearch] = useState("");
  let navigate = useNavigate();
  const submitSearch = (e) => {
    e.preventDefault();
    if (search != "" || search != null) {
      navigate(`/search/${search}`);
    } else {
      navigate("/");
    }
  };
  return (
    <form autoComplete="off " className="my-3" onSubmit={submitSearch}>
      <div className="w-full  flex items-center gap-1 h-10 p-2">
        <FiSearch color="white" fontSize={20} />
        <input
          type="search"
          autoComplete="off"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="bg-transparent outline-none border-0 w-full h-full text-gray-400 focus:text-gray-200"
        />
      </div>
    </form>
  );
};

export default Searchbar;
