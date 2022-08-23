import React from "react";
import './App.css';
import NavBar from '../src/components/NavBar/NavBar'
import AboutMe from '../src/components/About/AboutMe'
import Works from '../src/components/Works/Works'
import Footer from '../src/components/Footer/Footer'

function App() {
  return(
      <div>
          <NavBar />
          <AboutMe />
          <Works />
          <Footer />
      </div>
  )
}

export default App
