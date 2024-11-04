import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../pages/Hero";
import Newsletter from "../pages/Newsletter";

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[url('/src/assets/bg.png')] bg-cover bg-center">
      <Navbar />
      <Hero />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LandingPage;
