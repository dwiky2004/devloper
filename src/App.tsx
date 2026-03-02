import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen text-primary-dark dark:text-primary-light flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20"> {/* Add padding top for sticky navbar */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;