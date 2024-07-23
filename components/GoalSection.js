import React from "react";
import Image from "next/image";
import Button from "./ui/Button";

const GoalSection = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-800 p-8">
        <div className="bg-red-200 h-60">
          <Image
            className="object-cover w-full h-full"
            src="/../../light.jpg"
            alt="image of a light"
            width={612}
            height={409}
            unoptimized
          />
        </div>
        <div className="bg-red-300 h-60 p-2">
          <h3>Our Goal</h3>
          <p>
            &quot;ERUDITE CHALLENGE&quot; is more than just a competition; it is
            a journey of discovery, learning, and growth. By challenging young
            minds and providing them with a platform to excel, we aim to nurture
            the future leaders and innovators of Ghana
          </p>
        </div>
        <div className="bg-red-400 h-60 p-2">
          <h3>Why Participate</h3>
          <p>
            Participating in the &quot;Erudite Challenge&quot; offers students a
            unique opportunity to showcase their knowledge, enhance their
            critical thinking skills, and engage in exciting intellectual
            competition. Additionally, teams have the chance to win trophies,
            and recognition, providing valuable rewards for their hard work and
            dedication
          </p>
        </div>
        <div className="bg-red-500 h-60">
          <Image
            className="object-cover w-full h-full"
            src="/../../question.jpg"
            alt="image of a light"
            width={614}
            height={344}
            unoptimized
          />
        </div>
      </div>
      <div className="py-4 flex justify-center">
        <div className="">
          <Button link="/registration">Register</Button>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
