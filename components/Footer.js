import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

const Footer = () => {
  return (
    <section>
      <div className="bg-[#00000070] w-full h-[400px]">
        <div className="w-full px-20 py-10 flex text-left justify-between">
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
        <hr />
        <div className="w-full px-20 py-10 flex justify-center">
          <Button link="/registration">Register</Button>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
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
    </section>
  );
};

export default Footer;
