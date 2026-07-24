import Hero from "../components/Hero";
import Mission from "../components/Mission";
import HowItWorks from "../components/HowItWorks";
import AISection from "../components/AISection";
import Benefits from "../components/Benefits";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <HowItWorks />
      <AISection />
      <Benefits />
      <WhyChooseUs />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;