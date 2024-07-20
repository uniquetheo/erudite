import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center w-full  max-w-7xl mx-auto md:px-30">
      <div className="relative drop-shadow-xl w-full h-[60vh]">
        <Image
          className="object-cover w-full h-full"
          layout="fill"
          src="/../54-2.jpg"
          alt="winners being presented a trophy"
          unoptimized
        />
        <div className="absolute bottom-4 left-0 w-full text-center text-white py-4 bg-black bg-opacity-50">
          Unlocking Brilliance to shape the Future...
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
