import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import Header from "./components/Header.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import TopButton from "./components/TopButton.jsx"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Interests from "./pages/Interests.jsx"
import Projects from "./pages/Projects.jsx"
import Credits from "./pages/Credits.jsx"

import "./App.css"

/**
 * @returns {ReactComponent} The content for the website
 */
function App() {
  const location = useLocation()

  useEffect(() => {
    window.addEventListener("scroll", updateBackgroundPosition)

    return () => window.removeEventListener("scroll", updateBackgroundPosition)
  }, [])
 
  /**
   * Replicates the behaviour of the CSS property "background-attachment: 
   * fixed" on the body's main background. Done to accomodate mobile Safari's
   * lack of support for this property.
   */
  const updateBackgroundPosition = () => {
    document.body.style.backgroundPosition = `center ${window.scrollY}px`
  }

  /**
   * Determines the page title (used for the page content div)
   * Using the site path
   * @returns {string} The title text to use for the current route
   */
  const getPageTitle = () => {
    const path = location.pathname

    if (path === "/") {
      return "Home"
    }

    const baseTitle = path.substring(1)
    const processedTitle = baseTitle.at(0).toUpperCase() +
      baseTitle.substring(1)

    return processedTitle
  }

  return (
    <div className="container">
      <Header />
      <div className="main-row">
        <Navbar />
        <main>
          <div className="title">{getPageTitle()}</div>
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/interests" element={<Interests />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/credits" element={<Credits />}/>
            </Routes>
          </div>
        </main>
      </div>
      <Footer />
      <TopButton />
    </div>
  )
}

export default App
