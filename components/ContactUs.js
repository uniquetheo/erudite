import React from "react";
import Button from "./ui/Button";

const ContactUs = () => {
  return (
    <section className="w-full max-w-7xl mx-auto bg-white">
      <div className="py-10 text-xl font-bold">Contact Us</div>
      <div className="py-10">
        <Form />
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
