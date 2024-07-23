import React from "react";
import GoalSection from "./GoalSection";
import VisionMission from "./ui/VissionMission";

const AboutUs = () => {
  return (
    <section className="w-full max-w-7xl mx-auto bg-white">
      <div className="py-10 text-xl font-bold">About Us</div>
      <div className="py-8 px-10">
        <p>
        &quot;ERUDITE CHALLENGE&quot; is an engaging and competitive quiz show designed
          for junior high and senior high school students in Ghana. This annual
          event aims to challenge students in four key areas: Information
          Technology (IT), Science, Technology, Engineering, and M athematics
          (STEM ), Critical Thinking, and Government. The competition fosters a
          culture of learning, critical thinking, and teamwork, with a strong
          emphasis on real-world applications and problem-solving skills.
        </p>
      </div>
      <VisionMission />
      <GoalSection />
    </section>
  );
};

export default AboutUs;
