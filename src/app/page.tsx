import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Learning from './components/Learning';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WorkExperience />
      <Learning />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
