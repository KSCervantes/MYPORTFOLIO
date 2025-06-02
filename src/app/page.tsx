import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
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
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
