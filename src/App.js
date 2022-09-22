import React from "react";
import './App.css';
import NavBar from '../src/components/NavBar/NavBar'
import AboutMe from './components/About/AboutMe'
import Works from '../src/components/Works/Works'
import Footer from '../src/components/Footer/Footer'
// import Testimonials from '../src/components/Testimonials/Testimonials'

function App() {
  return(
      <div>
          <NavBar />
          <AboutMe />
          <Works />
          {/* <Testimonials /> */}
          <Footer />
      </div>
  )
}

export default App
