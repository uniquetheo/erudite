import Image from "next/image";
import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";

const AboutPage = () => {
  return (
    <main className="min-h-[calc(100vh-80px)]">
      <section className="max-w-7xl mx-auto bg-white">
        <div className="py-6">
          <h2 className="text-2xl font-bold">About Erudite Challenge</h2>
        </div>
      </section>
      <section className="max-w-7xl mx-auto text-left">
        <div className="relative drop-shadow-xl w-full sm:h-[60vh] h-[40vh]  flex flex-col items-center">
          <Image
            className="object-cover w-full"
            fill
            src="/../about-us.jpg"
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
        <div className="flex flex-col gap-2 p-6 md:p-10 bg-slate-50 shadow">
          <p>
            Produced by Handwrite Medya and endorsed by the Ministry of
            Education, The Erudite Challenge is an engaging and competitive quiz
            show designed for Junior High and Senior High School students in
            Ghana.
          </p>
          <p>
            The competition is basically a question, answer and calculation quiz
            program played in four(4) rounds between four(4) teams of Two(2)
            players each. Each team has two standby Players.
          </p>
          <p>Questions on the show focuses on the four key competencies:</p>
          <ol className="list-decimal pl-8">
            <li>Information Technology(IT)</li>
            <li>STEM (Science, Technology, Engineering, Mathematics)</li>
            <li>Critical thinking</li>
            <li>Government and Current Affairs</li>
          </ol>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
