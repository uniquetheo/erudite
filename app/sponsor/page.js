import ContactUs from "@/components/ContactUs";
import React from "react";

const SponsorPage = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto py-8 px-10 bg-white">
        <div className="sm:px-10">
          <div>
            <h2 className="py-10 text-xl font-bold hidden">Why Sponsor</h2>
          </div>
          <div>
            <h2 className="py-10 text-xl font-bold">Sponsorship Packages</h2>
          </div>
          <div className="text-left custom-list">
            <ol>
              <li>
                Title Sponsor:
                <ul>
                  <li>
                    Exclusive naming rights to the competition (e.g., &quot;Your
                    Brand ERUDITE CHALLENGE&quot;).
                  </li>
                  <li>Logo in all Erudite Challenge T shirts.</li>
                  <li>
                    Logo placement on all event materials, website, and
                    televised broadcasts.
                  </li>
                  <li>
                    Special mentions in all press releases, social media
                    campaigns, and promotional activities.
                  </li>
                  <li>Opportunity to present awards at the grand finale.</li>
                  <li>
                    Complimentary booth space at the event venue for brand
                    promotion.
                  </li>
                </ul>
              </li>

              <li>
                Gold Sponsor:
                <ul>
                  <li>
                    Prominent logo placement on website, and televised
                    broadcasts.
                  </li>
                  <li>
                    Mentions in press releases, social media campaigns, and
                    promotional activities.
                  </li>
                  <li>
                    Complimentary booth space at the event venue for brand
                    promotion.
                  </li>
                </ul>
              </li>

              <li>
                Silver Sponsor:
                <ul>
                  <li>Logo placement on website.</li>
                  <li>
                    Mentions in social media campaigns and promotional
                    activities.
                  </li>
                  <li>
                    Complimentary booth space at the event venue for brand
                    promotion.
                  </li>
                </ul>
              </li>

              <li>
                Bronze Sponsor:
                <ul>
                  <li>Logo placement on website.</li>
                  <li>Mentions in social media campaigns.</li>
                </ul>
              </li>

              <li>
                Customized Sponsorship:
                <p>
                  We also offer customized sponsorship packages to meet your
                  specific marketing and branding goals. Please contact us to
                  discuss how we can tailor a sponsorship package that aligns
                  with your objectives
                </p>
              </li>
            </ol>
          </div>
          <div>
            <h2 className="py-10 text-xl font-bold">
              How to Become a Sponsor:
            </h2>
            <p>
              To express your interest in sponsoring the &quot;ERUDITE
              CHALLENGE&quot; competition, please contact our sponsorship team:
            </p>
          </div>
          <div className="p-8 rounded-xl hidden">
            <h3>Our Sponsors</h3>
          </div>
        </div>
      </section>
      <ContactUs />
    </main>
  );
};

export default SponsorPage;
