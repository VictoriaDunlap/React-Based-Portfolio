import React from 'react'
import pfp from '../assets/thisOne.jpg'

const style = {
    width: "200px;",
    // display: 'inline'
}

function AboutMe() {
    return(
    <div>
    <h1 class="mx-5 mt-5 row justify-content-center" style={style}>Victoria Dunlap</h1>
        <div class="container row mb-5 ">
            <img class="col-md-4 " src={pfp} alt="Victoria Dunlap, sitting and smiling"></img>
            <p class="col-md-8 mt-5 text-center mb-5 lead ">Full stack web developer leveraging a degree in PR and Marketing to create beautiful and interactive layouts to reach and engage large audiences. Completed a certificate from the Georgia Institute of Technology in full-stack development. Through this program I have harnessed skills in HTML, CSS, GIT, JavaScript, Node.js, React.js, Express.js, SQL, and MERN Stack. Experienced team player and problem solver with a focus on mobile-first design, ready to chat about what can be done for you!</p>
        </div>
    </div>
    )
}

export default AboutMe