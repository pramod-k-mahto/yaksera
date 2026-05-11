// HOME.jsx

import { Element } from "react-scroll";

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

      {/* HERO */}
      <div className="relative isolate overflow-hidden">

        {/* LEFT */}
        <div
          className="
            absolute top-[-120px] left-[-520px]
            z-0 hidden opacity-40 pointer-events-none lg:block
          "
        >
          <RotateLeft />
        </div>

        {/* RIGHT */}
        <div
          className="
            absolute top-[-120px] right-[-520px]
            z-0 hidden opacity-40 pointer-events-none lg:block
          "
        >
          <RotateLeft />
        </div>

        <div className="relative z-20">
          <Element>

          <Hero />
          </Element>
          <WhyYaksera />

          {/* SERVICES */}
          <Element
            name="services"
            className="scroll-mt-24"
          >
            <Services />
          </Element>
        </div>
      </div>

      {/* PORTFOLIO */}
      <Element
        name="portfolio"
        className="scroll-mt-24"
      >
        <Portfolio />
      </Element>

      {/* BLOG */}
      <Element
        name="blog"
        className="scroll-mt-24"
      >
        <Blog />
      </Element>

      {/* TESTIMONIALS */}
      <Element
        name="testimonials"
        className="scroll-mt-24"
      >
        <Testimonials />
      </Element>

      <TStack />
      <GlobalDelivery />
      <FAQ />
      <ExpertiseAreas />

      {/* PROCESS */}
      <Element
        name="process"
        className="scroll-mt-24"
      >
        <Process />
      </Element>

      <Call />
    </div>
  );
}

export default Home;