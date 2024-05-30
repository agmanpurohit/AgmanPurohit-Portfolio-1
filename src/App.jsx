import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default App;
