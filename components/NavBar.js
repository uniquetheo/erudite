"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const logo = "/../logosm.png";

const menuItems = [
  { name: "Home", pathname: "/", id: 1 },
  { name: "Rules", pathname: "rules", id: 2 },
  { name: "Sponsors", pathname: "sponsor", id: 3 },
  { name: "Registration", pathname: "registration", id: 4 },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // className="bg-white w-full h-[80px] sm:h-full px-4 sm:px-16 sticky top-0 drop-shadow-xl z-10"
    <nav
      className={`w-full  bg-white h-full px-4 sm:px-16 sticky top-0 drop-shadow-xl z-10 ${
        menuOpen ? "rounded-2xl" : ""
      }`}
    >
      {/* max-w-7xl mx-auto flex justify-between items-center */}
      <div
        className={`w-full max-w-7xl flex ${
          menuOpen ? "flex-col" : ""
        } justify-between items-center min-h-14 sm:min-h-20 relative`}
      >
        <Logo className="" />
        <div className={`flex items-center ${menuOpen ? "pt-20 pb-5" : ""}`}>
          <Menu menuOpen={menuOpen} className="flex flex-1" />
          <button
            className={`sm:hidden ml-4 absolute top-4 right-0`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaTimes className="w-6 h-6 text-black" />
            ) : (
              <FaBars className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="w-20 h-20 sm:w-[120px] sm:h-[120px] absolute top-0 left-0 bg-white rounded-full">
        <Image
          src={logo}
          // width={1457}
          // height={1201}
          layout="fill"
          alt="Erudite Logo"
          priority
          unoptimized
        />
      </div>
    </Link>
  );
};

const Menu = ({ menuOpen }) => {
  return (
    <div
      className={`flex-col sm:flex-row sm:flex ${
        menuOpen ? "flex" : "hidden"
      } sm:flex gap-8 items-center`}
    >
      {menuItems.map((item) => (
        <Link
          href={item.pathname}
          key={item.id}
          className="cursor-pointer hover:text-blue-800 text-lg"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
