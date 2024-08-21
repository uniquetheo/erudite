import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-[calc(100vh-80px)]">
      <section className="max-w-7xl mx-auto">
        <div className="py-6">
          <h2 className="text-2xl font-bold">About Erudite Challenge</h2>
        </div>
      </section>
      <section className="max-w-7xl mx-auto text-left">
        <div>
          <p>
            Produced by Handwrite Medya and endorsed by the Ministry of
            Education, The Erudite Challenge is an engaging and competitive quiz
            show designed for junior high and senior high school students in
            Ghana.
          </p>
          <p>
            The competition is basically a question, answer and calculation quiz
            program played in four(4) rounds between four(4) teams of Two(2)
            players each. Each team has two standby Players.
          </p>
          <p>Questions on the show focuses on the four key competencies:</p>
          <ol className="list-decimal pl-8">
            <li>InformationTechnology(IT)</li>
            <li>STEM (Science, Technology, Engineering, Mathematics)</li>
            <li>Critical thinking</li>
            <li>Government and current affairs</li>
          </ol>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
