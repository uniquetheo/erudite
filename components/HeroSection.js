import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center w-full h-[500px] bg-white">
      <div className="w-[80%] h-[400px]">
        <img
          className="w-full h-full object-contain"
          src="../54-2.jpg"
          alt="winners being presented a trophy"
        />
      </div>
      <div>Unlocking Brilliance to shape the Future...</div>
    </section>
  );
};

export default HeroSection;
