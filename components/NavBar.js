import Image from "next/image";
import Link from "next/link";
import React from "react";

const logo = "/../logosm.png";

const menuItems = [
  { name: "Home", pathname: "/", id: 1 },
  { name: "Rules", pathname: "rules", id: 2 },
  { name: "Sponsors", pathname: "sponsor", id: 3 },
  { name: "Registration", pathname: "registration", id: 4 },
];

const NavBar = () => {
  return (
    <nav className="bg-white w-full h-full px-16 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <Logo />
        <Menu />
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

const Menu = () => {
  return (
    <div className="flex gap-8 items-center">
      {menuItems.map((item, id) => (
        <Link
          href={item.pathname}
          key={id}
          className="cursor-pointer hover:text-blue-800"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
