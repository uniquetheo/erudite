import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <HeroSection />
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
