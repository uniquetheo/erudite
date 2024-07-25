"use client";

import React, { useState } from "react";
import { SecondaryBtn } from "./Button";

const text = [
  "To inspire and empower the next generation of thinkers and leaders in Ghana by fostering a love for learning, critical thinking, and innovation through engaging and educational quiz competitions.",
  "Our Mission is to do a lot of good in the environment with these competitions.",
];

const VisionMission = () => {
  const [showVision, setShowVision] = useState(true);

  const handleToggle = () => {
    setShowVision(!showVision);
  };

  return (
    <section className="max-w-7xl mx-auto py-4 sm:py-8 bg-slate-50 shadow-md">
      <div className="grid sm:grid-cols-[1fr,200px] sm:h-[150px] h-full w-full relative bg-white shadow-xl">
        <div className="text-left h-full flex items-center py-5 px-10">
          <p>{showVision ? `${text[0]}` : `${text[1]}`}</p>
        </div>
        <div
          onClick={handleToggle}
          className="bg-white h-[150px] sm:w-[200px] sm:h-[200px] rounded-full sm:absolute right-0 top-[-20px] cursor-pointer flex items-center justify-center"
        >
          <div className="flex flex-col w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full border border-slate-800 border-dashed items-center justify-center">
            <span className={`${showVision ? "gradient-text sm:text-3xl text-2xl" : ""}`}>
              Vision
            </span>
            <span className={`${!showVision ? "gradient-text sm:text-3xl text-2xl" : ""}`}>
              Mission
            </span>
          </div>
        </div>
      </div>
      <div className="py-4 flex justify-center">
        <div className="">
          <SecondaryBtn>Read more...</SecondaryBtn>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
