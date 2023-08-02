import Header from "./components/Header.jsx"
import Navbar from "./components/Navbar.jsx"

import "./App.css"

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-row">
        <Navbar />
        <main>
          this is the main
        </main>
      </div>
    </div>
  )
}

export default App
