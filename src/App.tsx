import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThreeBackground from './components/ThreeBackground';
import ProjectPage from './components/ProjectPage';
import Certifications from './components/Certifications';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#000000]">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Certifications />
              <Contact />
              <ThreeBackground />
            </>
          } />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;