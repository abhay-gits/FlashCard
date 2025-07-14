import { Banner } from "../components/LandingPage/Banner.tsx";
import { Footer } from "../components/LandingPage/Footer.tsx";
import { Hero } from "../components/LandingPage/Hero.tsx";
import { Navbar } from "../components/LandingPage/Navbar.tsx";

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Banner />
      <Hero />
      <Footer />
    </div>
  );
};

export default LandingPage;
