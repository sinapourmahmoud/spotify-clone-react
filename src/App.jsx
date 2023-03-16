import "./App.css";
import { Searchbar, Sidebar, TopPlay } from "./components";
import { useSelector } from "react-redux";

import { Discover, ArtistDetails, SongDetails, Search } from "./pages";
import { Route, Routes } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";
function App() {
  let { isActive } = useSelector((state) => state.musicPlayer);
  return (
    <div className="flex relative h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />
        <div
          className={`px-6 h-screen overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse`}
        >
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>
      {isActive && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
}

export default App;
