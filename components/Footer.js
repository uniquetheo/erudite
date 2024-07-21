import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full  max-w-7xl mx-auto">
      <div className="w-full h-[400px] relative bg-[#000000c0]">
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
          <div className="max-w-7xl mx-auto py-10 flex text-left justify-between">
            <div>
              <h3>Locate us</h3>
              <ul>
                <li>Abrantie</li>
                <li>Lapaz</li>
                <li>Accra</li>
              </ul>
            </div>
            <div>
              <h3>Contact us</h3>
              <ul>
                <li>Call/WhatsApp: +233 54 176 0440</li>
                <li>Email: eruditechallenge@gmail.com</li>
              </ul>
            </div>
            <div>
              <h3>Other Links</h3>
              <ul>
                <li>Gallery</li>
                <li>Video</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
          <div className="w-full px-20 py-10 flex justify-center">
            <Button link="/registration">Register</Button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center bg-white">
        <span>Copyright @ 2010-2024 Erudite Challenge</span>
        <div className="w-20 h-20 flex items-center">
          <Image
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
