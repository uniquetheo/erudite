"use client"

import React, { useState } from 'react';

const VisionMission = () => {
  const [showVision, setShowVision] = useState(true);

  const handleToggle = () => {
    setShowVision(!showVision);
  };

  return (
    <section className="max-w-4xl mx-auto p-4 sm:p-8 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">
          {showVision ? 'Our Vision' : 'Our Mission'}
        </h2>
        <button
          onClick={handleToggle}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Toggle
        </button>
      </div>
      <p className="text-lg text-gray-700">
        {showVision
          ? 'Our vision is to create a better world through innovation and excellence.'
          : 'Our mission is to provide exceptional value to our customers through high-quality products and services.'}
      </p>
    </section>
  );
};

export default VisionMission;


// To inspire and empower the next generation of
// thinkers and leaders in Ghana by fostering a love
// for learning, critical thinking, and innovation through
// engaging and educational quiz competitions.

