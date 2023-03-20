import sinaLogo from "./../assets/sinaLogo.png";
import { links } from "./../assets/constants";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Sidebar = () => {
  let [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={sinaLogo} alt="logo" className="w-[50%] mx-auto mb-5" />
        <div className="flex flex-col gap-6">
          {links.map((item, index) => (
            <div
              className="flex items-center justify-start gap-5 group"
              key={index}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) => {
                  return `flex items-center justify-start gap-5 group text-lg font-semibold ${
                    isActive ? "text-cyan-400" : "text-gray-400"
                  }`;
                }}
              >
                <item.icon />

                {item.name}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <img src={sinaLogo} alt="logo" className="w-full h-14 object-contain" />
        <div className="mt-10">
          {links.slice(0, 1).map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <item.icon className="w-6 h-6 mr-2" />
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="absolute md:hidden cursor-pointer block top-6 right-3 z-10">
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default Sidebar;
