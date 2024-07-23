import React from "react";
import Link from "next/link";

const Button = (props) => {
  return (
    <Link
      href={props.link}
      className="w-full bg-gradient-to-r from-[#92318d] to-[#f26a3d] text-white py-3 px-8 rounded-md hover:text-green-500 transition-colors flex justify-center items-center"
    >
      {props.children}
    </Link>
  );
};

export default Button;
