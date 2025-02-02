import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Hero from "./components/Hero.js"
import About from "./components/About.js"
import Skills from "./components/Skills.js"
// import Experience from "./components/Experience.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"
// import ThreeBackground from "./components/ThreeBackground.js"
import ProjectPage from "./components/ProjectPage.js"
import Certifications from "./components/Certifications.js"
import { useEffect } from "react"

// Create a ScrollToTop component
function ScrollToTop() {
  const location = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#000000]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                {/* <Experience /> */}
                <Projects />
                <Certifications />
                <Contact />
                {/* <ThreeBackground /> */}
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
