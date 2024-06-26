import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#131515] overflow-hidden">
      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.05] relative ">

        <div className="max-w-7xl mx-auto p-5 ">
          <div>
            <Navbar />
            <HeroSection />
          </div>
          
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-[#131515] abosolute -bottom-5 left-0 xl:bottom-0 w-full ">
          </div>
      </div>
      <div className="max-w-7xl mt-10 mx-auto p-5 ">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
