import React from "react";
import Button from "./ui/Button";
import ContactForm from "./ui/ContactForm";
import { FaLocationDot, FaGlobe } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contactDetails = [
  {
    text: "Lapaz Abrantie, Accra Ghana",
    icon: <FaLocationDot />,
    type: "location",
  },
  {
    text: "+233 541760440",
    icon: <FaPhoneAlt />,
    type: "phone",
  },
  {
    text: "eruditechallenge@gmail.com",
    icon: <MdEmail />,
    type: "email",
  },
  {
    text: "eruditechallenge.com",
    icon: <FaGlobe />,
    type: "website",
  },
];

const ContactUs = () => {
  return (
    <section className="w-full max-w-7xl mx-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 py-10">
        <div className="flex flex-col items-center">
          <div className="py-10 text-xl font-bold">Contact Us</div>
          <div className="text-left flex flex-col w-[300px]">
            {contactDetails.map((item, id) => {
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-[30px,1fr] h-full items-center gap-4 py-4"
                >
                  <div className="flex items-center justify-center border w-8 h-8 rounded-full">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

const Form = () => {
  return (
    <form className="flex flex-col w-full">
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="cooperation">Cooperation</label>
        <select>
          <option id="1">JHS</option>
          <option id="2">SHS</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Message: </label>
        <input type="textbox" id="message" required />
      </div>
      <div>
        <Button link="/sponsor">Sponsor</Button>
      </div>
    </form>
  );
};
