import React from "react";
import GoalSection from "./GoalSection";
import VisionMission from "./ui/VissionMission";
import { SecondaryBtn } from "./ui/Button";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="w-full max-w-7xl mx-auto bg-white">
      <div className="py-10 text-xl font-bold">
        <h2 className="">About Us</h2>
      </div>
      <div className="px-10 text-left">
        <p>
          &quot;ERUDITE CHALLENGE&quot; is an engaging and competitive quiz show
          designed for Junior High and Senior High School students in Ghana.
          This annual event aims to challenge students in four key areas:
          Information Technology (IT), Science, Technology, Engineering, and
          Mathematics (STEM ), Critical Thinking, and Government. The
          competition fosters a culture of learning, critical thinking, and
          teamwork, with a strong emphasis on real-world applications and
          problem-solving skills.
        </p>
      </div>
      <div className="py-4 flex justify-center">
        <Link href={`/about-us`} className="">
          <SecondaryBtn>Read more...</SecondaryBtn>
        </Link>
      </div>
      <VisionMission />
      <GoalSection />
    </section>
  );
};

export default AboutUs;
