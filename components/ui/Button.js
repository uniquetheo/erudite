import React from "react";
import Link from "next/link";

const Button = (props) => {
  return (
    <Link
      href={props.link}
      className="bg-blue-800 text-white px-8 py-3 rounded-md"
    >
      {props.children}
    </Link>
  );
};

export default Button;
