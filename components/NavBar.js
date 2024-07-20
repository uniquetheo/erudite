"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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
    <nav className="bg-white w-full h-full px-4 sm:px-16 sticky top-0 drop-shadow-xl z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        <Logo />
        <div className="flex items-center">
          <Menu menuOpen={menuOpen} />
          <button
            className="sm:hidden ml-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        className="w-[100px]"
        src={logo}
        width={1457}
        height={1201}
        alt="Erudite Logo"
        priority
        unoptimized
      />
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
