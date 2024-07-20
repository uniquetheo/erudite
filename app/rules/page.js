import Button from "@/components/ui/Button";
import React from "react";

const RulesPage = () => {
  return (
    <main>
      <section className="px-20 py-8">
        <div>
          <h2 className="pb-4 text-xl font-bold">
            Rules and Regulations for &quot;ERUDITE CHALLENGE&quot; Competition
          </h2>
        </div>
        <div className="text-left">
          <ol>
            <li>
              Eligibility:
              <ul>
                <li>
                  The competition is open to junior high and senior high school
                  students across Ghana.
                </li>
                <li>
                  Each school may register one team consisting of 3 students and
                  1 faculty advisor.
                </li>
                <li>
                  Students must be currently enrolled in the school they
                  represent.
                </li>
              </ul>
            </li>
            <li>
              Registration:
              <ul>
                <li>
                  Teams must complete the online registration form and pay the
                  registration fee by the specified deadline.
                </li>
                <li>
                  All required documents, including authorization from the
                  school&apos;s headmaster or principal
                </li>
              </ul>
            </li>
            <li>
              Competition Structure:
              <ul>
                <li>
                  The competition will be conducted in four stages: Preliminary
                  Rounds, Quarterfinals, Semifinals, and Grand Finale.
                </li>
                <li>
                  Each stage will include a combination of written and oral
                  questions and problem-solving tasks
                </li>
              </ul>
            </li>
            <li>
              Quiz Format:
              <ul>
                <li>
                  Preliminary Rounds: Multiple-choice and short-answer questions
                  a cross IT, STEM , Critical Thinking, and Government.
                </li>
                <li>
                  Quarterfinals: Written and oral questions, including a buzzer
                  round.
                </li>
                <li>
                  Semifinals: Complex problem-solving, case study challenges,
                  debates, and presentations.
                </li>
                <li>
                  Grand Finale: Rapid-fire questions, problem-solving tasks, and
                  project presentations.
                </li>
              </ul>
            </li>
            <li>
              Scoring:
              <ul>
                <li>
                  Each correct answer in the written and oral rounds will earn
                  points.
                </li>
                <li>The buzzer round will reward speed and accuracy.</li>
              </ul>
            </li>
            <li>
              Conduct:
              <ul>
                All participants must adhere to the highest standards of honesty
                and integrity.
              </ul>
              <ul>
                Any form of cheating, plagiarism, or misconduct will result in
                immediate disqualification of the team.
              </ul>
            </li>
            <li>
              Timing:
              <ul>
                <li>
                  Teams must arrive at the venue at least 30 minutes before the
                  scheduled start of their round.
                </li>
                <li>
                  Each round will have specific time limits for answering
                  questions, solving problems, and making presentations.
                </li>
                <li>
                  Teams that are late or exceed time limits may be penalized.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div>
          <Button link="/registration">Read More</Button>
        </div>
        <div>
          <span>Other Links</span>
        </div>
      </section>
    </main>
  );
};

export default RulesPage;
