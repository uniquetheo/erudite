import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
