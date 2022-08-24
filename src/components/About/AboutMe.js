import React from 'react'
import pfp from '../../assets/greenMeToResize.jpg'

const style = {
    width: "200px;",
    // display: 'inline'
}

function AboutMe() {
    return(
    <div id="About">
    <h1 class="mx-5 mt-5 mb-3 row justify-content-center" style={style}>Victoria Dunlap</h1>
        <div class="container-fluid row mb-5 ">
            <img id="img-shadow" class="col-lg-4" src={pfp} alt="Victoria Dunlap, sitting and smiling"></img>
            <div id="leadP" class="col-lg-8 mt-5 mb-5 lead ">
            <p>Welcome!</p>
            
            <p>My name is Victoria Dunlap. I am a Software Developer based in Atlanta, GA. I studied fullstack development at Georgia Institute of Technology and PR and marketing at Kennesaw State University. Through this I am an experienced team player and problem solver with a focus on mobile-first design. </p>

            <p>Languages I am familiar with include HTML, CSS, GIT, JavaScript, Node.js, React.js, Express.js, SQL, MERN Stack, GTM, Google Analytics, and Google Optimize. Current studies include Python, AWS, and HotJar. </p>

            <p>In my spare time I enjoy running and being outside with my two dogs, as well as seeing my friends at every opportunity. 
            </p>
            </div>
        </div>
    </div>
    )
}

export default AboutMe