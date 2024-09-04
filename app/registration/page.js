import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

const RegistrationPage = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto bg-white px-10 py-8">
        <div>
          <h2 className="py-10 text-xl font-bold">
            Eligibility & Registration
          </h2>
        </div>
        <div className="text-left flex flex-col gap-4 sm:px-10 pb-10">
          <p>
            • Open to all Junior High and Senior High Schools in Ghana. (i.e.
            Government and Private schools) Students are texted on these key
            areas:
          </p>
          <p>
            Information Technology (IT) Science, Technology, Engineering, and
            Mathematics (STEM ) Critical Thinking Government.
          </p>
          <p>
            • Each school can register a team consisting of 4 students and 1
            faculty advisor.
          </p>
          <h3 className="text-base font-bold">Registration Process:</h3>
          <p>
            Visit the official &quot;ERUDITE CHALLENGE&quot; website at
            www.eruditechallenge.com. Click on the &quot;Register Now&quot;
            Button on the homepage. Fill out the online registration form with
            the following details: School name and address Team members&apos;
            names, grades, and ages Faculty advisor&apos;s name and contact
            information Email address and phone number for correspondence.
          </p>
          <h3 className="text-base font-bold">Registration Fee:</h3>
          <p>
            A nominal registration fee of GHS 150 per team is required. Payment
            can be made via mobile money or bank transfer Detailed payment
            instructions will be provided on the registration page.
          </p>
          <h3 className="text-base font-bold">Submission of Documents:</h3>
          <p>
            After completing the online registration form and payment, schools
            must upload the following documents: A letter of authorization from
            the school&apos;s headmaster or principal.
          </p>
          <p>
            <span className="text-red-500 font-bold">All documents</span> should
            be in <span className="text-red-500 font-bold">PDF </span>or
            <span className="text-red-500 font-bold"> JPEG</span> format and
            uploaded through the registration portal.
          </p>
        </div>
        <div className="sm:px-10">
          <div>
            <Image
              width={2500}
              height={1667}
              src="/../registration_open.jpg"
              alt="registration is open image"
              unoptimized
            />
          </div>
          <div className="py-4 flex justify-center">
            <div className="">
              <Button link="registration">Register Now</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegistrationPage;
