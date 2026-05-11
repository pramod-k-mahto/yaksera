import FAQ from "./FAQ";
import Call from "./Call";
import TStack from "./TStack";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import ExpertiseAreas from "./ExpertiseAreas";
import Process from "./Process";
import GlobalDelivery from "./GlobalDelivery";
import Hero from "../components/Hero";
import RotateLeft from "../components/RotateLeft";
import WhyYaksera from "./WhyYaksera";

function Home() {
  return (
    <div className="bg-white">
      {/* HERO WRAPPER */}
      <div className="relative isolate overflow-hidden">
        {/* LEFT ROTATING */}
        <div
          className="
            absolute
            top-[-120px]
            left-[-520px]
            opacity-40
            z-0
            pointer-events-none
            hidden lg:block

          "
        >
          <RotateLeft />
        </div>

        {/* RIGHT ROTATING */}
        <div
          className="
            absolute
            top-[-120px]
            right-[-520px]
            opacity-40
            z-0
            pointer-events-none
            hidden lg:block
          "
        >
          <RotateLeft />
        </div>

        {/* CONTENT */}
        <div className="relative z-20">
          <Hero />
          <WhyYaksera />
          <Services />
        </div>
      </div>

      <Portfolio />
      <Blog />
      <Testimonials />
      <TStack />
      <GlobalDelivery />
      <FAQ />
      <ExpertiseAreas />
      <Process />
      <Call />
    </div>
  );
}

export default Home;
