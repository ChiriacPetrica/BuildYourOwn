import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../pages/Hero";
import Newsletter from "../pages/Newsletter";
import Features from "../pages/Features";

import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { Toaster } from "react-hot-toast";
const LandingPage = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} gutter={8} />
      <div className="flex min-h-screen flex-col space-y-24 bg-[url('/src/assets/bg.png')] bg-cover bg-center">
        <Navbar />
        <Hero />
        <Features />
        <Newsletter />
        <Footer />
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 z-50 rounded-full bg-slate-300 p-2 uppercase text-slate-900 transition-all duration-300 hover:bg-slate-600 hover:text-slate-50 hover:shadow-md"
        >
          <MdKeyboardDoubleArrowUp className="inline-block" size={24} />
        </button>
      </div>
    </>
  );
};

export default LandingPage;
