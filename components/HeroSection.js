import Image from "next/image";
import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center w-full  max-w-7xl mx-auto md:px-30">
      {/* relative */}
      <div className="relative drop-shadow-xl w-full sm:h-[60vh] h-[40vh]  flex flex-col items-center">
        <Image
          className="object-cover w-full"
          fill
          src="/../54-2.jpg"
          alt="winners being presented a trophy"
          priority
          unoptimized
        />
        {/* absolute bottom-4 left-0 */}
        <div className="absolute bottom-0 bg-white w-full">
          <div className="text-center flex items-center justify-center gap-3 gradient-text sm:py-4 py-2 mx-auto max-w-[450px]">
            <HiOutlineLightBulb className="text-[#92318d]" />
            Unlocking Brilliance to shape the Future...
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
