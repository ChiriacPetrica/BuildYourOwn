import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../pages/Hero";
import Newsletter from "../pages/Newsletter";
import Features from "../pages/Features";
const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col space-y-24 bg-[url('/src/assets/bg.png')] bg-cover bg-center">
      <Navbar />
      <Hero />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LandingPage;
