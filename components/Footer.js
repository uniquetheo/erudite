"use client"

import React from "react";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const handleTopScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="w-full  max-w-7xl mx-auto">
      <div className="w-full sm:h-[250px] [380px] relative bg-[#000000c0]">
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full opacity-20 ">
          <Image
            className="object-cover w-full h-full"
            layout="fill"
            src="/../footer-bg.jpeg"
            alt="footer background"
            unoptimized
          />
        </div>
        <div className="text-white px-10">
          <div className="max-w-7xl mx-auto py-10 flex flex-col sm:flex-row text-left justify-between gap-4">
            <div>
              <h3 className="font-bold">Locate us</h3>
              <ul>
                <li>Abrantie</li>
                <li>Lapaz</li>
                <li>Accra</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Contact us</h3>
              <ul>
                <li>Call/WhatsApp: +233 54 176 0440</li>
                <li>Email: eruditechallenge@gmail.com</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Other Links</h3>
              <ul>
                <li>Gallery</li>
                <li>Video</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
          <div className="w-full px-20 py-10 flex justify-center">
            <div className="py-4 flex justify-center absolute bottom-0 right-5">
              <div className="">
                <button onClick={handleTopScroll} className="w-full bg-gradient-to-r from-[#92318d] to-[#f26a3d] text-white py-3 px-8 rounded-md hover:text-green-500 transition-colors flex justify-center items-center">
                  <IoIosArrowUp />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center min-h-10 bg-white">
        <span className="text-xs sm:text-md">
          Copyright &copy; 2010 - {new Date().getFullYear()} Erudite Challenge
        </span>
        <div className="w-[60px] h-[60px] flex items-center">
          <Image
            className="object-fill w-full"
            width={80}
            height={80}
            unoptimized
            src="/../LOGOsm.png"
            alt="Erudite logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
