import Link from "next/link";
import React from "react";

const menuItems = [
  { name: "Home", pathname: "/", id: 1 },
  { name: "Rules", pathname: "rules", id: 2 },
  { name: "Sponsors", pathname: "sponsor", id: 3 },
  { name: "Registration", pathname: "registration", id: 4 },
];

const NavBar = () => {
  return (
    <section className="w-full h-[80px] flex items-center justify-between bg-white shadow-2xl px-20 z-20">
      <Logo />
      <Menu />
    </section>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center w-[80px] h-[80px] rounded-[100%] shadow-lg z-30"
    >
      <img src="../LOGOsm.png" alt="" />
    </Link>
  );
};

const Menu = () => {
  return (
    <div className="flex ">
      {menuItems.map((item, id) => (
        <Link
          href={item.pathname}
          key={id}
          className="px-8 cursor-pointer hover:text-blue-800"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
