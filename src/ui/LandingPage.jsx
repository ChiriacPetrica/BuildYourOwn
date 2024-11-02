import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../pages/Hero";

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[url('/src/assets/bg.png')] bg-cover bg-center">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default LandingPage;
