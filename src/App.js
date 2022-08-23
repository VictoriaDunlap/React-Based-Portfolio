import React from "react";
import './App.css';
import NavBar from '../src/components/NavBar/NavBar'
import AboutMe from '../src/components/About/AboutMe'
import Works from '../src/components/Works/Works'

function App() {
  return(
      <div>
          <NavBar />
          <AboutMe />
          <Works />
        
      </div>
  )
}

export default App
