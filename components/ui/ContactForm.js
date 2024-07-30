"use client";

import React, { useState } from "react";
import { FaUser, FaEnvelope, FaEdit, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or email service
    console.log("Form submitted:", formData);
    setFormData((prev) => {
      return { ...prev, name: "", email: "", subject: "", message: "" };
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          <FaUser className="inline mr-2" /> Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          <FaEnvelope className="inline mr-2" /> Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
          <FaEdit className="inline mr-2" /> Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          <FaEdit className="inline mr-2" /> Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#92318d] to-[#f26a3d] hover:bg-blue-700 text-white hover:text-green-500 p-2 rounded-md  transition-colors flex justify-center items-center"
        >
          <FaPaperPlane className="mr-2" /> Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
