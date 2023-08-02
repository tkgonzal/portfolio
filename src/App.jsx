import { Route, Routes } from "react-router-dom"

import Header from "./components/Header.jsx"
import Navbar from "./components/Navbar.jsx"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Interests from "./pages/Interests.jsx"
import Projects from "./pages/Projects.jsx"
import Credits from "./pages/Credits.jsx"

import "./App.css"

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-row">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/interests" element={<Interests />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/credits" element={<Credits />}/>
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
