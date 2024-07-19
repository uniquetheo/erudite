import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center w-full bg-white px-20">
      <div className="drop-shadow-xl ">
        <div>
          <Image
            width={1800}
            height={1200}
            src="/../54-2.jpg"
            alt="winners being presented a trophy"
            unoptimized
          />
        </div>
        <div className="py-4">Unlocking Brilliance to shape the Future...</div>
      </div>
    </section>
  );
};

export default HeroSection;
