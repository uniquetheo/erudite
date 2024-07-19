import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Button from "@/components/ui/Button";
import React from "react";

const SponsorPage = () => {
  return (
    <main>
      <NavBar />
      <section>
        <div>
          <h2>Why Sponsor</h2>
        </div>
        <div>
          <p>
            Your sponsorship will play a crucial role in the success of the
            &quot;ERUDITE CHALLENGE&quot; competition, helping us to inspire and empower
            young students across Ghana. Together, we can make a significant
            impact on the education and future of our nation&apos;s youth. We look
            forward to partnering with you on this exciting journey.
          </p>
          <h3>How to Become a Sponsor:</h3>
          <p>
            To express your interest in sponsoring the &quot;ERUDITE CHALLENGE&quot;
            competition, please contact our sponsorship team:
          </p>
        </div>
        <div>
          <Button link="/sponsor">Sponsor</Button>
        </div>
        <div className="p-8 rounded-xl">
          <h3>Our Sponsors</h3>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SponsorPage;
