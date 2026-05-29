import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";

import Projects from "./Projects";
import Graphics from "./Graphics";
import Models from "./Models";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <div className="blur-circle blur-one"></div>
      <div className="blur-circle blur-two"></div>
      <div className="blur-circle blur-three"></div>

      <Cursor />

      <Hero />

      <Skills />

      <About />

      <section id="uiux">
        <Projects />
      </section>

      <section id="graphics">
        <Graphics />
      </section>

      <section id="threed">
        <Models />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default Home;