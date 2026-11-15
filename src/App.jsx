import React from 'react';
import Hero from './sections/hero';
import About from './sections/about';
import Experience from './sections/experience';
import Skills from './sections/skills';
import Services from './sections/services';
import Projects from './sections/project';
import Education from './sections/education';
import Testimonials from './sections/testimonials';
import Contact from './sections/contacts';

function App() {
  return (
    <main className="bg-[#090d16] text-slate-100 min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Education />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
