import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Education from "../components/Education";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
};

export default Home;
