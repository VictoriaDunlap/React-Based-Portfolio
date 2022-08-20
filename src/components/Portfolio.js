import React, {useState} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import AboutMe from './AboutMe'
import Projects from './Projects'


function Portfolio() {
    return(
        <div>
            <NavBar />
            <AboutMe />
            <Projects />
            <Footer />
        </div>
    )
}

export default Portfolio